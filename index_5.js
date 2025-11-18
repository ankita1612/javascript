//Done 16. Given a string, write a javascript function to count the occurrences of each character in the string.
//Done// 17. Write a javascript function that sorts an array of numbers in ascending order.
//Hard Done// 18. Write a javascript function that sorts an array of characters in descending order.
//Done 19. Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.
//Hard Done 20. Write a JavaScript program to find the largest element in a nested array.
// [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]

const arr = [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2,[1,4,3332]],12]
var max=-100;
largestElement(arr)
function largestElement(arr)
{   
    for(let i=0;i <arr.length; i++)
    {
        if(Array.isArray(arr[i]))
        {           
           largestElement(arr[i])
        }
        else if(arr[i]>max)  {           
            max = arr[i]
        }        
    }    
}
console.log("max-->" +max)


//chatOccurence()
function chatOccurence()
{
    const name ='this Is my notebOok and it is full of page'
    let arr = name.split('').reduce((a,s)=>{
        const l= s.toLowerCase()
        if(l!=' ')
        {
            a[l]= (a[l] || 0) +1
        }
        return a
    },[])

    console.log(arr)
}
function reverseWord()
{
    const name="ankita";
    const name_arr = name.split("");
    const name_rev_arr=[];
    for(let i=name_arr.length-1; i>=0; i--)
    {
        name_rev_arr.push(name_arr[i])
        console.log("==>"+name_arr[i])
    }
    console.log(name_rev_arr.join(''))
}

//reverseWord()

const arrSort = () =>{
    const arr=[5,3,1,6,8,0,4,2,4,6,8,9]
    //const arr=['t','h','t','d','a','e','g','t','y']
    const new_arr = [...arr]
    arr.sort((a,b)=>b-a)
    console.log(arr)

    new_arr.sort((a,b)=>a-b)
    console.log(new_arr)
}
//arrSort()


const charSort = () =>{
    const arr=['t','h','t','d','a','e','B','g','t','y']
    const new_arr = [...arr]
    
    arr.sort((a,b)=>b.localeCompare(a, 'en', { sensitivity: 'base' }))
    console.log(arr)

    new_arr.sort((a,b)=>a.localeCompare(b, 'en', { sensitivity: 'base' }))
    console.log(new_arr)
}
//charSort()
