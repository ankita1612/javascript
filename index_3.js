//done // 6. Find the factorial of given number ?
//done// 7. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?
//hard// 8. Create a function which will accepts two arrays arr1 and arr2. 
// The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.
//hard// 9. Given two strings. Find Anagram : one string can be formed //str1 = "apple" str2 = "pleap" //true
// 10. Write a JavaScript function to check if a given number is prime.

// console.log(Array.from({ length: 10 }, (_, i) => i + 1)); //Need to do
// console.log(Array.from({ length: 10 }, (_, i) => i + 5)); //array start with 5

const primeCheck = (n) =>{
    sqrt=Math.sqrt(n)
    console.log(sqrt)
    let is_prime=1;
    for(i=2;i<=sqrt;i++)
    {
        if(n%i ==0)
        {           
            is_prime=0
            break;
        }
    }   

    console.log(is_prime==0?"Not prime":"Prime")   
}
primeCheck(123)

function formedString()
{
    var str1="apple"
    var str2="aplap"

    let is_same=1
    let new_str1=[]
    let new_str2=[]

    if(str1.length!= str2.length)
    {
        is_same=0
    }
    else
    {
        for(s of str1)
        {
            new_str1[s] =(new_str1[s] || 0) +1
        }

        for(s of str2)
        {
            new_str2[s] =(new_str2[s] || 0) +1
        }

        for(s in new_str1)
        {
            if(!(s in new_str2 && new_str1[s] == new_str1[s]))
            {
                is_same=0
                break
            }
                
        }
    }
    console.log(new_str1)
    console.log(new_str2)

    console.log("Same" + is_same)
}

sameSquade2()
function sameSquade2(){
    const arr1=[1,3,2,4,2,4,5]
    const arr2=[1,4,4,9,16,16,25]

    var new_arr1=[]
    var new_arr2=[]
    
    for(let a of arr1)
    {	
        new_arr1[a]= (new_arr1[a] || 0) +1
    }    
    for(let a of arr2)
    {	
        new_arr2[a]= (new_arr2[a] || 0) +1
    }
    let is_same=1;
    for(let a in new_arr1)
    {
        let square=a*a;
        console.log("a -->"+a  +"  new_arr1==>" + new_arr1[a]+"  squaew -->"+square)
        if(new_arr2[square]!=undefined  && new_arr2[square]== new_arr1[a]){            
        }
        else{
           is_same=0;
           break
        }
            
    }
    console.log(new_arr1)
    console.log(new_arr2)
    console.log("same "+is_same)
}


// const sameSquared = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) return false;

//     let freq1 = {};
//     let freq2 = {};

//     // Count frequency for arr1
//     for (let num of arr1) {
//         freq1[num] = (freq1[num] || 0) + 1;
//     }
//      // Count frequency for arr2
//     for (let num of arr2) {
//         freq2[num] = (freq2[num] || 0) + 1;
//     }
//     console.log(freq1)
//     console.log(freq2)
//      // Check if squares match with frequency
//     for (let key in freq1) {
//         let squared = key ** 2;
//         if (!(squared in freq2)) return false;      // square not present
//         if (freq2[squared] !== freq1[key]) return false; // frequency mismatch
//     }

//     return true;
// }
// sameSquared([1, 2, 3, 2], [1, 4, 9, 9]);  
const factorialWithReducer = (n) => {
    if (n < 0) return undefined;
    return n === 0 ? 1 : Array.from({ length: n }, (_, i) => i + 1).reduce((acc, val) => acc * val, 1);
}

const factorial = (n) =>{   
    let fact	=1;
   for(let i=2;i<=n;i++) {
    fact=fact*i
    }
    console.log(fact)	
}
const arrayMerge = () =>{
    //If you had numbers like [10,2,1], default sort() would give:[1, 10, 2]  so write a-b
    let arr1=[1,5,8,19]
    let arr2 =[4,5,16,17]
    let merged_arr =[];
	merged_arr=arr1.concat(arr2);
    merged_arr.sort((a,b)=>a-b)
    console.log(merged_arr)
}
//arrayMerge()   
// factorial(5)
// console.log(factorialWithReducer(5)); // 120