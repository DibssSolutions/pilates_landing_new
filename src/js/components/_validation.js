import validate from '../lib/jquery.form-validator.js';

$('.js-form, .js-validation').each((index, el) => {
  $.validate({
    form: $(el)
    // validateOnBlur : false
  });
});
