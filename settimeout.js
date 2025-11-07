var counter=0;
const fn =() => {    
    console.log(" Hello World" +counter); 
    counter++
    if(counter===5){
        console.log(`id is inside loop ${id}`)
        clearInterval(id);
    }
}
const id = setInterval(fn,1000);   
console.log(`id is ${id}`)