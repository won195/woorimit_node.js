'use strict';

const id = document.querySelector("#id"),
      name = cument.querySelector("#name"),
      pssword = document.querySelector("#psword"),
      confirmPsword = document.querySelector("#confirm-psword"),
      registerbtn = document.querySelector("#button");

registerbtn.addEventListener('click',register);

function register(){
  if (!id.value) return alert('아이디를 입력해주십시오');
  if (pssword.value !== confirmPsword.value) return alert('비밀번호가 일치하지 않습니다');


  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
  };
  console.log(req);
  
  fetch('/register',{
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = '/login';
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error('회원가입 중 에러 발생'));
    });
}
