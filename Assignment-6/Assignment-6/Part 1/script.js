//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

 
 		$( document ).ready(function() {
 			$(".dropDownTextArea").hide();

 			$("#button").css("background-color", "grey"); 
 			$("#button").css("borderColor", "grey"); 

 			$('#checkbox1').click(function(){
            var checked_status = this.checked;
            if(checked_status == true) {
	                $('#row1').css("background-color", "yellow"); 
            }
            else {  $('#row1').css("background-color", "white"); 
            }
            }); 

            $('#checkbox2').click(function(){
            var checked_status = this.checked;
            if(checked_status == true) {
                	$('#row2').css("background-color", "yellow"); 
            }
            else {  $('#row2').css("background-color", "white"); 
            }
			}); 

            $('#checkbox3').click(function(){
            var checked_status = this.checked;
            if(checked_status == true) {
                	$('#row3').css("background-color", "yellow"); 
            }
            else { 	$('#row3').css("background-color", "white"); 
            }
            }); 

            $('tbody').click(function () {

	   			if ($('.checkbox:checked').length >= 1) { 
	           	$('#button').css("background-color", "orange"); 
	           	$('#button').css("borderColor","orange")
                $('#button').attr("disabled", false);
                $("#button").css("box-shadow", "1px 1px 1px #000000");
	       		}
	   			else {
	            $('#button').css("background-color", "grey"); 
	           	$('#button').css("borderColor","grey");
                $('#button').attr('disabled', true);
                $("#button").css("box-shadow", "1px 1px 1px #000000");
	   			} 

 			});


            $("#downArrow1").click(function(){
        	$("#dd1").toggle();
   			 });

            $("#downArrow2").click(function(){
        	$("#dd2").toggle();
    		});

    		$("#downArrow3").click(function(){
        	$("#dd3").toggle();
    		});
            
    		$("#button").click(function(){
           var isDisabled = $("#button").is(':disabled');
            if (isDisabled) {
                alert("Submit button is disabled")
            } else {
                alert("Submit button is enabled")
            }

            });
        

		});    

		

    
