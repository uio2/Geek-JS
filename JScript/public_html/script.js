
(function ($) {
    $(function () {

        $(document).on('click', '.first-tab', function (event) {

            $('.tabs').addClass('hidden');
            $('.first-content').removeClass('hidden');
            event.preventDefault();

        });
        $(document).on('click', '.second-tab', function (event) {
            
            $('.tabs').addClass('hidden');
            $('.second-content').removeClass('hidden');
            event.preventDefault();

        });
        $(document).on('click', '.third-tab', function (event) {
           
            $('.tabs').addClass('hidden');
            $('.third-content').removeClass('hidden');
            event.preventDefault();

        });
        $(document).on('click', '.forth-tab', function (event) {
            
            $('.tabs').addClass('hidden');
            $('.forth-content').removeClass('hidden');
            event.preventDefault();

        });
    });
})(jQuery);



   