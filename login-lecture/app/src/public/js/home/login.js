'use strict';

const id = document.querySelector("#id"),
      pssword = document.querySelector("#psword"),
      loginbtn = document.querySelector("button");

loginbtn.addEventListener('click',login);

function login(){
  const req = {
    id: id.value,
    psword: psword.value,
  };
  
  fetch('/login',{
    method: "POST",
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  });
}
