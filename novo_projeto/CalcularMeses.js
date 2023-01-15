function calcularDatas(){
  const data1 = document.querySelector('#date-initial').value
  const data2 = document.querySelector('#date-final').value

  const dataInicial = new Date(data1)
  const dataFinal = new Date(new Date(data2))

  const dataEmMeses = (dataFinal.getFullYear() - dataInicial.getFullYear()) * 12 + (dataFinal.getMonth() - dataInicial.getMonth())

  return dataEmMeses
}