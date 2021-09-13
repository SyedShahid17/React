const print = (x) => console.log(x);

// let square=function(x){
//   return x*x;
// };

// console.log(square(3));

// let sq = (x) => {return x*x};

// console.log(sq(3) + ' from arrow function');

// const sqEx = (x) => x*x ;

// console.log(sqEx(9))

// const getname = (name) => name.split(" ")[0];
// console.log(getname("syed shahid s"));

const add = (x,y) => x + y ;
print(add(9,8));

const user={
  name : "Syed",
  cities : ['New York', 'Bangalore', 'Berlin', 'London'],

  citiesLived(){
    print(this.name);
    print(this.cities);

    this.cities.forEach((city) => {
      print(this.name + " has visited " + city) ;
    });
  }
}

user.citiesLived();