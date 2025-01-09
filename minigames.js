const rolarDado = (numeroDeLadosDoDado) => {
  return Math.floor((Math.random() * numeroDeLadosDoDado) + 1)
}
console.log(`--------------------------------------\n🎲 Rolando um dado agora...\n--------------------------------------`)
console.log(`RESULTADO: ${rolarDado(6)}\n`)


const rolarPapelPedraTesoura = () => {
  const random = Math.floor((Math.random() * 3) + 1)
  switch (random) {
    case 1:
      return "PEDRA 🪨"
    case 2:
      return "PAPEL 🧻"
    case 3:
      return "TESOURA ✂️"
    default:
      break;
  }
}

const jogador1 = "Lis"
const jogador2 = "Nicole"

const resultadoJogador1 = rolarPapelPedraTesoura();
const resultadoJogador2 = rolarPapelPedraTesoura();



console.log(`--------------------------------------\nPEDRA 🪨, PAPEL 🧻, TESOUUUUURA ✂️!!!!!\n--------------------------------------`)

console.log(`${jogador1}: ${resultadoJogador1}`)
console.log(`${jogador2}: ${resultadoJogador2}`)
console.log('')
let vencedor = ""
if (resultadoJogador1 === resultadoJogador2) {
  vencedor = 'Empate!'
} else if (
  (resultadoJogador1 === "PEDRA 🪨" && resultadoJogador2 === "TESOURA ✂️") ||
  (resultadoJogador1 === "PAPEL 🧻" && resultadoJogador2 === "PEDRA 🪨") ||
  (resultadoJogador1 === "TESOURA ✂️" && resultadoJogador2 === "PAPEL 🧻")
) {
  vencedor = `${jogador1} ganhou! 🏆`
} else {
  vencedor = `${jogador2} ganhou! 🏆`
}
console.log(vencedor)



console.log(`\n--------------------------------------\nVamos rolar a roleta!\n--------------------------------------`)

const listaDaRoleta = [
  "Bem-te-vi 🐦", " Cachorrinho 🐶", " Gatinho 😽"
]

const rolarRoleta = (listaDaRoleta) => {
  const index = Math.floor((Math.random() * listaDaRoleta.length))
  return listaDaRoleta[index]
}

console.log(`Itens da roleta: ${listaDaRoleta}`)
console.log(`ROLANDO.....`)
console.log(`Caiu ${rolarRoleta(listaDaRoleta)}`)
