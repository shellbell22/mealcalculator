/* A diner object with:
Name
list of dishes (what they ate, and how much it cost)
A method to add the total of the dishes
A method to calculate tax for this diner
A method to calculate the tip for this diner
A bill object with:
list of diners
method to total and print the total of all diners, including tax
method to total and print diners tips
method to print a breakdown for each diner including their name, total, tax and tip
Dummy data that creates:
1 bill
3 diners that are on the same bill
2 dishes for each diner
Print the total for the bill
Print the total tip for the waitress
Print a breakdown for each person
*/

'use strict'

class Diner {
  constructor (name) {
  this.name = name;
  this.dishes = {};
}
  addDish(dish, cost) {
    this.dishes[dish] = cost;
  }
  addTotal () {
    let total = 0;
    for (let dish in this.dishes){
      console.log(dish);
      total += this.dishes[dish];
    }
    return total;
  }
  calculateTax() {
    let total = this.addTotal();
    //console.log(total);
    return total * 0.05;

  }
  calculateTip () {
    let total = this.addTotal();
    return total * 0.15;
  }

}

var mario = new Diner('mario');
mario.addDish('potatoes', 5);
mario.addDish('steak', 20);
mario.addTotal();
console.log(mario.calculateTax());
console.log(mario.calculateTip());

var shelley = new Diner('shelley');
shelley.addDish('pasta', 10);
shelley.addDish('fish', 20);

var mickeymouse = new Diner('mickey');
mickeymouse.addDish('carrots', 5);
mickeymouse.addDish('hamburger', 12);



class Bill {
  constructor (diners) {
    this.diners = diners;
  }
  totalwithTax() {
    let billtotal = 0;
    for (let diner in this.diners) {
      let dinerobject = this.diners[diner];
      billtotal += dinerobject.addTotal() + dinerobject.calculateTax();
    }
    return billtotal;
  }
  totalTip() {
    let totaltip = 0;
    for (let diner in this.diners) {
      let dinerobject = this.diners[diner];
      totaltip += dinerobject.calculateTip();
    }
    return totaltip;
  }
  eachDiner() {
      for (let diner in this.diners) {
        let dinerobject = this.diners[diner];
        console.log(dinerobject.name, dinerobject.addTotal(), dinerobject.calculateTip(), dinerobject.calculateTax());
      }
  }
}

var bill = new Bill([mario, shelley, mickeymouse]);

console.log(bill.totalwithTax());
console.log(bill.totalTip());
bill.eachDiner();

//function addDishes()
// function calculatetip()
