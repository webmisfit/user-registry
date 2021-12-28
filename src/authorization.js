let form = document.forms.form;


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = form.name.value;
    let password = form.password.value;
    if(localStorage.getItem(name) == password){
      localStorage.setItem('current-user', name);
      setTimeout(e=>location.href = 'index.html', 1500)
    }else{
        alert('Неверный логин или пароль')
    }
    // if(check.length == 3){
    //   let name = form.name.value
    //   let password = form.password.value
    //   localStorage.setItem(name, password)
    //   localStorage.setItem('current-user', name)
    //   alert('Вы успешно зарегистрировались!')
    //   setTimeout(e=>location.href = 'index.html', 1500)
      
    // } else alert('Заполните все анкетнные данные')
    
  });
  
//   window.addEventListener('input', e=>{
//     if(e.target.classList.contains('reg')){
//       switch(e.target.name){
//         case 'name' : 
           
//           break;
//         case 'password' :
          
//           break;
//         // case 'password2' :
//         //   e.target.classList[e.target.value === form.password.value? 'add':'remove']('succ')
//         //   e.target.parentNode.querySelector('.required').classList[e.target.value == form.password.value? 'remove':'add']('hidden');
//         //   break;
//       }
//     }
//   })
  