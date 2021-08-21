interface Reportable {
  summary(): string;
};

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
};

const drink = {
  name: "Bourbon",
  containsAlcohol: true,
  abv: '80 proof',
  summary(): string {
    return `The drink is ${this.name}. It's ABV is ${this.abv}.`
  }
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}

printSummary(oldCivic);
printSummary(drink);
