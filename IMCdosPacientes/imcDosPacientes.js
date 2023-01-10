// for (index = 0; index < patients.length; index++) {
//   patientsNames[index] = patients[index].name + patients[index].age;
// }
/* 
Crie uma lista de pacientes

Cada paciente dentro da lista, deverá conter:
  nome
  idade
  peso
  altura

Escreva uma lista contendo o nome dos pacientes
*/

let patients = [
  {
    name: "Julia",
    age: 24,
    weight: 200,
    height: 165,
  },
  {
    name: "Mateus",
    age: 28,
    weight:96,
    height: 185,
  },
  {
    name: "Carol",
    age: 19,
    weight: 75,
    height: 159,
  },
]
/* Dada a lista de pacientes, descubra o IMC de cada um e imprima

"O paciente X possui o IMC de: Y"

Crie uma função para fazer o cálculo do IMC*/

// cálculo: peso / (altura * altura)

let calcIMC = function (weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(1)
}

function printPatientIMC (patient) {

  let patientIMC = calcIMC(patient.weight, patient.height)
  let thinness = patientIMC < 18.5;
  let eutrofy = patientIMC >= 18.5 && patientIMC <=24.9;
  let overweight = patientIMC >=25.0 && patientIMC <=29.9;
  let obesity1 = patientIMC >=30.0 && patientIMC <=34.9;
  let obesity2 = patientIMC >=35.0 && patientIMC <=39.9;

  if(thinness) {
    return `O(a) paciente ${patient.name} tem o IMC de ${patientIMC}, que configura magreza.`
  } else if(eutrofy) {
    return `O(a) paciente ${patient.name} tem o IMC de ${patientIMC}, que configura eutrofia.`
  } else if(overweight) {
    return `O(a) paciente ${patient.name} tem o IMC de ${patientIMC}, que configura sobrepeso.`
  } else if(obesity1) {
    return `O(a) paciente ${patient.name} tem o IMC de ${patientIMC}, que configura Obesidade grau I.`
  } else if(obesity2) {
    return `O(a) paciente ${patient.name} tem o IMC de ${patientIMC}, que configura Obesidade grau II.`
  } else {
    return `O(a) paciente ${patient.name} tem o IMC de ${patientIMC}, que configura Obesidade grau III.`
  }
}

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage);
}