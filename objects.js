const user = {
    name: 'Adrian',
    sayHello:function(){
        //return "Hello, " + this.name;
        return `hello, ${this.name}`
    },
    sayHello2:() => {
        return "hello, " + this.name;
    }
}

//user.name = 'Mihai'
//user ['name'] = 'Mihai'

console.log(user.name);
console.log(user.sayHello())
console.log(user.sayHello2())