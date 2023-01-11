function calculaTotal(saldoSalario, feriasVencidas, feriasProporcionais, decimoTerceiroProporcional, avisoPrevioIdenizado, multaRescisoria) {
  let total = saldoSalario + feriasVencidas + feriasProporcionais + decimoTerceiroProporcional + avisoPrevioIdenizado + multaRescisoria;

  document.getElementById("salario").value = ''
  document.getElementById("dias-trabalhados").value = ''
  document.getElementById("meses-trabalhados-ano").value = ''
  document.getElementById("total-de-meses-trabalhados").value = ''
  
  console.log(typeof(total));
  return total.toFixed(2);  
}