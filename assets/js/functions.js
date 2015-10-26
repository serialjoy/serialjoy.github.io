(function () {
  $('.mobile-navigation-toggle').on('click', function() {
    $('.bar').toggleClass('animate');
  })
})();

(function ($) {
  var $mobileNavigationToggleBtn = $('.mobile-navigation-toggle');

    function onBtnClick (e) {
      var $this = $(this),
          $selectors = $('.mobile-navigation');
      $this.toggleClass('is-open');    
      $selectors.toggleClass('is-open');
    }
    
    $(document).ready(function (){
      $mobileNavigationToggleBtn.on('click', onBtnClick);
  });
    
})(jQuery);