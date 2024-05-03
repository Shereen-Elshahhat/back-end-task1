//lec1//
// modules 

// 1-core module

//    const fs =require ("fs")
//    fs.writeFileSync("data.txt" , "shereen elshahhat")
//    console.log(fs.readFileSync("data.txt").toString())

//    fs.appendFileSync("data.txt","  ,  hamada omran")
//    console.log(fs.readFileSync("data.txt").toString())

//    const x=require("./allData.js")
//    console.log(x)
//    console.log(x.function(3,8))
  

//    const validator= require("validator")
//    console.log(validator.isEmail("shereen@gmail.com"))
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
//lec2//
 
// console.log(process.argv)

// const command1 = process.argv[2]

// if(command1==="add"){
//     console.log("you added an item")
// }else if(command1==="deleted"){
//     console.log("you are deleted an item")
// }else{
//     console.log("error")
// }




const yargs =require("yargs")


yargs.command({
    command: "add",
    describe:"add an item",
    builder:{
        fname:{
            describe:"this is first name description",
            demandOption: true,
            type:"string"
        },
        lname:{
            describe:"this is last name description",
            demandOption: true,
            type:"string"
        },
        age:{
            describe:"this is age description",
            demandOption: true,
            type:"string"
        },
        city:{
            describe:"this is city description",
            demandOption: true,
            type:"string"
        }
        
    },
    handler:()=>{
        console.log("you are already added an item")
    }
})

console.log(yargs.argv)


/////////////////

yargs.command({
    command: "delete",
    describe:"deldted an item",
    handler: ()=>{
        console.log("you are deleted an item")
    }

})
console.log(yargs.argv)