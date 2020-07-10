const randomLetter = (): string => {
  const letra = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const randomNum = Math.round(Math.random() * (letra.length - 1))

  return letra[randomNum]
}

export default randomLetter
