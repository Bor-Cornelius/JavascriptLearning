const items = [
    {name: "Rice",price: 5},
    {name: "Maize",price: 20},
    {name: "Chicken",price: 10},
    {name: "Monitor",price: 100},
]

/*totalPrice = 0
items.forEach(item =>{
    totalPrice+= item.price
})*/
const totalPrice = items.reduce((total,item)=>{
    console.log(`Total: ${total}`)
    console.log(`Item: ${item.price}`)
    return total+=item.price
},0)
console.log(totalPrice)

const people = [
    {name: "Jane",age:15},
    {name: "Kibet",age: 20},
    {name: "Vera",age: 20},
    {name: "monica",age: 21},
]
const result = people.reduce((groupedage,person)=>{
    const age =person.age
    if (groupedage[age] == null) groupedage[age] = []
    groupedage[age].push(person)
    return groupedage
},{})
console.log(result)