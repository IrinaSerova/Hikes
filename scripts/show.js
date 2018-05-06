$(document).ready(function (event) {
    $("#moreInfo, .less").hide(); // hide both the article and the .less link

    $('.more').click(function (event) {
        $('#moreInfo, .less').show();
        $('.more').hide();
        event.preventDefault();
    });

    $('.less').click(function (event) {
        $('#moreInfo, .less').hide();
        $('.more').show();
        event.preventDefault();
    });

});