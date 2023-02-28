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

preparefood().then(res=>{
    console.log(res);
    return preparetoast()
}).then(res=>{
    console.log(res);
    return preparecoffee()
}).then(res=>{
    console.log(res);
}).catch(e=>{
    console.log(e);
})

// res.then((e)=>{
//     console.log(e);
// })

// res2.then((e)=>{
//     console.log(e);
// })

// res3.then((e)=>{
//     console.log(e);
// })
// res.then(e=>{
//     console.log(e);
//     res2.then(e2=>{
//         console.log(e2);
//         res3.then(e3=>{
//             console.log(e3);
//         })
//     })
// })



console.log("after prepare food");