let car0 = {
    brand: 'Honda',
    model: 'CR-V',
    year: 2023,
    color: 'red',
    price: 50000,
    gas: 45
}
let car1 = {
    brand: 'Ford',
    model: 'F-150',
    year: 2020,
    color: 'black',
    price: 25000,
    gas: 30
}
let car2 = {
    brand: 'BMW',
    model: 'X5',
    year: 2022,
    color: 'green',
    price: 60000,
    gas: 65
}
let car3 = {
    brand: 'Mazda',
    model: 'CX-5',
    year: 2019,
    color: 'white',
    price: 15000,
    gas: 60
}
let car4 = {
    brand: 'Audi',
    model: 'Q7',
    year: 2018,
    color: 'silver',
    price: 52000,
    gas: 47
}
let car5 = {
    brand: 'Kia',
    model: 'Forte',
    year: 2020,
    color: 'blue',
    price: 21000,
    gas: 56
}

function honkAllCars(){
    honk(car0)
    honk(car1)
    honk(car2)
    honk(car3)
    honk(car4)
    honk(car5)
}

function honk(car){
    console.log('Tuut tuut');
    console.log(`Brand: ${car.brand}`)
    console.log(`Model: ${car.model}`)
    console.log(`Year: ${car.year}`)
    console.log(`Color: ${car.color}`)
    console.log(`Price: ${car.price}`)
    console.log(`Gas Used: ${5 + (new Date().getFullYear() - car.year)}`)
    console.log('-----------------------------------');
}