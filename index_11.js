const information = {
  users: [
    { id: 1, name: "aasha", age: 25, salary: 30000, active: true, departmentId: 11, skill :'php', hobbies:['cricket','badminton', 'football','tennis','basket ball'] },
    { id: 2, name: "Neha", age: 32, salary: 30000, active: false, departmentId: 4, skill :'PHP', hobbies:['cricket','BADMINTON', 'football','tennis','basket ball'] },
    { id: 3, name: "siyaa", age: 28, salary: 40000, active: true, departmentId: 11, skill :'node', hobbies:['basket ball'] },
    { id: 4, name: "Priya", age: 35, salary: 70000, active: true, departmentId: 32, skill :'react', hobbies:['cricket','tennis','basket ball'] },
    { id: 5, name: "aasha", age: 31, salary: 33000, active: false, departmentId: 26, skill :'Node and vue', hobbies:[] },
    { id: 6, name: "giya", age: 33, salary: 99000, active: true, departmentId: 34, skill :'Node and php', hobbies:['football','tennis','basket ball'] },
    { id: 7, name: "xiya", age: 38, salary: 7000, active: true, departmentId: 15, skill :'Node and react', hobbies:['cricket','Badminton'] },
  ],

   departments: [
    { id: 11, name: "IT" },
    { id: 4, name: "HR" },
    { id: 32, name: "Account" },
    { id: 3, name: "Testing" },
    { id: 4, name: "testing" },
    { id: 15, name: "test" },
     { id: 26, name: "Testing" },
    { id: 34, name: "testing" },
    { id:85, name: "HR" }
  ],

  projects: [
    { id: 101, name: "Website Revamp", departmentId: 11, budget: 200000 },
    { id: 102, name: "Payroll System", departmentId: 32, budget: 150000 },
    { id: 103, name: "Recruitment Portal", departmentId: 4, budget: 100000 }
  ]
};
    console.log(information)
//show user whose skill contains php
const new_user= information.users.filter((a)=>{
    if(a.skill.toLowerCase().includes('php'))
        return true
})
console.log(new_user)
//show user who has no hobbies
const new_user1= information.users.filter((a)=>{

    if(a.hobbies.length==0)
    return true
})
console.log(new_user1)
//[Hard]//show users who has hobby as badminton
//Note: if case check then use some. if case insensitive then use include
const usersWithBadminton = information.users.filter(user =>
  user.hobbies.some(
    hobby => hobby.toLowerCase() === "badminton"
  )
);

console.log(usersWithBadminton);
//Hard : show data group by uniqure salary
const resa= information.users.reduce((a,s)=>
   {
        if(a[s.salary]==undefined)
            a[s.salary]=[]
        a[s.salary].push(s)
        return a    
   },{})  ////////{} is must
   console.log("++++++++++++++++++++")
console.log(resa);
console.log("++++++++++++++++++++")
//return users who has node
    // const data = information.users.filter((s)=>{
    //      if(s.skill.toLowerCase().includes('node'))
    //         return true
    // },[])
    // console.log(data)
// Get an array of all user names
    // const new_arr= information.users.map((i)=>{    return i.name    })
    // console.log(new_arr)
// Get only active users
    //const new_arr1= information.users.filter((i)=>{        return i.active==true    })
///console.log(new_arr1)

//fetc only dept
// var new_arr= information.departments.reduce((a,i)=>{
//     console.log(a)    
//     a.push(i.name)
//     return a
// },[])

//Hard : unique dept with case
const res= information.departments.reduce((a,s)=>
   {
       if(a.length>0){
           const exist=a.some((n)=>{
                return n==s.name
           })
           if(!exist)
            a.push(s.name)
       }
       else{
         a.push(s.name)
       }
        return a
   },[])
//Hard fetch where dept count is 1 ***
const res111= information.departments.reduce((a,s)=>
   {
       a[s.name] = (a[s.name] | 0) +1
        return a
   },{})////use {}
let new_1=[]
for(let key in res111)
{
    const k= key;
    if(res111[k]==1)
        new_1.push({[key]: res111[key]})
}   
  console.log(new_arr)
//all department with name start with test
var new_arr= information.departments.filter((i)=>{   return i.name.toLowerCase().startsWith("test")
})

console.log(new_arr)

// Get users whose salary is greater than 40,000

// Find users who belong to the IT department

// Sort users by salary (ascending)

// Sort users by age (descending)

// Add a new property yearlySalary to each user

// Find the highest paid user

// Count how many users are inactive

// Group users by departmentId

// ✅ Based on departments

// Get an array of department names only

// Find department details for a given departmentId = 11

// Find departments that have no projects

// ✅ Based on projects

// Get all projects under the HR department

// Find the total project budget

// Find the project with the highest budget

// Group projects by departmentId

// ✅ JOIN-Type (Users + Departments + Projects)

// Get users with their department name

// Get departments along with their total project budget

// Get departments with users count and project count

// Find the highest paid active user in each department

// Find departments where total salary of users > total project budget

