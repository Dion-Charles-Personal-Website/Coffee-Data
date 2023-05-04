// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas seperating them.
// d. Connect the coffee_data.js file to the index.js file.

const coffeeMenu = [
    {
        name: "cappuccino",
        price: 8,
        seasonal: false,
    },
    {
        name: "espresso",
        price: 5,
        seasonal: false,
    },
    {
        name: "latte",
        price: 5,
        seasonal: false,
    },
    {
        name: "affogato",
        price: 9,
        seasonal: true,
    }, 
    {
        name: "macchiato",
        price: 6,
        seasonal: false,
    },
    {
        name: "americano",
        price: 7,
        seasonal: false,
    },
    {
        name: "iced coffee",
        price: 6,
        seasonal: false,
    },
    {
        name: "frappe",
        price: 8,
        seasonal: false,
    },
    {
        name: "cuban espresso",
        price: 10,
        seasonal: true,
    }
]

module.exports = coffeeMenu

// Prompt 2
// Prints an array of all the drinks on the menu.
//for (let i = 0; i < coffeeMenu.length; i++) {
//  console.log(coffeeMenu[i].name);
//}

// Prompt 3
// Prints an array of drinks that cost 5 and under.
//  for (let i = 0; i < coffeeMenu.length; i++) {
//    if (coffeeMenu[i].price <= 5)
     
//      console.log(coffeeMenu[i].name);
//    }

// Prompt 4
// Prints an array of drinks that are priced at an even number.

//const evenPricedDrinks = [];
    // for (let i = 0; i < coffeeMenu.length; i++) {
    //     if (coffeeMenu[i].price % 2 === 0) {
    //     evenPricedDrinks.push(coffeeMenu[i]);
    //         console.log(evenPricedDrinks);
    //     }
    // }


// Prompt 5
// Prints the total cost if they were to order one of every drink.

// let totalCost = 0;

// for (let i = 0; i < coffeeMenu.length; i++) {
//   totalCost += coffeeMenu[i].price;
// }

// console.log(`Total cost for all drinks is: $${totalCost}.`);


// Prompt 6
// Prints an array of all the drinks that are seasonal

// const seasonalDrinks = coffeeMenu.filter(drink => drink.seasonal);
// console.log(seasonalDrinks);


// Prompt 7
// Prints all the seasonal drinks with the words "with imported beans" after the item name.

// const seasonalDrinks = coffeeMenu.filter((drink) => drink.seasonal);

// seasonalDrinks.forEach((drink) => {
//   console.log(`${drink.name} with imported beans`);
// });

