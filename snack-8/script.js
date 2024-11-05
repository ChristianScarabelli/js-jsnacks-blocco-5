const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// OPTIONAL CHAINING ?  controlla se esiste quello che cerchiamo, se esiste cerca la classe
const studentClass = students.find((student) => student.name === 'Marco Lanci')?.class  // object || undefined

// const studentClass = students.find((student) => student.name === 'Marco Lanci')?.class || ''
// con opertatore logico OR, se la prima condizione non è vera, fa risultare stringa vuota

console.log(studentClass)

