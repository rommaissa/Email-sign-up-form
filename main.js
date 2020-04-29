const submit = document.querySelector('.submit-button');
const alert = document.querySelector('.signup__alert');
const inputValue = document.querySelector('#input-value');
const signupForm = document.querySelector('.signup__form');
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

console.log(inputValue.value);
submit.addEventListener('click', function (e) {
  e.preventDefault();
  if (inputValue.value.match(mailformat)) {
    signupForm.parentNode.removeChild(signupForm);
    console.log(signupForm);
    const successBox = `
    <div class="alert-success">
        <svg class="check">
            <use xlink:href="def.svg#check"></use>
        </svg>
        <p><b class="bold">Yay! Thank you</b>We've sent a confirmation link to your inbox</p>
    </div>
    `;

    alert.innerHTML = successBox;
  } else {
    const errorBox = `
    <div class="alert-error">
        <svg class="alert-triangle">
            <use xlink:href="def.svg#alert-triangle"></use>
        </svg>
        <p><b class="bold">Please use a valid email</b>Like: peson@inbox.com</p>
    </div>
    `;

    alert.innerHTML = errorBox;
  }
});
