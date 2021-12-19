class Student {
  constructor(studentName, grades) {
    ;(this.studentName = studentName), (this.grades = grades)
  }

  calcAverage() {
    let sum = 0
    let average = 0
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i]
    }
    average = Math.floor(sum / this.grades.length)
    return average
  }
}

let studentOne = new Student('test-student', [98, 87, 78])

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
      students = [...students, student]
    }
  }
  return students
}

console.log(createStudent())

students.forEach((student) => {
  student.calcAverage()
  console.log(
    `student ${student.studentName} avg grades is:`,
    student.calcAverage()
  )
})
