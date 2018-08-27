// $(function() 
// {
// var header=$(".collapse");
// $(window).scroll(function() {
// 	var scroll=$(window).scrollTop();
// 	if (scroll>=10){

// $('#mynav').css("background-color","brown");

// }
// else {
// 	$('#mynav').css("background-color","#585858");
// }
  
// });

// });

$(function() {
    var header = $(".collapse");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            $('#mynav').css("background-color",'#ECF0F1');
        } else {
            $('#mynav').css("background-color",'#ECF0F1');
        }

    });
  
});


