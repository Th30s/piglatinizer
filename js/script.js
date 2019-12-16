$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
    $("#button").click(function(){
        $(".output").text("");
        let sentence = $(".input").val();
        let words = sentence.split(" ");

        function firstCharacter(string){
        string = string.toLowerCase();
        let suffix = string.substring(0,1);
        return suffix + "ay";
        }

        function everthingElse (string){
        string = string.toLowerCase();
        let letters= string.length
        let suffix = string.substring(1,letters);
        return suffix;
        }

        function piglatinized (first, allElse){
        $(".output").text("everthingElse()" + "firstCharacter()")
        };

        console.log(firstCharacter('Turtle').toLowerCase());
        console.log(everthingElse('Turtle').toLowerCase());
    });
});

// $( "document" ).ready(function() {
//     $("button").click(function(){
//         $(".output").text("");
//         var sentence =$("input").val();
//         var words = sentence.split(' ');
//         var vowels = [ 'a', 'e', 'i', 'o', 'u' ];
//         words.forEach(function(word){
//             var firstLetter=word[0].toLowerCase();
//             if (vowels.includes(firstLetter)) {
//                 console.log(true);
//                 var vowelWord= word + "ay ";
//                 $('.output').append(vowelWord);
//             }else {
//                   console.log(false);
//                 var conWord= word.slice(1) + firstLetter + "ay ";
//                 $('.output').append(conWord);

//                                             }
//         });

//     });

// });df