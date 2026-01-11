//Done 31. sperate string and number and stor unique
//HARD 32. LCM of two numbers
//HARD 33 Find GCD 
//HARD 34 Check if a number is Armstrong number.
//done 35. Count the number of vowels in a string.

const filterEg = () =>{
    const arr=[1,2,3,4,5,6,7,8,9]
    const new_num=arr.filter((n,ind,num_arr)=>{
        return n%2==0

    })
    console.log(new_num)

}
filterEg()
const armstrong = ()=>{

    const num=121;
    let new_num=num;
    const len = num.toString().length;
    let num_sum=0;
    let rem_num=0;
    while (new_num >0)
    {
        rem_num = new_num % 10;       
        new_num = parseInt(new_num/10);         
        num_sum+= Math.pow(rem_num,len)
    }
    console.log("~~>"+num_sum)
}
//armstrong()

const GCD = (a, b) => {
  while (b !== 0) {
    console.log( 'a%b: '+a%b+' a : '+a+' b : '+b)
    let temp = b;
    b = a % b;
    a = temp;
    
  }
  return a;
}
const LCM = (a, b) => {
  return (a * b) / GCD(a, b);
};
// //console.log(GCD(11 , 22));
// console.log("+++++++++++")
// console.log(GCD(22 ,11));
const GCD1 =() =>{
    const num1=211;
    const num2=667;
    let divisor1=[]
    let divisor2=[]
    for(let i=2;i<=num1/2;i++)
    {
        if(num1 %i ==0 )
            divisor1.push(i)
    }
    for(let i=2;i<=num2/2;i++)
    {
        if(num2 %i ==0 )
            divisor2.push(i)
    }
    let max_divisor=0;
    for(let i=0;i<divisor1.length;i++)
    {
        for(let j=0;j<divisor2.length;j++)
        {
            if(divisor1[i]==divisor2[j] && max_divisor < divisor1[i])
            {
                max_divisor = divisor1[i]
            }
            
        }
    }
    console.log(divisor1)
    console.log(divisor2)
    console.log(max_divisor)
}
//GCD1()
const seprateStrNum = () =>{    
    const str=['t',9,'a',90,'i','s','i',1,'s','r',2,'t','i','s',3,1,9]
    const result = str.reduce((a,n)=>{
        console.log(typeof n)
        if(typeof n =="number")
        {
            a.num_arr.push(n)
        }
        else 
        {
            a.str_arr.push(n)
        }
        return a;
    },{str_arr:[],num_arr:[]})
    console.log(result)
     let new_str= [... new Set(result.str_arr)]
     const new_num= [... new Set(result.num_arr)]
     console.log(new_str)
     console.log(new_num)

}
//seprateStrNum();
const countVovel = () =>{
    const str="athIsI is SSMM sii#tr+";
    const vovel=['a','e','i','o','u']
    const cnt=str.split('').reduce((a,s)=>{  
        s =s.toLowerCase()      
        if(vovel.includes(s))
        {
            a['vovel']=  (a['vovel']||0) + 1;
        }
        else if( s>='a' && s<='z'  )
        {
            a['conso']=  (a['conso']||0) + 1;
            console.log(s)
        }
            

        return a;
    }
    ,{'vovel':0,'conso':0})
    console.log(cnt)
}
//countVovel()
