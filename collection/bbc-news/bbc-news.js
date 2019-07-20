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
$(function() {
    $(document).click(function(e) {    
      var offset = $('#menuIcon').offset();
      var relativeX = (e.pageX - offset.left);
      var relativeY = (e.pageY - offset.top);
    
      if (relativeY > 476){
        $('#menuIcon').removeClass("selectedM");
        $('#menuIcon').addClass("notSelectedM");
        $('header #mainMenu').css('display','none');
      }
    });
});