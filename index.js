// Code your solutions in this file
let messages=["Guadalupe", "Ollie", "Aki"];
let response=[];
function writeCards(){
    for (let mes=0; mes < messages.length; mes++){
        let thankYou = "Thank you"
        let fotThe = "for the wonderful surprise gift!"
        response[mes]= (`${thankYou}, ${messages[mes]}, ${fotThe}`)
        debugger;
    }
    return response
}
function countDown(){
    let count=10;
    while(count>=0){
        console.log (count--);

    }
    
}