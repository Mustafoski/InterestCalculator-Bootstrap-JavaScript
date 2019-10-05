function calculate() {
  let p = 0;
  let n = 0;
  let r = 0;
  let SI = 0;

  p = parseInt(document.getElementById('principle').value);
  n = parseInt(document.getElementById('years').value);
  r = parseInt(document.getElementById('rate').value);

  SI = (p * n * r) / 100;
  document.getElementById('res').innerHTML = SI;

}