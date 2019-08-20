let engArray= ['Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
let spanArray=['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
// function to translate english to spanish
function engToSpan()
{
    for(index=0;index< engArray.length; index++){
        console.log(`The Spanish word for ${engArray[index]}- is ${spanArray[index]}.`);
    }
}
// function to translate spanish to English
function spanToEng()
{
    for(index=0;index<spanArray.length; index++){
        console.log(`The English word for ${spanArray[index]} is ${engArray[index]}.`);
    }
}
