const testimonials= [
    {
        name: 'Michel F',
        photoUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        text: 'Apple is the most valuable business resource we have EVER purchased. Great job, I will definitely be ordering again! Not able to tell you how happy I am with apple. I don\'t always clop, but when I do, it\'s because of apple.'
    },

    {
        name: 'Fanni J',
        photoUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        text: 'Wow what great service, I love it! I will recommend you to my colleagues. Just what I was looking for. This is simply unbelievable!'
    },

    {
        name: 'Mace W',
        photoUrl: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        text: 'I\'d be lost without apple. Nice work on your apple. Man, this thing is getting better and better as I learn more about it.'
    }

];

const imgEl = document.querySelector('img');
const textEl = document.querySelector('.text');
const usernameEl = document.querySelector('.username');

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
   
    setTimeout(() => {updateTestimonial()}
    , 10000);  

    if(idx === testimonials.length){
        idx = 0;
    }
}