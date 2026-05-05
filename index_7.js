//hard done 26. Flatten a nested array.
//done 27 .Count occurrences of elements in an array.
//done 28 Merge two arrays and remove duplicates.
//Good one //Done 29 Find all unique characters in a string.
//Done 30 Check if two strings are anagrams.
var flat_arr=[];
const flatArray = (arr) =>{
    for(let i=0;i<arr.length;i++)
    {
        if(Array.isArray(arr[i]))
        {
            flatArray(arr[i]);
        }
        else
            flat_arr.push(arr[i])
    }
}


flatArray([1,2,[3,4],[5,6,[8,9,10],11],12,13])
console.log(flat_arr)

const occurenceCount = () => {
    const arr= "this is my practical exam";
    const occ= arr.split('').reduce((a,s)=>{
        if(s!=' '){
            a[s] =(a[s] || 0) +1        
           
        }
        return a;
        
        
    },[])
    console.log(occ)
}
//occurenceCount()
const merge2ArrayRemoveDuplicate = () =>{
    const arr1=[1,5,7,9,3]
    const arr2=[3,6,9,1,5,7]
    const new_arr=arr1.concat(arr2);
    const final_arr = [... new Set(new_arr)] 
    console.log(final_arr)
}
//merge2ArrayRemoveDuplicate();
const uniqueChar = () =>{
    const str="this Is String for Lettsres";    
    const unique_str= [... new Set(str.toLowerCase())]
    console.log(unique_str)
}
//uniqueChar()
const anagrams= () =>{
    const str1="hellaob"
    const str2="ehlolab"

    const new_str1=str1.split("").reduce((a,s)=>{
        a[s]= (a[s] ||1) +1
        return a;
    },[])

    const new_str2=str2.split("").reduce((a,s)=>{
        a[s]= (a[s] ||1) +1
        return a;
    },[])
    let is_anagram=1;
    for(let key in new_str1)
    {
        
        //console.log(new_str2[key])
        if(!(new_str2[key]!='' && new_str2[key]!=undefined && new_str2[key] == new_str1[key]))
        {
            is_anagram=0;
            break;
        }
    }
    console.log("Is anagram : " +( is_anagram?"Yes":"No"))
    console.log(new_str1)
    console.log(new_str2)
}
//anagrams();
