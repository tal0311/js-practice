// 54.Airline:
// a. Build a data structure for an airline company. (use the create function for each
// object). Create to following entities:
// i. A Plane. The plane will contain:
// 1. model.
// 2. seatCount.
// ii. A passenger - tip: use createPassenger(fullName, flights)
// 1. id (7 random digits)
// 2. fullName
// 3. flights (array of pointers to the relevant flights)
// iii. A flight
// 1. date
// 2. departure
// 3. destination
// 4. plane (pointer to a plane)
// 5. passengers (array of pointers to the relevant passengers)

// b. Initialize all variables with consistent data. I.e (date should be 0 and
// passengers should be an empty array).
// i. Create an array of 5 passengers (gPassengers is a good name)
// ii. Create an array of 2 planes.

// iii. Create an array of 2 flights, each flight has a plane property that points
// to a plane object, and a passengers property that points to the
// passengers array.

// TIP: first create a passenger with an empty flights array, and the flight with
// an empty passengers array, then you can push the objects.

// c. Write the functions:
// i. bookFlight(flight, passenger) - this function connects between the
// pointers of the passengers and their flights.
// ii. getFrequentFlyers() - returns the passengers with the maximal flights
// count.
// iii. checkIfFlightFullyBooked(flight) - checks if there are available seats on
// the flights, and returns true if there are. Think where would it make
// sense to invoke it

class Plane {
  constructor(model, seatCount) {
    ;(this.model = model), (this.seatCount = seatCount)
  }
}
class Passenger {
  constructor(id, fullName, flights) {
    ;(this.id = id), (this.fullName = fullName), (this.flights = flights)
  }
}
class Flight {
  constructor(date, departure, destination, plane, passengers) {
    ;(this.date = date),
      (this.departure = departure),
      (this.destination = destination),
      (this.plan = plane),
      (this.passengers = passengers)
  }
}

// let passenger = new Passenger('tal', [])

// let flight = new Flight(
//   new Date().getFullYear(),
//   'israel',
//   'usa',
//   new Plane('airbus', 100),
//   []
// )

// function createPlane(condition) {
//   let planes = []
//   for (let i = 0; i < condition; i++) {
//     let plane = new Plane('airbus', 100)

//     planes = [...planes, plane]
//   }
//   return planes
// }
// createPlane()
// console.log('createPlane:', createPlane(2))

function createFlight() {
  let flights = []
  for (let i = 0; i < 2; i++) {
    let flight = new Flight(
      new Date().getFullYear(),
      'israel',
      'usa',
      new Plane('airbus', 100),
      [getPassengers(5)]
    )
    flights = [...flights, flight]
  }

  return flights
}

let flightArr = createFlight()
console.log('flightArr:', flightArr)

console.log(getPassengers(flightArr, 5))

function getPassengers(flight, passNumber) {
  let passengers = []
  id = new Date().getTime().toString().slice(0, 7)
  for (let i = 0; i < passNumber; i++) {
    let passenger = new Passenger(id++, 'test-passenger', [flight[0]])
    passengers = [...passengers, passenger]
  }
  return passengers
}
