console.log("before prepare food");
function preparefood(callback){

    setTimeout(()=>{
        console.log("food is preparing");
        callback("food is ready")
    },10)
}

function preparetoast(callback){

    setTimeout(()=>{
        console.log("toast is preparing");
        callback("toast is ready")
    },40)
}
function preparecoffee(callback){

    setTimeout(()=>{
        console.log("coffe is preparing");
        callback("coffee is ready")
    },1)
}





preparefood((val)=>{
    console.log(val);
    preparetoast((val)=>{
        console.log(val);
        preparecoffee((val)=>{
            console.log(val);
        })
    })

})




console.log("after prepare food");