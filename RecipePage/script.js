function myAlertBox() {
    alert("Thanks for your submission!");
  }

let colorChange = document.querySelector("body");
colorChange.style.color = "#A265E2";

  /*document.getElementById('button-id').onclick = changeColor;

  function changeColor() {
    document.body.style.backgroundColor = "#FFE5B4;
    return false;*/

    let buttonChange = document.querySelector('#button-id');
    buttonChange.addEventListener('click', () => buttonChange.style.backgroundColor = 'blue');