document.addEventListener('DOMContentLoaded', () => {
  const sendingForm = document.querySelector('.sending-form');
  const thanksPopup = document.querySelector('.thanks-popup');

  const validateRegNumber = /^(\+7|7|8) ?\(?[0-9]{3}\)?[-| ]?[0-9]{3}[-| ]?[0-9]{2}[-| ]?[0-9]{2}$/;
  sendingForm.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(sendingForm);
    let formData = new FormData(sendingForm);

    if(error === 0) {
      sendingForm.classList.add('_sending');

      let response = await fetch('sendtelegram.php', {
        method: 'POST',
        body: formData,
      });
      if(response.ok) {
        let result = await response.json();
        thanksPopup.classList.add('active');
        sendingForm.reset();
        thanksPopup.classList.add('active');
        const thanksPopupClose = document.querySelector('.thanks-popup__close');
        thanksPopupClose.addEventListener('click', () => {
          thanksPopup.classList.remove('active');
        });
        sendingForm.classList.remove('_sending');
      } else {
        const thanksPopupClose = document.querySelector('.thanks-popup__close');
        thanksPopupClose.addEventListener('click', () => {
          thanksPopup.classList.remove('active');
        });
        sendingForm.classList.remove('_sending');
      }

    } else {
      // alert('Заполните обязательные поля');
    }
  }

  const formValidate = (form) => {
    let error = 0;
    const sendingFormReq = document.querySelectorAll('._req');

    sendingFormReq.forEach((item, i) => {
      const input = item;

      formRemoveError(input);

      if(input.closest('._number')) {
        const numberCheck = validateRegNumber.test(input.value);
        if (!numberCheck) {
          formAddError(input);
          error++;
        }
      } else if(input.value === '') {
        formAddError(input);
        error++;
      }
    });
    return error;
  }


  const formAddError = (input) => {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  const formRemoveError = (input) => {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

});
