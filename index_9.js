// 36. How Remove the first element from an array in JavaScript?
// 37. Write a Program to use a callback function?
// 38 Implement debounce function.
//HARD 39. Write a function which converts string input into an object
    // ("a.b.c", "someValue");
    // {a: {b: {c: "someValue"}}}
//HARD 40. Write logic to get unique objects from below array ?
    // I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
    // O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}
//41 create aync fn

  const arr=[
        
            {name: "php-2", skill:"php", experience :6},
            {name:"php-1", skill:"php", experience :5},
            {name: "react-1", skill:"react", experience :3},
            {name:"node-1", skill:"node", experience :2},
            {name: "react-2", skill:"react", experience :1},
            {name: "php-3", skill:"php", experience :3},
            {name: "node-3", skill:"node", experience :2},
            {name: "react-3", skill:"react", experience :1}
        ]

        const new_arr =arr.reduce((a,i)=>{
           // console.log(a[i.skill])
            if(a[i.skill]==undefined)
            {
                a[i.skill]=[]
            }
            a[i.skill].push(i)
            return a;
        },[])
        console.log(new_arr)
//console.log(arr)
//console.log(fn)
//fn()
function fn (){console.log("first")}
const sum2Num =(a,b) =>{
    return a+b
}

//printNumber(sum2Num,3,7)
function printNumber(fn,a,b)
{
   console.log(fn(a,b))
}

  
const sum = async () => {
    const a = 100;
    const b = 10000;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b); // resolve the promise after 5 seconds
        }, 5000);
    });
}

(async () => {
    // const ans = await sum();
    // console.log(ans);               // 10100 (after 5 seconds)
    // console.log("HAIIIIIIIIIIIII"); // prints after ans
})();

//console.log("HAIII")

function removeFirst()
{
    const arr = [1, 2, 3, 4, 5];
    const removed = arr.shift();  // removes first element
    console.log(arr);             // [2, 3, 4, 5]
    console.log(removed);  
    
    
    const newArr = arr.slice(1);  // returns new array without first element
    console.log(newArr);          // [2, 3, 4, 5]
    console.log(arr);  
}
//removeFirst()
    const uniqueObj =() =>{
    const input = [
        { name: "sai" },
        { name: "Nang" },
        { name: "sai" },
        { name: "Nang" },
        { name: "111111" }
        ];

        // Keep track of seen names
        const unique = input.filter((obj, index, self) =>
        index === self.findIndex(o => o.name === obj.name)
        );

        console.log(unique);
}
//uniqueObj()
function uniqueObj()
{
    const arr= [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
    const new_arr =arr.reduce((a,i)=>{
        console.log("Comes ->>>")
        console.log(i)
        let data_exist = a.some((f)=> f.name==i.name)
        console.log("data_exist->"+data_exist)
        if(!data_exist){
            a.push(i)
        }
        console.log("latest ")
        console.log(a)
        
        return a
    },[])

    console.log(new_arr)
}