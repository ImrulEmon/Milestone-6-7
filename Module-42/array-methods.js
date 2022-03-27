let cars = [
    {
     color: "purple",
     type: "minivan",
     registration: new Date('2017-01-03'),
      "capacity": 7
    },
    {
     color: "red",
     type: "station wagon",
     registration: new Date('2018-03-03'),
      capacity: 5
    },
    {
        color: "white",
        type: "toyota",
        registration: new Date('2019-06-03'),
         capacity: 3
    }
    
  ]
  console.log('------------------------------');
  for(const car of cars){
      console.table(car);
      console.log('------------');
      for(const x in car){
        console.log(car[x]);
    }
  }
 
  const colors = cars.map(car=> car.color)
  console.log(colors);
console.log('------------------------------');
  cars.forEach(car=>console.log(car.type));