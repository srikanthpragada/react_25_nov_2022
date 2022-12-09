var a = [10,20,30]

function print_value(v) {
    console.log(v)
}

// passing normal function 
a.forEach(print_value);

// Passing function expression or anonymous function 
a.forEach( function (v,idx) {
              console.log(idx + ":" + v)
           }
         )

// Using arrow function 
a.forEach( (v) => console.log(v))
