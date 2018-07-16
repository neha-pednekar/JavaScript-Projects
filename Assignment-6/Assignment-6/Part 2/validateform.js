$(function(){

    $(#form1).validate({

        rules:{
            emailId:{
                required: true,
                email: true
            }
            

        }

    });

});