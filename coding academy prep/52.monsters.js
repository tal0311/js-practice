//52. Create an array of monsters with 4 monsters (use a createMonsters() function)
// a. Each monster should also have
// i. id – a unique sequential number
// ii. name – that you will read from the user
// iii. power (random 1-100)
// b. Write the functions:
// i. createMonsters()
// ii. createMonster(name, power) – returns a new monster object. The name
// and power parameters are optional. That means that you should set
// them to a defaultive value if nothing is sent in the parameters.
// iii. getMonsterById(id) - finds and returns a monster object by its id.
// iv. deleteMonster(id) - the function removes the specified monster from the
// array.
// v. updateMonster(id, newPower) - the function updates the specified
// monster, setting a new power.
// c. Write the function: findMostPowerful(monsters).
// d. Write the function: breedMonsters(monsterId1, monsterId2), the function
// returns a new monster. The breeded monster power is an average of its
// parents power. The name is the beginning half of the first parent name, and the
// second half is the end of the second parent name.

class Monster {
  constructor(name, id, power) {
    ;(this.name = 'testMon' || prompt('monster name?')),
      (this.id = id),
      (this.power = power)
  }
}

let monsters = []
function createMonster() {
  id = 0
  power = 30
  for (let i = 0; i < 4; i++) {
    let monster = new Monster(name, id++, (power += 10))
    monsters.push(monster)
  }
  return monsters
}
console.log(createMonster())

function getMonsterById(id) {
  let monster = monsters.filter((monster) => monster.id == id)
  return monster
}
// console.log('get Monster by id:', getMonsterById(3))

function deleteMonster(id) {
  // monsters = monsters.filter((monster) => monster.id !== id)
  monsters.splice(id, id)

  return monsters
}
console.log('delete monster by id:', deleteMonster())

function updateMonster(id, newPower) {
  let monster = monsters.filter((monster) => monster.id == id)
  monster[0].power = newPower
  return monster
}
console.log(updateMonster(2, 89))

function findStrongestMonster() {
  strongest = 0
  strongestId = 0
  monsters.forEach((monster) => {
    if (monster.power > strongest) {
      strongest = monster.power
      strongestId = monster.id
    }
  })

  return `Monster no.${strongestId} is the strongest monster with a power of ${strongest}`
}
console.log(findStrongestMonster(monsters))

console.log('************************************************')

// d. Write the function: breedMonsters(monsterId1, monsterId2), the function
// returns a new monster. The breeded monster power is an average of its
// parents power. The name is the beginning half of the first parent name, and the
// second half is the end of the second parent name.

function breedMonsters({ ...mon1 }, { ...mon2 }) {
  mon1 = mon1[0]
  mon2 = mon2[0]
  name = mon1.name.slice(0, 2) + mon2.name.slice(3, -1)
  id = mon2.id + mon1.id
  power = (mon1.power + mon2.power) / 2
  breadedMonster = new Monster(name, id, power)
  return breadedMonster
}
console.log(breedMonsters(getMonsterById(1), getMonsterById(2)))
