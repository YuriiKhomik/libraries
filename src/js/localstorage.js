import throttle from "lodash.throttle";


// // PARSE AND STRINGIFY

// const user = {
//     name: "Mango",
//     age: 2
// };

// console.log(JSON.stringify(user));

// const savedUserData = '{ "name": "Mango", "age": 2 }';

// console.log(JSON.parse(savedUserData));



// LOCAL STORAGE
// основні команди: stItem, getItem, removeItem, clear

// const user = {
//     name: "Mango",
//     age: 2
// };


// // console.log(localStorage);

// localStorage.setItem('my-data', JSON.stringify(user));

// поверне строку:
// console.log(localStorage.getItem('my-data'));

// // для того, щоб розпарсити строку в об'єкт , потрібно:

// const savedData = localStorage.getItem('my-data');
// console.log(savedData)

// const parsedData = JSON.parse(savedData);
// console.log(parsedData);


// // local storage vs session storage: в сешн сторедж дані збурігаються до першої перезагрузки сторінки і він є лише в одній вкладці, а локал сторедж спільний на всіх вкладках



// FEEDBACK FORM

// створюємо змінну для значення ключа із local storage
const STORAGE_KEY = 'feedback-msg';

// об'єкт із даними з форми
const formData = {};

const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextAreaInput, 1000));

refs.form.addEventListener('input', e => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    formData[e.target.name] = e.target.value;

    console.log(formData);
})

// функція для виводу в textarea даних з local storage
populateTextArea()

function onFormSubmit(e) {
    // щоб не перезавантажувалась сторінка
    e.preventDefault();

    // очищаємо дані форми
    e.currentTarget.reset();
    // очищаємо дані з local storage
    localStorage.removeItem(STORAGE_KEY)
};
 


function onTextAreaInput(e) {
    const message = e.target.value;

    // відправляємо в local storage те, що введено
    localStorage.setItem(STORAGE_KEY, message);
};

function populateTextArea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    // якщо в local storage щось є з потрібним нам ключем, то виводимо його в textarea
    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
    };
} 
