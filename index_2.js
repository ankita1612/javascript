// 1. Program to find longest word in a given sentence ? ['a','abcd','abc','ab'] // o/p : abcd
// 2. How to check whether a string is palindrome or not ?
// 3. Write a program to remove duplicates from an array ?
// 4. Program to find Reverse of a string without using built-in method ?
// 5. Find the max count of consecutive 1’s in an array ? [1,0,1,1,1,1,5,7,8,11,3,1,1,1,7,6,5,1,1,0,1,0] //op : 4
longestWordWithReducer()
longestWord()
removeDuplicateFromArray();
largestRepeatingSubstring("thisisemptybasketandemptybyibasketyme")
reverseStr()
function longestWordWithReducer(){

    const str="I am writing online code"
    let longest_size=0;
	let longest_word='';

	str.split(' ').forEach((s) => {
		if(s.length > longest_size)
		{
			longest_size =s.length 
			longest_word = s;
		}
	})
    console.log(longest_size +  " "+longest_word)
}



function removeDuplicateFromArray(){

    const arr=['1','a','a1','a123','a2','a1','er','ert','1','a2']
    let new_arr=[];
    arr.forEach((e) =>{
        if(!new_arr.includes(e))
        {
        new_arr.push(e)
        }
    })
    console.log(new_arr)
}
function largestRepeatingSubstring(str) {
    let maxSub = "";

    for (let len = 1; len <= str.length; len++) {
        for (let i = 0; i <= str.length - len; i++) {
            let sub = str.substring(i, i + len);
            let rest = str.substring(i + 1);
            if (rest.includes(sub) && sub.length > maxSub.length) {
                maxSub = sub;
            }
        }
    }

    console.log(maxSub);    
}

function reverseStr(){
    const str="12345"
    let new_arr=[];
    let new_str='';

    for(let i=str.length-1 ; i>=0;i--){
	    new_arr.push(str[i])
    }
    new_str=new_arr.join('')
	console.log(new_str)
}

//palindrome();
function palindrome(){

    const str="123454321"
   let new_str= str.split('').reverse().join('')
    if(new_str === str)
        console.log("palindrome")
    else
        console.log("not palindrome")

}

function longestWord(){

    const str="I am writing online code"
    let longest_size=0;
	let longest_word='';

	str.split(' ').forEach((s) => {
		if(s.length > longest_size)
		{
			longest_size =s.length 
			longest_word = s;
		}
	})
    console.log(longest_size +  " "+longest_word)
}
