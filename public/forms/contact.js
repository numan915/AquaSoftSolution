// const contactForm = document.querySelector('.contact-form');
// let fullName = document.getElementById('fullName');
// let email = document.getElementById('email');
// let subject = document.getElementById('subject');
// let message = document.getElementById('message');

// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let formData = {
//         fullName: fullName.value,
//         email: email.value,
//         subject: subject.value,
//         message: message.value
//     }
//     let xhr = new XMLHttpRequest();
//     xhr.open('post', '/');
//     xhr.setRequestHeader('content-type', 'application/json');
//     xhr.onload = function(){
//         console.log(xhr.responseText);
//         if(xhr.responseText == 'sucessfully_sent'){
//             alert('Email sent successfully');
//             fullName.value = '';
//             email.value = '';
//             subject.value  = '';
//             message.value = '';
//         }else {
//             alert('something went wrong!')
//         }
//     }
//     xhr.send(JSON.stringify(formData));
// })