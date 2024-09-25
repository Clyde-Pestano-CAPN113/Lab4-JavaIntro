//Task 1
function Add(x,y){
    let Added = x + y
    return(Added)
}
console.log(Add(3,4))

function Product(z,d){
    let multiy = z * d
    return(multiy)
}
console.log(Product(4,5))

let Diff = (a,b) => a - b
console.log("a is greater than b by " + Diff(5,2))

//Task 2 
function AddedAlotOfValues(...multiyadd){
    let Total = 0 
    for (let Adding of multiyadd){
        Total += Adding
    }
    return(Total)
}
console.log(AddedAlotOfValues(3,3,4,4,14))

function NameValue(name = "Anonymous"){
    console.log("Name is " + name)
}
NameValue()
NameValue("Clyde")

function AllPasedArug(a,b,c){
    return(arguments[0] + arguments[1] + arguments[2])
}
console.log(AllPasedArug(3,4,6))

//Task 3
function Greeting(Name, Age){
   let PersonalInfo = {Nameis: Name, Ageis: Age}
   let Text = "Name is " + PersonalInfo.Nameis + " age is " + PersonalInfo.Ageis
   return(Text)
}
console.log(Greeting("Jalen",18))

function EvenOrOdd(InputNum){
    let OnOrOff = null
    let TestingVal = InputNum/2
    if(Number.isInteger(TestingVal)){
        OnOrOff = true
        return(OnOrOff)
    }else{
        OnOrOff = false
        return(OnOrOff)
    }
}
console.log(EvenOrOdd(8))

function GiveName(Name){
    return(Name)
}
console.log(GiveName())

//Task 4
function OuterFun(){
    let OutSideVar = "This is outside of the function"
    function InnerFunction(){
        return(OutSideVar)
    }
    InnerFunction()
}
console.log(OuterFun())

function FullCounter(Bool){
    let Counter = 0
    if(Bool == true){
        return function (){
            Counter++
            console.log(Counter)         
          } 
    }else{
        Counter = Counter - 1 
        console.log(Counter)
    }
}
let go = FullCounter(true)
go()
