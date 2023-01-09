
let studentName = prompt(`Olá aluno(a), como você se chama?`);
let noteAv1 = prompt(`Qual foi a sua nota na Av1?`);
let noteAv2 = prompt(`Qual foi a sua nota na Av2?`);
let noteAv3 = prompt(`Qual foi a sua nota na Av3?`);

noteAv1 = Number(noteAv1);
noteAv2 = Number(noteAv2);
noteAv3 = Number(noteAv3);

let media = (noteAv1 + noteAv2 + noteAv3) / 3;

media = media.toFixed(1);

if (media < 6){
  alert(`${studentName}, sua média foi de ${media}. Você ainda tem a oportunidade de fazer a recuperação, boa sorte.`)
}else {
  alert(`${studentName}, sua média foi de ${media}. Parabéns, você foi aprovado.`)
}