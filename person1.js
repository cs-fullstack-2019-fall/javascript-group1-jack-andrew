let engArray= ['Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
let spanArray=['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

function engToSpan()
{
    for(index=0;index< engArray.length; index++){
        console.log(`${engArray[index]}- ${spanArray[index]}`)
    }
}

function spanToEng()
{
    for(index=0;index<spanArray.length; index++){
        console.log(`${spanArray[index]}- ${engArray[index]}`)
    }
}
