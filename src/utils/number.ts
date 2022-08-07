const subNumber = (number: number): string => {
  const oneThousand = 1000
  const oneMillion = 1000000

  return number >= oneThousand && number < oneMillion
    ? `${(number / oneThousand).toFixed(2)} K`
    : number >= oneMillion
    ? `${(number / oneMillion).toFixed(2)} M`
    : `${number}`
}

export default subNumber
