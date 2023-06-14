

const formSubmit = document.querySelector('#form-submit');
const formLabels = document.querySelector('#form-info');
const inputEmail = document.querySelector('#email');

formSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    
    const email = inputEmail.value;

    if(email === '') {
        createLabelError('Email is required');
        inputEmail.classList.add('form__input--error');
        return;
    };

    if(!isValidEmail(email)) {
        createLabelError('Valid email required');
        inputEmail.classList.add('form__input--error');
        return;
    };

    renderMessageSuccess(email);
});

/**
 * Valid email
 * @param {String} email
 * @returns {Boolean} true: valid | false: invalid
 */
const isValidEmail = (email) => {
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return regex.test(email); 
}

/**
 * Create HTML Label Error
 * @param {String} errorMessage error message
 */
const createLabelError = (errorMessage) => {
    const existLabel = document.querySelector('.label');

    if(!existLabel) {
        const label = document.createElement('P');
        label.classList.add('form__error', 'label');
        label.textContent = errorMessage;
    
        formLabels.appendChild(label);
    
        setTimeout(() => {
            label.remove();
            inputEmail.classList.remove('form__input--error');
        }, 5000);
    };
};

/**
 * Create HTML Success Message
 * @param {String} email 
 */
const renderMessageSuccess = ( email ) => {
    const divMain = document.querySelector('.main');
    
    const successContainer = document.createElement('DIV');
    successContainer.className = 'success-message container container--success';

    const successContent = document.createElement('DIV');
    successContent.className = 'success-message__content';

    const successImage = document.createElement('IMG');
    successImage.className = 'success-message__image';
    successImage.src = './assets/images/icon-success.svg';
    successImage.alt = 'Icon Success';
    successContent.appendChild(successImage);

    const successHeading = document.createElement('P');
    successHeading.className = 'success-message__heading';
    successHeading.textContent = 'Thanks for subscribing!';
    successContent.appendChild(successHeading);

    const successDescription = document.createElement('P');
    successDescription.className = 'success-message__description';
    successDescription.innerHTML = `A confirmation email has been sent to <span class="success-message__email">${email}</span>. Please open it and click the button inside to confirm your subscription.`;
    successContent.appendChild(successDescription);

    const successBtn = document.createElement('A');
    successBtn.className = 'success-message__btn';
    successBtn.href = '/newsletter-with-success-message/';
    successBtn.textContent = 'Dismiss message';

    successContainer.appendChild(successContent);
    successContainer.appendChild(successBtn);

    divMain.replaceChildren(successContainer);
};