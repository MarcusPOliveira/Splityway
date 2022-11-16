function maskPhone(value: string) {
  value = value.replace(/\D/g, "");
  // formato (22)55555-4444
  //pego o bloco DDD (1º), mais os 5 primeiros e concatenando
  value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
}

function maskCurrency(value: string) {
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  //colocando . para cada bloco de 3 números
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  return value;
}

function maskDate(value: string) {

}

export { maskPhone, maskCurrency };
