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

// class Monster {
//   constructor(name, id, power) {
//     ;(this.name = name), (this.id = id), (this.power = power)
//   }
// }
let name1 = 'first'

let monsters = []
function createMonster(name) {
  id = 0
  for (let i = 0; i < 4; i++) {
    let monster = new Object()
    monster.name = name
    monster.id = id++
    monster.power = 40
    monsters.push(monster)
  }
  return monsters
}
console.log(monsters)

console.log(createMonster(name1))

function getMonsterB(monsters, id) {
  console.log(monsters)
  let monster = monsters.filter((monster) => monster.id == id)
  return monster
}

console.log(getMonsterB(monsters, (id = 3)))

function deleteMonster(monsters, id) {
  // monsters = monsters.filter((monster) => monster.id !== id)
  monsters.splice(id, id)

  return console.log(monsters)
}
deleteMonster(monsters, 2)
