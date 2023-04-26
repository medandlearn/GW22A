const frmBruttorechner = window.document.bruttopreisrechner;
const btnBerechnen = frmBruttorechner.berechnen;
const ausgabe = document.querySelector('#id-ausgabe');
console.log(frmBruttorechner.mwst.value);
btnBerechnen.addEventListener("click", fBruttoPreisBerechnen);


function fBruttoPreisBerechnen(event) {
    event.preventDefault();
    const nettoPreis = parseFloat(frmBruttorechner.nettopreis.value);
    const mwst = parseFloat(frmBruttorechner.mwst.value);
    ausgabe.innerHTML = (1+mwst/100)*nettoPreis;
}