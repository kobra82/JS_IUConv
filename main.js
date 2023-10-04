const selects = document.querySelectorAll("select");
const inputs = document.querySelectorAll("input");
inputs[0].focus();

function calcola() {
  let unitfrom = Number(selects[0].value);
  let unitto = Number(selects[1].value);
  let valuefrom = Number(inputs[0].value);
  let diff = Math.abs(unitfrom - unitto);

  if (
    isFinite(valuefrom) == true &&
    isNaN(valuefrom) == false &&
    valuefrom != 0
  ) {
    if (unitfrom == unitto) {
      inputs[1].value = inputs[0].value;
    } else if (unitfrom < unitto) {
      inputs[1].value = valuefrom / Math.pow(1024, diff);
    } else {
      inputs[1].value = valuefrom * Math.pow(1024, diff);
    }
  }
}

selects[0].addEventListener("change", calcola);
selects[1].addEventListener("change", calcola);
