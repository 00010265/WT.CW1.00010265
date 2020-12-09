const password = document.getElementById('password'); /* get password */
const form = document.getElementById('form');  /* get our form */
const errorElement = document.getElementById('error'); /* get where we place error message */

form.addEventListener('submit', (e) => {   /*  when smn presses button following will work */
  let messages = [];
if (password.value === '' || password.value == null){  /* checks if therre is password */
  messages.push('password is required'); 
}

  if (password.value.length <= 6 ){ /* checks if password longer thatn 6 */
    messages.push('Password must be longer than 6 charachters');
  }
  if (password.value.length >= 15){  /* checks if password shorter thatn 15 */
    messages.push('Password must be shorter than 15 charachters');
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.style.display = 'flex';
    errorElement.innerHTML = messages.join(', ');/*  display the errors */
  }


});