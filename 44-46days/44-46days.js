function Restaurant(obj) {
    this.cash = obj.cash;
    this.seats = obj.seats;
    this.staff = obj.staff;
}

Restaurant.prototype = {
    constructor: Restaurant,
    hire : function(employee){
        this.staff.push(employee)
    },
    fire : function(employee) {
        for(var i in this.staff){
            if(this.staff[i] == employee){
                return this.staff.splice(i,1)
            }
        }   
    }
}



var Waiter = (function(){
    var instance
    var Waiter = function(id, name, salary) {
        if (instance) {
            return instance;
        }
        Employee.call(this, id, name, salary)        
        this.order = function(food){
            console.log('记录了客人点菜');
            cook = new Cook() 
            cook.cookFood(food);
        }
        this.serve = function(food){
            console.log('上了一道菜');
            newcustomer.eat(food)
        }
        return instance = this
    }
    return Waiter;
})()


function Cook(name,salary){
    Employee.call(this, name, salary)
    this.work = function(){
        console.log('完成一次工作：烹饪出菜品');
    }
}


var Cook = (function(){
    var instance
    var Cook = function(id, name, salary) {
        if (instance) {
            return instance;
        }
        Employee.call(this, id, name, salary)        
        this.cookFood = function(food){
            console.log('做了一道菜');
            waiter = new Waiter() 
            waiter.serve(food)   
        }
        return instance = this
    }
    return Cook;
})()



var cusNames = ['张三','李四','王五','赵六','刘七']
function Customer(){
    this.name = function(){
        var i = Math.floor(Math.random*(cusNames.length))
        return cusNames[i]
    }()
    this.order = function(food) {
        console.log('点了一盘'+food.name); 
        waiter = new Waiter() 
        waiter.order(food)      
    };
    this.eat = function(food) {
        console.log('吃了一盘'+food.name);  
        food = null;
        return new Customer()      
    }
}


function Employee(id,name,salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}

Employee.prototype.work = function() {
    console.log('完成了一次工作')
}


function Cook(name,salary){
    Employee.call(this, name, salary)
    this.work = function(){
        console.log('完成一次工作：烹饪出菜品');
    }
}

function Food(name,cost,price) {
    this.name = name;
    this.cost = cost; 
    this.price = price
}

// var menu = []

var food1 = new Food('青菜豆腐','2','12')
var food2 = new Food('紫菜汤','1','10')
var food3 = new Food('番茄鸡蛋','5','20')

// !function(){
//   menu.push(food1,food2,food3)
// }()

var ifeRestaurant = new Restaurant({
    cash: 1000000,
    seats: 1,
    staff: []
});


// var cook = new Cook()
// var waiter = new Waiter()
var newcustomer = new Customer()
var step1 = newcustomer.order(food2)
// var step2 = waiter.order(step1)
// var step3 = cook.cookFood(step2)
// var step4 = waiter.serve(step3)
// var step5 = newcustomer.eat(step4)
