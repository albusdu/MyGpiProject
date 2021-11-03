$(document).ready(function(){
    //toggle modal
    $('.open-modal').click(function(){
        let modal = $(this).attr('data-modal');
        $(modal).addClass('active')
    })
    $('.close-btn,.close-modal').click(function(){
        let modal = $(this).attr('data-modal');
        $(modal).removeClass('active')
    })
    //toggle modal
    //input
    $('input').focus(function(){
        let control;
        if($(this).attr('class') =='gpi-select__main-input') {
            control = $(this).parent().parent().parent().parent().parent('.gpi-control-container')
            control.find('.gpi-select__panel').addClass('active')
        }else{
            control = $(this).parent().parent('.gpi-control-container')
        }
        control.addClass('focus')
        control.find('.gpi-input__label').addClass('focus float')
        control.find('.gpi-input__container').addClass('focus')
    })
    $('input').blur(function(){
        let control;
        if($(this).val().length > 0) {
            return;
        }
        if($(this).attr('class') =='gpi-select__main-input') {
            control = $(this).parent().parent().parent().parent().parent('.gpi-control-container')
        }else{
            control = $(this).parent().parent('.gpi-control-container')           
            control.removeClass('focus')
            control.find('.gpi-input__label').removeClass('focus float')
            control.find('.gpi-input__container').removeClass('focus')
        }
    })
    //Select
     $('.gpi-select__panel-option').click(function(){
        let control = $(this).parent().parent().parent()
        $('.gpi-select__panel-option').removeClass('active')
        $(this).addClass('active')
        control.find('.gpi-select__main-input').val($(this).text())
        control.find('.gpi-select__panel').removeClass('active')
        control.parent().parent().parent().removeClass('focus')
        if(control.find('.gpi-select__main-input').attr('id') == 'chip-input'){
            let val = control.find('.gpi-select__main-input').val()
            createChip(val)
        }
        if( $('#clinics-select').val().length > 0) {
            $('#chip').removeClass('disabled')
        }else{
            $('#chip').addClass('disabled')
        }
        
    })
    $(document).mouseup(function(e) 
    {
        var container = $(".gpi-select__wrap");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            container.find('.gpi-select__panel').removeClass('active')
        }
    });
    //input
    //steps
    let currentSection = getSection() ? Number(getSection()) : 0;
    showTab(currentSection)
    let prev = $('.gpi-wizard__navigation-buttons-item--m.left')
    let next = $('.gpi-wizard__navigation-buttons-item--m.right')
    prev.click(function(){
        if (currentSection == 0) {
            return;
        }
        nextPrev(-1);
    })
    next.click(function(){
        let sectionLength = $('.step-section').length
        if (currentSection == sectionLength - 1) {
            return;
        }
        nextPrev(1);
    })
    function showTab(n) {
        var x = document.getElementsByClassName("step-section");  
        var nav = document.getElementsByClassName("gpi-wizard__navigation-item");   
        x[n].style.display = "block";   

        $('.gpi-wizard__navigation-item').removeClass('active')
        if (n == 0){
            nav[0].classList.add('active')
        } else if(n == 1) {
            nav[1].classList.add('active')
        } else if(n == 2){
            nav[2].classList.add('active')
            $('.gpi-wizard__navigation-item-subitem').eq(0).addClass('active')
            $('.gpi-wizard__navigation-item-subitem').eq(1).removeClass('active hasError')
            return;
        }else if(n == 3){
            nav[2].classList.add('active')
            $('.gpi-wizard__navigation-item-subitem').eq(0).removeClass('active')
            $('.gpi-wizard__navigation-item-subitem').eq(1).addClass('active hasError')
            return;
        }else if(n == 4){
            nav[3].classList.add('active')
        }
        
    }
    function nextPrev(n) {
        var x = document.getElementsByClassName("step-section");
        x[currentSection].style.display = "none";
        currentSection = currentSection + n;
        setSection(currentSection)
        showTab(currentSection);
    }
    function setSection(value) {
        localStorage.clear();
        localStorage.setItem('activeSection',value);
    }
    function getSection() {
        return localStorage.getItem('activeSection');
    }
    //steps
    //holderAction
    $('.gpi-holder-list__holder').click(function(){
        $('.gpi-holder-list__holder').removeClass('active')
        $(this).addClass('active')
    })
    //holderAction
    //checkbox
    $('.gpi-checkbox').click(function(){
        $(this).toggleClass('checked')
    })
    //checkbox
    //inputAction
    $('#medicines-input').keyup(function(){        
        if($(this).val().length > 0){
            addRemoveAction('#quantity-wrap', 'remove', 'disabled')
        }else{
            addRemoveAction('#quantity-wrap', 'add', 'disabled')
        }
        if($(this).val() == 'ბძჭ'){
            $('.medicines-block .gpi-modal__announce').hide()
            $('.medicines-block .error-text').show()
            addRemoveAction('#quantity-wrap', 'add', 'disabled')
        }else{
            $('.medicines-block .gpi-modal__announce').show()
            $('.medicines-block .error-text').hide()
            addRemoveAction('#quantity-wrap', 'remove', 'disabled')
        }
    })
    $('#quantity-input').keyup(function(){
        if($(this).val().length > 0){
            addRemoveAction('.add-btn', 'add', 'active')
        }
    })
    $('.add-btn.ambulatory-block--item').click(function(){
        $('.chips-container').show()
    })
    $('.mat-chip--m').click(function(){
        $('.add-btn.ambulatory-block--item .icon').hide()
        $('.add-btn.ambulatory-block--item .icon-check').show()
    })
    function addRemoveAction(el, action, cl) {
        if(action == 'remove'){
            $(el).removeClass(cl);
        }
        if(action == 'add'){
            $(el).addClass(cl);
        }
    }
    //inputAction
    $('input[name="service-radio"]').change(function(){
        addRemoveAction('.add-btn', 'remove', 'active')
        if($(this).is(':checked')){
            let id = $(this).attr('id')
            if(id == "ambulatory"){
                $('.medicines-block').hide();
                $('.ambulatory-block').show();
            }else if(id == "medicines"){
                $('.ambulatory-block').hide();
                $('.medicines-block').show();
            }
        }
    })
    //chips
    $('#chip-input').keyup(function(){
        if($(this).val().length > 0){
            addRemoveAction('.add-btn.ambulatory-block--item', 'add', 'active')
        }
    })
    $('.add-btn.ambulatory-block--item').click(function(){
        let val = $('#chip-input').val();
        createChip(val)
    })
    function createChip(val){
        $('.ambulatory-block .chips-container').append(`<div class="mat-chip mat-chip--m">${val}<div class="icon-bg"><svg class="icon"><use xlink:href="#close-icon"></use></svg></div></div>`); 
        removeOption(); 
    }
    function removeOption(){
        $('.mat-chip .icon-bg').click(function(){
            $(this).parent().hide()
        })
    }
    //navigation
    $('.gpi-wizard__navigation-item').click(function(){
        console.log($(this).index())
    })
})
