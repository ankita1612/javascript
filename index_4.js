//done// 11. Write a JavaScript program to find the maximum number in an array.
//done// 12. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
//hard//done// 13.write a program that seprate nmber and string and remove duplicate
//hard 14. Implement a javascript function that flattens a nested array into a single-dimensional array.
//done// 15. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

flatternArr()
function flatternArr()
{
    const arr=[1,2,[4,5],3,4,[11,23],6]
    let new_arr= arr.reduce((a,n)=>{
        if(Array.isArray(n)){
            a.push(...n);             
        }
        else{              
             a.push(n)                   
        }
        return  a;
    },[])
    console.log(new_arr)
}

const seprateNumberStr = () =>{
    const arr=[1,'abc','test',3,'abd','test',1,11,'hai',111,3,2,'hai']

    const new_arr =arr.reduce((a,n) =>{
        console.log(a.number)
        if(typeof n=="string"){
            a.str.push(n)
        }
        else{
            a.number.push(n)
        }
        return a;       
    },{number:[],str:[]})
    console.log(new_arr)

    const num= [... new Set(new_arr.number)]
    const str= [... new Set(new_arr.str)]
    
    console.log(num)
    console.log(str)
}
//seprateNumberStr()
// /fibonacci()
function fibonacci()
{
    n=6;
    let arr=[0,1]
    for(i=1;i<=n;i++)
    {
        arr.push(arr[i]+arr[i-1])
    }
    console.log(arr)
    //0,1,1,2,3,5,8

}

const returnEvenNumber = () =>{
    const arr=[1,3,65,9,2,1,2,2,22,5,7,8,9,1,44,33,22,66]
    even_arr = arr.filter((a) => {
        return a % 2==0
    })
    console.log(even_arr)

    let     unique_number= [... new Set(even_arr)]
    console.log(unique_number)
}
//returnEvenNumber()
const maxNumber= () => {
    const arr =[11,54,8,4,9,22,45,7,9]
    let max_number = arr.reduce((a,n)=>{
        return a<n?n:a
    },0)
    console.log(max_number)
}
//maxNumber()

//uniqueObject()
function uniqueObject()
{
    var obj1=[{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}]
    var unique_obj=[];
    obj1.forEach((i) =>{
        
        console.log(i)
        
    })
}

//formedString()