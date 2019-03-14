import { DOC, WIN } from '../constants';

const header = $('.js-header');

WIN.on('scroll', function() { 
  let top = DOC.scrollTop();
  let winHeught = WIN.height();

  (top >= 1) 
    ? header.addClass('is-fixed')
    : header.removeClass('is-fixed');
});
