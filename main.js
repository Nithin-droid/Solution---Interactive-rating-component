let selectedButton = document.querySelector('ul');
let buttons = document.querySelectorAll('li button');
let val;

selectedButton.addEventListener('click', (event) => {
  if (event.target.nodeName === 'BUTTON') {
    val = +event.target.innerText;

    let button = document.getElementById(event.target.id);
    button.classList.toggle('selected');

    buttons.forEach((element, key) => {
      if (element.getAttribute('id') != button.getAttribute('id')) {
        element.classList.remove('selected');
      }
    });
  }
});

let submitButton = document.querySelector('.submit_button');

submitButton.addEventListener('click', () => {
  if (val) {
    document.querySelector('.Rating').style.display = 'none';
    document.querySelector('.Thankyou').classList.remove('hidden');
    document.querySelector(
      '.submittedRating'
    ).innerText = `You selected out ${val} of 5`;

    setTimeout(() => {
      if (confirm('Navigate to Home Page')) {
        location.reload();
      }
    }, 5000);
  }
});
