(function($){
    $(document).ready(function() {
        $('.site-nav a.menu-icon').click(function(e){
            e.preventDefault();
            e.stopPropagation();

            $(this).siblings('.trigger').toggleClass('open');           
        });

        $('html').click(function(){
            $('.site-nav .trigger').removeClass('open');
        });
    });
})(jQuery);