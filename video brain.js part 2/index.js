const brain = require("brain.js");
const Restaurants = {
    "ACK": "Senin",
    "JFC": "Selasa",
    "KFC": "Rabu",
    "MCD": "Kamis",
    "Pan Tantri": "Jumat",
    "Be Genyol": "Sabtu",
    "Be Pasih": "Minggu",
}

const trainingData = [];

for(let restaurantName in Restaurants){
    const day = Restaurants[restaurantName];
    trainingData.push({
        input:{
            [day]: 1
        },
        output:{
            [restaurantName]: 1
        }
    })
}

const net = new brain.NeuralNetwork({
    hiddenLayers:[3]
})

const stat = net.train(trainingData);

// console.log(stat);

// const prediksi = net.run({
//     "Sabtu": 1
// });

function getRestaurantsReal(day){
    const hasil = net.run({
        [day]: 1
    })
    let tertinggi = 0;
    let restaurantTertinggi = '';

    for(restaurantName in hasil){
        if(hasil[restaurantName] > tertinggi){
            tertinggi = hasil[restaurantName];
            restaurantTertinggi = restaurantName;
        }
    }

    return restaurantTertinggi;
}

console.log(getRestaurantsReal("Jumat"));   