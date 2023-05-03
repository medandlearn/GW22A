const frmBruttorechner = window.document.bruttopreisrechner;
const inpMwst = frmBruttorechner.mwst;
const inpNettoPreis = frmBruttorechner.nettopreis;



const btnBerechnen = frmBruttorechner.berechnen;
const ausgabe = document.querySelector('#id-ausgabe');

btnBerechnen.addEventListener("click", fBruttoPreisBerechnen);

function fBruttoPreisBerechnen(event) {
    event.preventDefault();
    const nettoPreis = parseFloat(inpNettoPreis.value);
    const mwst = parseFloat(inpMwst.value);
    ausgabe.innerHTML = (1+mwst/100)*nettoPreis;
}