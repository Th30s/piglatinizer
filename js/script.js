$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
    let word = $(".input").val();

    function firstCharacter(string){
    let suffix = string.substring(0,1);
    return suffix + "ay";
    }

    function everthingElse (string){
    let letters= string.length
    let suffix = string.substring(1,letters);
    return suffix;
    }






});
console.log("what");