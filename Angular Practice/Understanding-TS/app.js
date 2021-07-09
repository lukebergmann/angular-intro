var person = {
    name: "Luke",
    age: 25,
    hobbies: ['Sports', 'Music']
};
var favoriteActivities;
favoriteActivities = ['Music'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
