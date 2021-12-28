let name = localStorage.getItem("current-user");
let button = document.querySelector(".btn-login");
let $user = document.querySelector('.user')
let re = /.{8,}/
login.textContent = name;
if(!localStorage.getItem(name)){
    localStorage.setItem(name, localStorage.getItem('current-password'))
}


let oldpassword = localStorage.getItem(name)
// console.log(localStorage.getItem('current-password'))
// console.log(oldpassword)
oldpass.addEventListener('input', e=>{
    
    if(e.target.value == oldpassword){
        e.target.disabled = true;
        e.target.parentNode.querySelector('.required').classList.remove('hidden')
        pass.disabled = false;
    } else{
        pass.disabled = true;
    }
})

pass.addEventListener('input', e=>{
    
    pass2.value = '';
    pass2.parentNode.querySelector('.required').classList.add('hidden')
    if(re.test(e.target.value)){
       $user.querySelector('input[name=password2]').classList.remove('hidden')
       e.target.parentNode.querySelector('.required').classList.remove('hidden')
    } else {

        $user.querySelector('input[name=password2]').classList.add('hidden');
        e.target.parentNode.querySelector('.required').classList.add('hidden')
    }
})
pass2.addEventListener('input', e=>{
    
    if(e.target.value === pass.value){
       e.target.parentNode.querySelector('.required').classList.remove('hidden')
       button.disabled = false;
    } else {
        button.disabled = true;
        e.target.parentNode.querySelector('.required').classList.add('hidden')
    }
})

button.addEventListener('click', e=>{
    localStorage.setItem(name, pass.value)
    localStorage.setItem('current-password', pass.value)
    alert('вы изменили пароль, будьте бдительны!')
    location.reload();
})


forgetpass.addEventListener('click', e=>{
    let x = prompt('Введите ваш логин для сброса пароля')
    localStorage.setItem('current-password', localStorage.getItem(name))
    if(x === name){
        alert('Вы сбросили пароль, пожалуйста введите новый пароль иначе старый пароль вернеться после перезагрузки страницы')
        localStorage.setItem(name, '')
        oldpass.style.display = 'none'
        pass.disabled = false;
    }
})