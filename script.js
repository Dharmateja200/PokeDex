
const DataPicker= document.getElementById("DataValue");
const button=document.getElementById("Button");
const image=document.getElementById("Pokemon");
const Name=document.getElementById("Name");
const type=document.getElementById("Type");
const Attack=document.getElementById("Attack")
const Experience=document.getElementById("Experience")

async function GetData(){
    try{
        let response= await fetch(`https://pokeapi.co/api/v2/pokemon/${DataPicker.value.toLowerCase()}`)
        let Data= await response.json();
        image.src=Data.sprites.front_default
        Name.innerText=`Name is:${Data.name.toUpperCase()}`;
        type.innerText=`Pokemon Type is : ${Data.types[0].type.name.toUpperCase()} Type `
        Attack.innerText=`Attack Level is:${Data.stats[0].base_stat}`
        Experience.innerText= `Experience is : ${Data.base_experience}`
        console.log(Data)
        DataPicker.value=""
    }
    catch (error){
        console.log(error)
    }
}