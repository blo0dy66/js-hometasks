// На HTML-сторінці є 6 чекбоксів. Напишіть скріпт, який після того, як користувач позначив будь-які 3 чекбокси, 
// всі чекбокси робить неактивними.

$(document).ready(function () {
    let checkboxes = $('input[type="checkbox"]');
    checkboxes.change(function () {
        if (checkboxes.filter(':checked').length >= 3) {
            checkboxes.prop('disabled', true);
        }
    });
});