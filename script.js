calcField = document.getElementById('calcField');
calcField.value = '';
function buttonClick(element) {
  calcField.value = element.textContent;
  console.log(element);
}
