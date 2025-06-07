const radios = document.querySelectorAll('input[name="color"]');
const nameOutput = document.querySelector('#name-output');
const nameInput = document.querySelector('#name-input');
const validationInput = document.querySelector('#validation-input');
const fontText = document.querySelector('#text');
const fontSizeControl = document.querySelector('#font-size-control');

// 1.Напиши скрипт в якому є три
//  радіобатони зі значенями кольрів. При обиранні на
//  будь якого колір фону боді змінюється відповідно

radios.forEach(radio => {
    radio.addEventListener('click', () => {
        document.body.style.background = radio.value;
    })
})

// 2.Напиши скрипт який, при наборі
//  тексту в інпут input#name-input (подія input), 
//  підставляє його поточне значення в span#name-output. 
//  якщо інпут порожній,
//  в спані повинен відображатися рядок 'незнайомець'.
nameInput.addEventListener('change', () => {
    if (!nameInput.value) {
        return nameOutput.textContent = 'незнайомець'; 
    }
    return nameOutput.textContent = nameInput.value
})

// Напиши скрипт, який би при втраті фокуса на інпут,
//  перевіряв його вміст на правильну кількість символів.
//  Скільки символів має бути в інпут, 
//  вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border
//  інпут стає зеленим,   якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS-класи valid і invalid.

validationInput.addEventListener('change', () => {
    const validLength = validationInput.dataset.length;
    const inputLenght = validationInput.value.length
    if (validLength == inputLenght) {
        return validationInput.classList.toggle('valid')
    }
    if (inputLenght == 0) {
        return validationInput.classList.remove('valid', 'invalid')
    }
    return  validationInput.classList.toggle('invalid')
})

// 3. Напиши скрипт, який реагує на зміну значення
//  input#font-size-control (подія input) і змінює
//   інлайн-стиль span#text оновлюючи властивість font-size.
//    В результаті
//  при перетягуванні повзунка змінюватиметься розмір тексту.

fontSizeControl.addEventListener("input", (event) => {
    fontText.style.fontSize = String(event.target.value) + 'px';
});
