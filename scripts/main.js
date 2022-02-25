let myImage = document.querySelector('#pic1');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === '/demo-repo/images/coding.jpg') {
    myImage.setAttribute('src','/demo-repo/images/coffee.jpg');
  } else {
    myImage.setAttribute('src','/demo-repo/images/coding.jpg');
}
}

let myButton = document.querySelector('button');

let myHeading = document.querySelector('#t1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    alert('No Name set');
  } else {
  localStorage.setItem('name', myName);
  myHeading.textContent = 'SD management is cool, ' + myName;
}
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'SD management is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
