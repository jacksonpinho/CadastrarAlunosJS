/* Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

O resultado final desse desafio deve ser algo em torno de:
 */

let ListStudent = []
let option


while (option != 4) {

  option = Number(prompt(`
    Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um aluno na lista
    2. imprimir lista de alunos cadastrados
    3. imprimir a media de cada aluno
    4. Sair do programa
  `))

  switch (option) {

    case 1:
      //cadastrar alunos, nome, nota1,nota2
      let student = {
        name: "",
        noteOne: 0.0,
        noteTwo: 0.0,
      }
      student.name = prompt("digite o nome do aluno")
      student.noteOne = Number(prompt("digite a primeira nota do aluno"))
      student.noteTwo = Number(prompt("digite a segunda nota do aluno"))
      ListStudent.push(student)
      alert("aluno cadstrados")
      break
    case 2:
      //imprimir lista de estudantes
      if (ListStudent.length == 0) {
        alert("Não existem estudantes cadastrados")
      } else {
        listStudents = []
        for (let lista of ListStudent) {
          //alert(lista.name)
          listStudents.push(lista.name)
        }
        alert(listStudents)
      }
      break
    case 3:
      //imprimir a media de notas de cada aluno
      if (ListStudent.length == 0) {
        alert("Não existem estudantes cadastrados")
      } else {

        for (let lista of ListStudent) {
          avarageNotes(lista)
        }

      }
      break
    case 4:
      //sair do sistema
      alert("Tchau")
      break

    default:
      alert("Opção inválida, Tente novamente")
  }

}

function avarageNotes(student) {
  let result = (student.noteOne + student.noteTwo) / 2
  if (result >= 7) {
    return alert(`A média do(a) aluno(a) ${student.name} é: ${result}\n
Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
  } else {
    return alert(`A média do(a) aluno(a) ${student.name} é: ${result}\n
Não foi dessa vez ${student.name}! Tente novamente!`)
  }
}




