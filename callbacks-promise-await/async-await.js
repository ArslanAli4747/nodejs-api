console.log("before prepare food");
function preparefood(){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("food is preparing");
            resolve("food is ready")
        },10)
    })
   return p
}

function preparetoast(){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("toast is preparing");
            resolve("toast is ready")
        },40)
    })
    return p
  
}
function preparecoffee(){
    let p =new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("coffe is preparing");
            resolve("coffee is ready")
        },1)
    })
return p
}

async function  start(){
    let res = await preparefood()
    console.log(res);
    res = await preparetoast()
    console.log(res);
    res = await preparecoffee()
    console.log(res);
}
start()

console.log("after prepare food");