$('#menuIcon').click(function() {
    var clicks = $(this).data('clicks');
    if (!clicks) {
    $(this).removeClass('notSelectedM');
    $(this).addClass('selectedM');
    $('header #mainMenu').css('display','flex');
    } else {
    $(this).removeClass('selectedM');
    $(this).addClass('notSelectedM');
    $('header #mainMenu').css('display','none');
    }
    $(this).data("clicks", !clicks);
});
  