const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];



const weight = document.querySelector('#weight')
const height = document.querySelector('#height')
const resultCalc = document.querySelector("#resultCalc")
const resultText = document.querySelector("#resultText")
const form = document.querySelector('form')


form.addEventListener('submit', (e) => {
  e.preventDefault()

  CalcIMC()
})

function CalcIMC(){
  const heightValue = height.value
  const weightValue = weight.value

  if(!height || !weight || height <= 0 || weight <= 0){
    resultCalc.textContent = 'Error'
    resultText.textContent = "Un de vos champs est vide"
  }

  // IMC = poids en kg / taille² en m
  const IMC = (weightValue / Math.pow(heightValue / 100, 2).toFixed(1))
  console.log(IMC)

  showResult(IMC)
}

function showResult(IMC) {
  const rank = BMIData.find(data => {
    if (IMC >= data.range[0] && IMC < data.range[1]) return data;
    else if (typeof data.range === "number" && IMC >= data.range) return data;
  })
  console.log(rank)

  resultCalc.textContent = IMC
  resultText.textContent = `Vous êtes ${rank.name}`
  resultText.style.backgroundColor = `${rank.color}`

}