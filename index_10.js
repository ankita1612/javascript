//4.[hard] Find the First Non-Repeating Character
//5. find first repreating  char
 //Reverse Words in a Sentence
 //21. Check if a String Contains Only Digits
// Given the sentence "India is my country." Return the same sentence but with the first letter of each word capitalized.
 //👉 Output: India Is My Country.
//word with first lettmer
// 22. const users = [
//   { id: 1, name: "Amisha" },
//   { id: 2, name: "Riya" },
//   { id: 3, name: "mira" }
// ];
// reutrn true is name is amita
//users.some(user => user.name === "Amit"); // 
wordFirstLetter()
function wordFirstLetter()
{
    const str="my name is ankita"
    const new_str1 = str.split(' ').reverse()
    const new_str = str.split(' ').map(s=>{
        return s.charAt(0).toUpperCase() + s.slice(1)
    })
    console.log(new_str.join(' '))
    console.log(new_str1.join(' '))
    
}


//curry
///Find first repeating character 
//firstNonRepeat()
function firstNonRepeat()
{
    const name="annkkiittaf";
    let non_repeat=''
    const name_arr = name.split('')
    let completed_arr=[]
    name_arr.some((a,i)=>{        
        let new_arr =name_arr.slice(i+1)        
        if(!new_arr.includes(a) && !completed_arr.includes(a))
        {            
            non_repeat=a
            return true
        }
        completed_arr.push(a)
    })

    console.log("==>"+non_repeat)
}
//object operation
//groupbyData in object
function curryEg(num)
{console.log("call")
    var sum = num || 0
    function nextC(num2)
    {        
        if(num2== undefined)
            return sum;

        sum = sum + num2
        return nextC
    }
    return nextC

}
console.log(curryEg(10)(20)(30)())
function firstRepeatingChar(str) {
  const seen = new Set();

  for (let char of str) {
    if (seen.has(char)) return char;
    seen.add(char);
  }
  return null;
}

//console.log(firstRepeatingChar("success")); // 

//repreating()
function repreating()
{
    const str="success"
    const arr= str.split('')
    let result=[];
    let char='';
    for(i=0;i<arr.length;i++)
    {
        result[arr[i]]= (result[arr[i]]||0) +1
        if(result[arr[i]]>1)
        {
            char=arr[i]
            break;
        }
    }
    console.log(char)
    console.log(result)

}

function objectOperation(){
    const users = [
    { id: 1, name: "Amit", age: 25, salary: 30000, active: true },
    { id: 2, name: "Neha", age: 32, salary: 50000, active: false },
    { id: 3, name: "Rahul", age: 28, salary: 40000, active: true },
    { id: 4, name: "Priya", age: 35, salary: 70000, active: true },
    ];

    //Get only user names
    const data=users.map((s)=>{return s.name})
    console.log(data)

    // Add yearly salary
    result=  users.map((i)=>{
        let data= {...i, 'annualSal':i.salary*12}
        return data
    })
    console.log(result)

    //Convert users to ID–Name object
    const idName = users.map(u => {
        return { [u.id]: u.name,test:'static data' };    
    })
    console.log(idName)

    //rename salary colo to income
    const renamed = users.map(({ salary, ...rest }) => ({
        ...rest,
        income: salary
        }));
        console.log(renamed)
}

function groupbyData()
{
    const users = [
    { id: 1, name: "Amit", age: 25, salary: 30000, active: true, 'dept':'php' },
    { id: 2, name: "Neha", age: 32, salary: 50000, active: false, 'dept':'php' },
    { id: 3, name: "Rahul", age: 28, salary: 40000, active: true, 'dept':'node' },
    { id: 4, name: "Priya", age: 35, salary: 70000, active: true,'dept':'react' },
    { id: 5, name: "siya", age: 30, salary: 30000, active: true, 'dept':'php' },
    { id: 6, name: "chiya", age: 25, salary: 20000, active: true,'dept':'node' },
    { id: 7, name: "iya", age: 20, salary: 10000, active: true,'dept':'react' },
    ];

    const new_data = users.reduce((a,i)=>{
        console.log(a[i.dept])
        if(a[i.dept]==undefined) a[i.dept]=[]
        a[i.dept].push(i)
        return a
    }
    ,[])
    console.log(new_data)
}

function isLetter(){
 const str="33333"
 const arr =str.split("").every((s)=>{
     
    const n=Number(s)
    if(!(n>=0 && n<=9) || n==NaN){
         return false
    }
    else
      return true
 })
 
 console.log(arr)
}