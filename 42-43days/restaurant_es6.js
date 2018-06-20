class Restaurant {
    constructor(obj) {
        this.cash = obj.cash;
        this.seats = obj.seats;
        this.staff = obj.staff;
    }
    hire(employee) {
        this.staff.push(employee)
    }
    fire(employee) {
        for(var i in this.staff){
            if(this.staff[i] == employee){
                return this.staff.splice(i,1)
            }
        }   
    }
}





class Employee{
    constructor(id,name,salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    work() {
        console.log('完成了一次工作')
    }
}




class Serve extends Employee{
    constructor(id,name,salary){
       super(id,name,salary)
    }
    work() {
        console.log('完成一次工作：如果参数是个数组，则记录客人点菜，如果参数不是数组则是上菜行为');
    }
}



class Cook extends Employee{
    constructor(name,salary){
        super(name,salary)
        }
    work() {
        console.log('完成一次工作：烹饪出菜品');
    }
}


class Customer{
    order (food) {
        console.log('点了一盘'+food);        
    };
    eat (food) {
        console.log('吃了一盘'+food);        
    }
}

class Food{
    constructor(name,cost,price) {
        this.name = name;
        this.cost = cost; 
        this.price = price
    }
}




var ifeRestaurant = new Restaurant({
    cash: 1000000,
    seats: 20,
    staff: []
});

var newCook = new Cook("Tony", 10000);
ifeRestaurant.hire(newCook);
console.log(ifeRestaurant);


console.log(ifeRestaurant.staff);

// ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);