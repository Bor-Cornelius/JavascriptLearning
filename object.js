for (var i = 0;i<5;i++) {
    console.log('Position '+ i);
}
          var var1 = 2
        var var2 = 5
        if(var1==var2 && var2 ==5){
            console.log('This is true');
        }else{
            console.log('This is false');
}
// object literal
var person = {
    firstName : 'Cornelius',
    lastName : 'Bor',
    Children : [ 'Kelvin','Kibet'],
    address : {
        City: 'Nairobi',
        postalAddress: '123-00100',
        county : 'Bomet'

    },
    fullName: function(){
        return this.firstName + " "+ this.lastName
    }
}
console.log(person.fullName());
//constructor pattern

function fruit(name,color,shape){
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function(){
        return this.name + " is "+ this.color + " and is "+ this.shape + " in shape."
    }
}
var melon = new fruit('melon','green','round')
var banana = new fruit('banana','yellow','curly')
console.log(melon.describe());
console.log(banana.describe());