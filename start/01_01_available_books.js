// Write your code here
class Book {
  constructor(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies
  }

  getAvailability() {
    let availability = "";
    if(this.numCopies == 0){
      availability = "Out of stock!";
    } else if (this.numCopies<10) {
      availability = "Low stock";
    } else {
      availability = "In stock";
    }
    
    return availability;
  }

  sell(numSold=1){
    this.numCopies = this.numCopies - numSold;
    return(this.numCopies+" Copies are left")
  }

  restock(newCopies=10) {
    this.numCopies+=newCopies;
  }

}

const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 10);
console.log(HungerGames.getAvailability());

console.log(HungerGames.restock(20))
console.log(HungerGames.getAvailability());

console.log(HungerGames.sell(25))
console.log(HungerGames.getAvailability());