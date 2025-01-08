let btn = document.getElementById("button");
btn.addEventListener("click" , async ()=>{
    let facts = await getFacts();
    let p = document.getElementById("result");
    p.innerText = facts;
})

let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await axios.get(url);
        return  res.data.fact;
    }catch(err){
        console.log("Error : " , err);
         return "No fact Found"
    }
}