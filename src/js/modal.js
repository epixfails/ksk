$(document).ready(function() {
  const openModalBlock = document.querySelector('.open-modal');
  const modalContentError = document.querySelector('.modal-content__error');

  openModalBlock.addEventListener('click', function() {
    modalContentError.textContent = '';
    document.querySelector('.modal').style.display = 'block';
  });

  const closeModalBlock = document.querySelector('.modal-header__close');

  closeModalBlock.addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none';
  });

  const modalForm = document.querySelector('.modal-content__form');

  modalForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const phoneValue = document
      .getElementById('modal-phone')
      .value.replace(/[- )(]/g, '');

    if (phoneValue.length < 11) {
      console.log(phoneValue);
      modalContentError.textContent =
        'Введите номер в 11-значном формате 81112223344.';
      return;
    }

    $.ajax({
      url: 'http://ksk21.webconcept21.ru/feedback',
      method: 'POST',
      data: JSON.stringify({ phone: phoneValue }),
      success: function() {
        document.querySelector('.modal-success').style.display = 'block';
        document.querySelector('.modal').style.display = 'none';
        setTimeout(
          () =>
            (document.querySelector('.modal-success').style.display = 'none'),
          3000
        );
      },
      error: function() {
        modalContentError.textContent =
          'Произошла ошибка при отправке формы. Попробуйте позднее.';
      },
    });
  });

  $('#modal-phone').mask('0 (000) 000 00 00');
});
