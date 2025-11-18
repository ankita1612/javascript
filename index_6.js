//Done 21. Given int[] input = {1,2,3,4,5,6}, produce int[] output = {3,7,11} where each pair is summed (1+2,3+4,5+6). 
//Done 22. Given int[] input = {1,2,3,5,6,7}, find missing digits → int[] output = {4}.
//done 23. Find the largest/smallest number in an array.
//done 24. Sum of all numbers in an array.
//done 25. Remove duplicates from an array.

const pairSum = () =>{
    const arr = [1,2,3,4,5,6,7,8]

    arr_sum =arr.reduce((a,n,i)=>{
        if((i+1) %2==0)
        {
            a.arr_sum.push(a.last_num + n)           
        }
        else
            a.last_num=n;
        return a;
    },{arr_sum:[],last_num:0})

    console.log(arr_sum.arr_sum)
}
pairSum()


const findMissingNumber = () =>{
    const n=[1,4,6,8,9,2,9,22,33,44]
    const max_n=Math.max(...n);
    let missing_arr=[]
    for(let i=1;i<=max_n; i++)
    {   
        if(!n.includes(i)) 
            
            {
                missing_arr.push(i)
            }
    }
    console.log(missing_arr)
}
//findMissingNumber();

const largeSmall = () =>{
    const arr=[2,3,1,4,5,4,3,55,44,22,6,77,88,4,2]
    const n= arr.reduce((a,n)=>{
        
        if(a.l<n ) a.l=n
        if(a.s>n ) a.s=n
        return a

    },{l:-100,s:1000})
    console.log(n)
}
//largeSmall();
//sumArr()
const sumArr = () =>{
    const arr=[1,2,3,4,5]
    const n= arr.reduce((a,n)=>{
        return a+n;

    },0)
    console.log(n)
}
//sumArr()


//removeDuplicate();
function removeDuplicate()
{
    const arr=[1,6,4,3,5,67,8,90,555,3,3,22,55,7,77,4,2,6,89,90,90]
    
    //console.log([... new Set(arr)])
    const unique_data = arr.reduce((a,n)=>{
        if(!a.includes(n)) a.push(n)
        return a;    

    },[])

    console.log(unique_data)
}
