;
var oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary: function () {
        return "Name: " + this.name;
    }
};
var drink = {
    name: "Bourbon",
    containsAlcohol: true,
    abv: '80 proof',
    summary: function () {
        return "The drink is " + this.name + ". It's ABV is " + this.abv + ".";
    }
};
var printSummary = function (item) {
    console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);
