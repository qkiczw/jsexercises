cars = [{country: 'German', id:'GER'},
    {country: 'USA', id: 'USA'}];


let allCars = [
    {mark: 'Ford', model: 'Focus', fuel: 'diesel', id: 'USA'},
    {mark: 'Ford', model: 'Mondeo', fuel: 'diesel', id: 'USA'},
    {mark: 'Ford', model: 'Fiesta', fuel: 'gasoline', id: 'USA'},
    {mark: 'Volkswagen', model: 'Golf', fuel: 'diesel', id: 'GER'},
    {mark: 'Volkswagen', model: 'Passat', fuel: 'gasoline', id: 'GER'},
    {mark: 'Volkswagen', model: 'Jetta', fuel: 'gasoline', id: 'GER'},
    {mark: 'Volkswagen', model: 'UP', fuel: 'gasoline', id: 'GER'}
    ];




let myCars = [{}];

 myCars = cars.map((car) => {
    return {id: car.id,
            kraj: car.country,
            modele: allCars.filter(function (cars) {
                return cars.id.includes(car.id);
            })
            }
});



const schools = [{id: 'cku', city: 'Sopot'},
                 {id: 'tpd', city: 'Czarna Woda'}];

const workers = [
    {name: 'Janek', lastName: 'Panek', city: 'Czarna Woda', id: 'tpd'},
    {name: 'Ola', lastName: 'Ciąglewicz', city: 'Sopot', id: 'cku'},
    {name: 'MAłgosia', lastName: 'Kopacz', city: 'Sopot', id: 'cku'},
    {name: 'Damian', lastName: 'Szmytka', city: 'Sopot', id: 'cku'},
    {name: 'Stasiu', lastName: 'Sobala', city: 'Czarna Woda', id: 'tpd'},
    {name: 'Ewelina', lastName: 'Oksentowicz', city: 'Czarna Woda', id: 'tpd'},
    {name: 'Andrzej', lastName: 'Bartosiewicz', city: 'Czarna Woda', id: 'tpd'}
]


let blackWaterSchool = schools.map( (school) => {
    return {
        id: school.id,
        miasto: school.city,
        pracownicy: workers.filter( (worker) => {
            return worker.id.includes(school.id);
        })
    }
})


const garden = [
    {id: 'fr'},
    {id: 'veg'}
    ];

const fruits = [
    {name: 'apple', id: 'fr'},
    {name: 'plum', id: 'fr'},
];
const vegetables = [
    {name: 'carrrot', id: 'veg'},
    {name: 'tomato', id: 'veg'},
    {name: 'cucumber', id: 'veg'}
];

const allGoods = fruits.concat(vegetables);

const myGarden = garden.map( (gardenItem) => {
    return {
        id: gardenItem.id,
        stuff: allGoods.filter( (item) => {
            return item.id.includes(gardenItem.id);
        })}
} );


const players = [
    {name: 'Lukasz', score: 1234},
    {name: 'Damian', score: 20},
    {name: 'Ania', score: 401},
    {name: 'Monia', score: 143},
    {name: 'Buli', score: 777},
    {name: 'Justyna', score: 558},
];

let nextPlayer = {name: 'Pioter', score: 666};

players.push(nextPlayer);

const bestScore =  players.sort((prev, next) => next.score - prev.score);
console.log(`najwyżyszy winik to: ${bestScore[0].name} - ${players[0].score}`);

const tableScore = () => {
    for(let i = 0; i < bestScore.length; i++) {
        console.log(`${i +1 } imię: ${bestScore[i].name} wynik: ${bestScore[i].score}`);
    }
};

tableScore();


const people = [
    {name: 'Lukasz', lastName: 'Sztormowski', city: 'Czarna Woda', id: 'czw'},
    {name: 'Tomek', lastName: 'Grefka', city: 'Czarna Woda', id: 'czw'},
    {name: 'Damian', lastName: 'Szmytka', city: 'Gdynia', id: 'ga'},
    {name: 'Piotr', lastName: 'Balecerzakk', city: 'Gdynia', id: 'ga'}
];

const cities = [
    {name: 'Gdynia', id:'ga'},
    {name: 'Czarna Woda', id: 'czw'}
]

let peopleInCzarnaWoda = [{}];

peopleInCzarnaWoda = cities.map( (city) => {
    return {
        id: city.id,
        miasto: city.name,
        osoby: people.filter( (person) => {
           return person.id.includes(city.id)
        })
    }
});

