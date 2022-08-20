export function formatCurrencyValue(value: number){
  return value.toLocaleString('pt-br', {minimumFractionDigits: 2});
}