const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const popup = document.querySelector('.in');
const iclose = document.querySelector('.icon-close');

registerlink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

popup.addEventListener('click', () => {
    wrapper.classList.add('pop');
});

iclose.addEventListener('click', ()=> {
    wrapper.classList.remove('pop');
});