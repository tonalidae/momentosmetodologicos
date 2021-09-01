$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    $('.header-overlay').css({
      opacity: function() {
        var elementHeight = $(this).height(),
          opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.8) + 0.2;
  
        return opacity;
      }
    });
  });
  