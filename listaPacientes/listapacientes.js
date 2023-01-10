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
    weight:85,
    height: 185,
  },
  {
    name: "Carol",
    age: 19,
    weight: 60,
    height: 159,
  },
]

let patientsNames = []

for (let patient of patients) {
  patientsNames.push(patient.name)
}

let xPatient = patients[0]

alert(`${xPatient.name} tem ${xPatient.age} anos, ${xPatient.height}cm de altura e pesa ${xPatient.weight}kg`)


// for (index = 0; index < patients.length; index++) {
//   patientsNames[index] = patients[index].name + patients[index].age;
// }