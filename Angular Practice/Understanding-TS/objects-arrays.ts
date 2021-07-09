const person = {
  name: "Luke",
  age: 25,
  hobbies: ['Sports', 'Music']
};

let favoriteActivities: string[];
favoriteActivities = ['Music'];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
