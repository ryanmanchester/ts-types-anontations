const carMakers: string[] = ['ford', 'toyota', 'tesla'];
const carModels: string[] = [];

const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['typeX']
];

//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
carMakers.push(100);

//Help with map
carMakers.map((car: string): string => {
  return car.toLowerCase();
});

//Flexible types
const importantDates: (Date | string)[] = [new Date(), '2021-09-14'];
importantDates.push('2021- 09-16');
importantDates.push(new Date());
