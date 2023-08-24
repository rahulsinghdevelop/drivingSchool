$(document).ready(function(){
   $(window).scroll(function(){
    if($(window).scrollTop()>200){
        $("#up-btn").css("display","block");
    }else{
        $("#up-btn").css("display","none");
    }
    });
    $("#up-btn").click(function(){
        $(window).scrollTop(0);
    })
});


