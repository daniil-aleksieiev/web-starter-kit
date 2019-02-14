const pageScroll = {
  animateScroll() {
    const $page = $('html, body');
    const $anchorLink = $('a[href^="#"]');
    const ANIMATION_SPEED = 400;
    const HEADER_HEIGHT = 10;
    function scrolling() {
      $anchorLink.on('click', function () {
        const $position = $($.attr(this, 'href')).offset().top;
        $page.animate({
          scrollTop: `${$position - HEADER_HEIGHT}px`,
        }, ANIMATION_SPEED);
        return false;
      });
    }
    function init() {
      if (!$page.length && !$anchorLink.length) return;
      scrolling();
    }
    return {
      init: init(),
    };
  },
};

export default pageScroll;
