import validate from '../lib/jquery.form-validator.js';

$('.js-form').each((index, el) => {
  $.validate({
    form: $(el)
    // validateOnBlur : false
  });
});
