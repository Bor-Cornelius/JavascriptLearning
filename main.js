const items = [
    {name: "Rice",price: 5},
    {name: "Maize",price: 20},
    {name: "Chicken",price: 10},
    {name: "Monitor",price: 100},
]

totalPrice = 0
items.forEach(item =>{
    totalPrice+= item.price
})
console.log(totalPrice)