// fetch('https://jsonplaceholder.typicode.com/users')
//     .then( res => res.json())
//     .then( data => { const littleData = data[0]} )
//     .then( () => { return {...littleData, username: 'newUserName'}})
//     .then( newData => console.log(newData)) 
// const pizzaOrder = new Promise((resolve, reject) => {
//     let pizzaIsReady = true;
  
//     if (pizzaIsReady) {
//       resolve('Here is your pizza 🍕');
//     } else {
//       reject('Sorry, shop is closed 😢');
//     }
//   });
//   console.log(pizzaOrder); // Promise { 'Here is your pizza 🍕' }
//   pizzaOrder
//   .then((pizza) => {
//     console.log(pizza); // 🍕 Enjoy Pizza
//   })
//   .catch((error) => {
//     console.log(error); // 😢 Feel sad
//   });

const eatPizza = (pizza) => {
    setTimeout(() => {
        console.log(`Eating pizza`);
        pizza();
    },2000);
}
const drinkCoke = (drink) => {
    setTimeout(() => {
        console.log(`Drinking coke`);
        drink();
    },1500);
}
const drinkWater = (finsihed) => {
    setTimeout(() => {
        console.log(`Drinking water`);
        finsihed();
    },1000);
}
eatPizza(() => {
    drinkCoke(() => {
        drinkWater(() => {
            console.log('Finished eating and drinking!');
        });
    });
})