let par1=document.querySelector("#p1");
let par2=document.querySelector("#p2");
let but=document.querySelector("#but");

let resp="fetch data not found";
const url="https://official-joke-api.appspot.com/random_joke";

async function fetchdata() {
    // const res=await fetch()
    const res= await fetch(url);
    const data = await res.json();
    console.log(data.setup);
    par1.innerText= await data.setup;
    par2.innerText= await data.punchline;
    
    // resp=(data.setup)
}
but.onclick=()=>{
    
    fetchdata()
    
    // par1.innerText=resp;
    

    // console.log("hellá8xxo world");
    
    // console.log();
}

console.log("hellá8xxo ↕world");


