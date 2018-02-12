$(document).ready(function () {
    $("#form").validate({
        rules: {
            "email": {
                required: true,
                email: true
            },
            "password": {
                required: true,
                minlength: 5
            }
            
        },
        messages: {
            "email": {
                required: "Please, enter an email",
                email: "Email is invalid"
            },
            "password": {
                required: "Please, enter a password",
                minlength: "Please enter at least 5 characters"
            }
        },
        submitHandler: function (form) { 
            alert('valid form submitted'); 
            return false; 
        }
    });

    $('#form input').on('keyup blur', function () {
        if ($("#email").valid() && $("#password").val()) {
            $('#formSubmit').prop('disabled', false);
        } else {
            $('#formSubmit').prop('disabled', 'disabled');
        }
    });

    $('.slider.round').click(function(){
        if ($('.rememberMeIcon').attr('src') === 'img/tick.png') {
            $('.rememberMeIcon').attr('src', 'img/cross.png') ;  
        } else  {
            $('.rememberMeIcon').attr('src', 'img/tick.png');
        }
    });

    $('.openForm').click(function(){
        $('.openForm').hide();
        $('.flex-item').show();
    });

    $('.closeForm').click(function(){
        $('.flex-item').hide();
        $('.openForm').show();
    });

});