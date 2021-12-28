let form = document.forms.form;
let input = form.elements.input;
let nameRegExp = /.{2,}/
let passwordRegExp = /.{8,}/

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let check = document.querySelectorAll('.succ')
  if(check.length == 3){
    let name = form.name.value
    let password = form.password.value
    localStorage.setItem(name, password)
    localStorage.setItem('current-user', name)
    alert('Вы успешно зарегистрировались!')
    setTimeout(e=>location.href = 'index.html', 1500)
    
  } else alert('Заполните все анкетнные данные')
  
});

window.addEventListener('input', e=>{
  if(e.target.classList.contains('reg')){
    switch(e.target.name){
      case 'name' : 
        if(!localStorage.getItem(e.target.value)){
          e.target.classList[nameRegExp.test(e.target.value)? 'add':'remove']('succ');
          e.target.parentNode.querySelector('.required').classList[nameRegExp.test(e.target.value)? 'remove':'add']('hidden');
          form.querySelector('.name-error').textContent = nameRegExp.test(e.target.value)? '': 'Имя должно содержать больше двух символов';
        }else{
          form.querySelector('.required').classList.add('hidden')
          form.querySelector('.name-error').textContent = 'Такой юзер уже есть'
        }
        break;
      case 'password' :
        e.target.classList[passwordRegExp.test(e.target.value)? 'add':'remove']('succ')
        e.target.parentNode.querySelector('.required').classList[passwordRegExp.test(e.target.value)? 'remove':'add']('hidden');
        form.password2.classList[e.target.classList.contains('succ')? 'remove':'add']('hidden')
        e.target.parentNode.querySelector('.password-error').textContent = '';
        break;
      case 'password2' :
        e.target.classList[e.target.value === form.password.value? 'add':'remove']('succ')
        e.target.parentNode.querySelector('.required').classList[e.target.value == form.password.value? 'remove':'add']('hidden');
        break;
    }
  }
})


form.password.addEventListener('blur', e=>{
    e.target.parentNode.querySelector('.password-error').textContent = e.target.value.length < 8? 'Пароль должен содержать больше восьми символов': '';
})



