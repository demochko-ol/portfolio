(function ($) {

    $('.e-btn, .e-btn-icon, .e-btn-img').click(function(e){
        e.preventDefault();
    });

    //Add focus for message textarea
    $('#message').on('shown.bs.modal', function (e) {
        $('.message textarea').focus();
    });

    //Add focus for dialing
    $('#dialing').on('shown.bs.modal', function (e) {
       $('.dialing-input').focus();
    });

    //For edit table data
    $('.wrap-editable .e-edit').click(function(e){
        $(this).closest('tr').addClass('editable-row');

        $(this).closest('.wrap-editable').find('input[type="text"]').focus();

        e.preventDefault();
    });

    $.each( $('.wrap-editable input[type="text"]'), function() {
        var valText = $(this).closest('.wrap-editable').find('.editable-text span').text();
        $(this).val(valText);
    });

    $('.wrap-editable .e-save').click(function(e){

        var changeValText = $(this).closest('.wrap-editable').find('input[type="text"]').val();
        $(this).closest('.wrap-editable').find('.editable-text span').text(changeValText);

        $(this).closest('tr').removeClass('editable-row');

        e.preventDefault();
    });

    //For edit note
    $('.wrap-edit a').click(function(e){
        $(this).closest('.note').addClass('editable-block');

        $(this).closest('.note').find('textarea').focus();

        e.preventDefault();
    });

    $.each( $('.wrap-textarea-editable textarea'), function() {
        var valText = $(this).closest('.note').find('.text-note').text();
        $(this).val(valText);
    });

    $('.wrap-save a').click(function(e){

        var changeValText = $(this).closest('.note').find('textarea').val();
        $(this).closest('.note').find('.text-note').text(changeValText);

        $(this).closest('.note').removeClass('editable-block');

        e.preventDefault();
    });


    // For dialing
    $('.numerical-keyboard button').on('click', function(){
        var numb = $(this).val();
        $('#dialing-input').val($('#dialing-input').val() + numb);
    });

    $('.clear-dialing-input').on('click', function(){
        $('#dialing-input').val('').focus();
    });

    var clearInput = function(input){
        var oldVal = $(input).val();
        $(input).val(oldVal.replace(/[^0-9|*|#]/g, ''));
    };

    $('#dialing-input').on('change', function(){
        clearInput(this);
    });

    $('#dialing-input').on('keyup', function(){
        clearInput(this);
    });

    //tooltip
    $('[data-toggle="tooltip"]').tooltip({
        html: true
    });

    //For button type 'file'
    $(document).on('change', '.btn-file :file', function() {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);

    });

    $('.btn-file :file').on('fileselect', function(event, numFiles, label) {

        var inputTag = $(this).parents('.input-file-group').find('.file'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;

        if( inputTag.length ) {
            inputTag.text(log);
        } else {
            if( log ) alert(log);
        }

        /*  html for button 'file'
        <div class="input-file-group">
             <span class="btn-file m-cta m-icon">
             <i class="material-icons">cloud_upload</i>Upload file <input type="file">
             </span>
             <span class="file"></span>
        </div> */

    });

    //For button type 'file' data fields
    $(document).on('change', '.b-data .btn-file :file', function() {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);

        $('#data-fields').modal();
    });

    $('.b-data .btn-file :file').on('fileselect', function(event, numFiles, label) {

        var inputTag = $('#data-fields').find('.wrap-title h3').find('span'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;

        if( inputTag.length ) {
            inputTag.text(': ' + log);
        } else {
            if( log ) alert(log);
        }

    });

    //Toggle
    function changeToggleStyle(el, parent) {
        if($(el).prop("checked")) {
            $(el).closest(parent).addClass('active');
            $(el).closest('.toggle').find('span').text('Active');
        } else {
            if($(el).closest(parent).hasClass('active')) {
                $(el).closest(parent).removeClass('active');
                $(el).closest('.toggle').find('span').text('Paused');
            }
        }
    };

    $('.b-data .toggle input[type="checkbox"]').on('change', function() {
        changeToggleStyle($(this), 'li');
    });

    $.each( $('.b-data .toggle input[type="checkbox"]'), function(){
        changeToggleStyle($(this), 'li');
    });


    //Toggle on/off
    function changeToggle(el, parent) {
        if($(el).prop("checked")) {
            $(el).closest(parent).addClass('active');
        } else {
            if($(el).closest(parent).hasClass('active')) {
                $(el).closest(parent).removeClass('active');
            }
        }
    };
    $('.call-recording .toggle input[type="checkbox"]').on('change', function() {
        changeToggle($(this), '.call-recording');
    });

    $.each( $('.call-recording .toggle input[type="checkbox"]'), function(){
        changeToggle($(this), '.call-recording');
    });

    //For editor
    tinymce.init({
        selector: '.editor textarea',
        height: 225,
        plugins: '',
        menubar: '',
        toolbar: 'styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist',
        content_css: [
            'http://fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
            'http://www.tinymce.com/css/codepen.min.css'
        ]
    });

    $('.b-top-ups .toggle input[type="checkbox"]').on('change', function() {
        changeToggle($(this), '.b-top-ups');
    }); 

    $('.column-items').sortable({
        connectWith: '.column-items',
        handle: 'h3',
        cursor: 'move',
        placeholder: 'placeholder',
        forcePlaceholderSize: true,
        opacity: 0.4
    })
    .disableSelection();

    $('.data-outcomes td.check').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $(this).addClass('active');
        }
    });

})(jQuery);