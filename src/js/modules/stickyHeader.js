const stickyHeader = {
  goSticky() {
    const $header = $('.header');
    const STICKY_CLASS = 'fixed';
    const STICKY_HEIGHT = 60;
    const $position = $(window).scrollTop();
    function headerHandler() {
      $(window).scroll(() => {
        $.event.add(window, 'scroll', () => {
          if ($position > STICKY_HEIGHT) {
            $header.addClass(STICKY_CLASS);
          } else {
            $header.removeClass(STICKY_CLASS);
          }
        });
      });
    }
    function init() {
      if (!$header.length) return;
      headerHandler();
    }
    return {
      init: init(),
    };
  },
};

export default stickyHeader;
