

 $(document).ready(function(){
        // прячем кнопку #back-top
        $("#back-top").hide();

        // появление/затухание кнопки #back-top
        $(function (){
            $(window).scroll(function (){
                if ($(this).scrollTop() > 100){
                    $('#back-top').fadeIn();
                } else{
                    $('#back-top').fadeOut();
                }
            });
 $('#back-top').click(function (){
                $('body,html').animate({
                    scrollTop:0
                }, 400);
                return false;
            });
           
            });
        });