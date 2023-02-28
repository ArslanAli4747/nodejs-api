

const url = "https://jsonplaceholder.typicode.com/todos";

const get=()=>{

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((resp)=>{
      console.log(resp[0]);
      return fetch(url)
    })
    .then((response)=>response.json())
    .then((json)=>console.log(json[0]))

}


const post = ()=>{
    
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:"POST",
        body:JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        
        }),
        headers:{
            'Content-type':"application/json: charset=UTF-8",
        }
    })
    .then(response => response.json())
    .then((resp)=>{
      console.log(resp);
      return fetch('https://jsonplaceholder.typicode.com/posts',{
        method:"POST",
        body:JSON.stringify({
            name:"alpha",
            id:101
        }),
        headers:{
            "Content-type":"application/json; charset=UTF-8",
        }
      })
    })
    .then((response)=>response.json())
    .then((json)=>console.log(json))
}


get()
post()