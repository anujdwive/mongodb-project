const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

// This schema is use for only dataType
// const fruitSchema = new mongoose.Schema({
//       name: String,
//       review: String,
//       rating: Number
// });

//  This schema is use for dataType and validation
const fruitSchema = new mongoose.Schema ({
    name: {
      type: String,
      required: [true, "Please check your data entry, no name specifyed"] //if you do not enter required feeld than you get a error mssg
    },
    rating: { //rating give between the 1 and 10 
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});


const Fruit = mongoose.model("Fruit", fruitSchema);

const newFruits = new Fruit({
      rating: 10,
      review: "very good"
});
// newFruits.save();

const fruit = new Fruit({
      name: "Apple",
      review: "Very Sweet",
      rating: 5
});

const kiwe = new Fruit({
      name: "Kiwe",
      review: "Very Khatta",
      rating: 4
});
const banana = new Fruit({
      name: "Banana",
      review: "Very Big",
      rating: 4
});
// fruit.save(); // It is use for only one item save on database

// This mathode is use for many item insert in dataBase
// try {
//       Fruit.insertMany([kiwe, banana]);
//       console.log("Succesfuly insert items");
// } catch (error) {
//       console.log(error);
// };

// This mathod is use for findind the data in database
Fruit.find().then(function (fruits) {
      //     console.log(fruits); // All data of database show in console
      fruits.forEach(function (fruit) {
            mongoose.connection.close(); // this mathod use for close the connection automatic

            console.log(fruit.name); // only name show in console
      });
}).catch(function (err) {
      console.log(err);
});

// This mathod is use for updateing the data
try {
      Fruit.updateOne({_id: "65239b0887079ce6626dba54"}, {name: "Peach"});
      console.log("Succesfuly update");
} catch (error) {
      console.log(error);
}

// Fruit.updateOne({_id: "652395864257617350c22ab6"}, {name: "Papaya"})
// .then(function(){
//     console.log("Succesfully update")
// })
// .catch(function(err){
//     console.log(err);
// })

// try {
//       Fruit.deleteOne({_id:"652395864257617350c22ab6"});
//       console.log("Succesfuly delete");
// } catch (error) {
//       console.log(error);
// }

const peopleSchema = mongoose.Schema({
      name: String,
      age: Number
});

const People = mongoose.model("People", peopleSchema);

const people = new People({
      name: "Anuj",
      age: 22
});
// people.save();



// const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//     name: "Apple",
//     rating: 5,
//     review: "Good"
// });

// // fruit.save();
// // console.log(fruit.name);

// const pineapple = new Fruit({
//     name: "Pineapple",
//     review: "Great Fruit"
// });
// pineapple.save();

// const personSchema = new mongoose.Schema ({
//     name: String,
//     age: Number,
//     favouriteFruit: fruitSchema
// });

// const Person = mongoose.model("Person", personSchema);

// // const person = new Person({
// //     name: "Anuj",
// //     age: 22
// // });
// // person.save();
// const man = new Person({
//     name: "Anjali",
//     age: 21,
//     favouriteFruit: pineapple
// });
// man.save();
// // console.log(person.name);


// const orange = new Fruit({
//     name: "Orange",
//     rating: 5,
//     review: "Good"
// });
// const banana = new Fruit({
//     name: "Banana",
//     rating: 5,
//     review: "Good"
// });
// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 5,
//     review: "Good"
// });



// const item = [orange, banana, kiwi];
//       Fruit.insertMany(item)
//       console.log("Succesfully saved all the fruits to fruitsDB");

//callback fnction kam nhi kar raha h





// Fruit.deleteOne({_id: "646c69fa0a7adb60e6f36506"})
// .then(function(){
//     console.log("Succesfully delete")
// })
// .catch(function(err){
//     console.log(err);
// })