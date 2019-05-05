// $(document).ready(function(){
// $(".design") .click(function(){
//    $("design-up").toggle();
// });
// });
// $(document).ready(function() {
//   $(".design").click(function() {
//     $("#design-hide").toggle(swing);
//   });
// });
$(document).ready(function() {
    $('.text').hide();
    $('img').animate({
        opacity:1

    });

    $('img').click(function() {
        $(this).stop().animate({opacity:.4},200);
        $('.text').fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.text').fadeOut();
    });


});
