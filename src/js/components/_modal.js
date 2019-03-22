import {
  OPEN,
  ACTIVE,
  BODY,
  HTML,
  OVERFLOW_HIDDEN,
  ANIMATE
} from '../constants';

(() => {
  const controls = $('[data-modal-control]');
  const modals = $('[data-modal]');
  controls.each((i, control) => {
    control = $(control);
    const modal = modals.filter(
      `[data-modal="${control.data('modal-control')}"]`
    );

    control.on('click', e => {
      e.preventDefault();
      if (!control.hasClass(ACTIVE)) {
        modals.removeClass(OPEN);
        modal.addClass(OPEN);
        BODY.addClass(OVERFLOW_HIDDEN);
        controls.removeClass(ACTIVE);
        control.addClass(ACTIVE);
      } else {
        modal.removeClass(OPEN);
        control.removeClass(ACTIVE);
      }
    });
  });

  modals.each((i, modal) => {
    modal = $(modal);
    const close = modal.find('[data-modal-close]');

    const hide = () => {
      modal.removeClass(OPEN);
	  controls.removeClass(ACTIVE);
      BODY.removeClass(OVERFLOW_HIDDEN);
    };

    BODY.on('click', e => {
      if (
        $(e.target).closest('[data-modal-container]').length ||
        $(e.target).closest('[data-modal-close]').length ||
        $(e.target).closest('[data-modal-control]').length
      )
        return;
      hide();
    });

    close.on('click', e => {
      e.preventDefault();
      hide();
    });
  });
})();
