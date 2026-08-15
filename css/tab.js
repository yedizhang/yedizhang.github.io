$(document).ready(function () {
    // full tab is clicked
    $('#full-tab').click(function () {
        styleReset();
        $(this).addClass('active-link');
        $('#full').addClass('active');
    });
    // selected tab is clicked
    $('#short-tab').click(function () {
        styleReset();
        $(this).addClass('active-link');
        $('#short').addClass('active');
    });
});

// helper function that clears the board
function styleReset() {
    $('.link').removeClass('active-link');
    $('.content').removeClass('active');
}
