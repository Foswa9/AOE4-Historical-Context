const url = 'https://raw.githubusercontent.com/aoe4world/data/main/units/french.json'
async function getFrenchUnits(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    }
getFrenchUnits();
console.log('hello')

