console.log("**** Private prop in object ****");

var pwd = Symbol('pwd');
var uname = Symbol('uname')

const userObj = {
  [uname]: "Bhanu2001",
  [pwd]: "Bhanzzz",
  age:22
}

console.log(userObj.age);
console.log(userObj.pwd);

console.log("\n***** Private prop in class *****");

class User {
  #username;
  #password;
  constructor(username, password, age){
    this.#username = username;
    this.#password = password;
    this.age = age;
  }

  get getPassword (){
    return this.#password;
  }
}

var user1 = new User('Bhanu', 'Bhanzzz2001', 21);
console.log(user1.password);
console.log(user1.getPassword);