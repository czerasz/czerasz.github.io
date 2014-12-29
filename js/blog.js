(function($) {
$(function () {
    $('.posts-list__post-item').on('click.goToArticle', function () {
        var that       = $(this);
        var articleURL = that.data('href');

        window.location.href = articleURL;
    })  
});
})(jQuery);