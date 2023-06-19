// Write your code here

var ClassRoom = {
  hasTeachingAssistant: true,
  classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"]
};

function getStudents(classroom) {
  let {hasTeachingAssistant, classList} = classroom;
  let teacher, assistant, students;
  if(hasTeachingAssistant){
    [teacher, assistant, ...students] = classList;
  }else{
    [teacher, ...students] = classList;
  }

  return students;
}

console.log(getStudents(ClassRoom));

var obj= {
  prop1: '123',
  prop2: 'abc'
}

let {prop1, prop2} = obj;
console.log(prop1 + prop2);
