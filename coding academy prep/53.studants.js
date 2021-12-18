class Student {
  constructor(studentName, grades) {
    ;(this.studentName = studentName), (this.grades = grades)
  }

  calcAverage() {
    console.log('ok')
  }
}

let students = []
function createStudent() {
  condition = true

  for (let i = 0; condition; i++) {
    studentName = prompt('enter student name or quit')
    if (studentName == 'quit') {
      condition = false
    } else {
      let grades = []
      for (let i = 0; i < 3; i++) {
        grade = Number(prompt('log grades with space b/w'))

        grades = [...grades, grade]
      }

      let student = new Student(studentName, grades)
      console.log(student)
      students = [...students, student]
    }
  }
  return students
}

console.log(createStudent())

let studentOne = new Student('test-student', [98, 87, 78])
console.log(studentOne)
