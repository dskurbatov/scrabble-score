var scrabbleScore = function(word){
    word = word.toLowerCase();
    var one = /[aeioulnrst]+/;
    var two = /[dg]+/;
    var three = /[bcmp]+/;
    var four = /[fhvwy]+/;
    var five = /[k]+/;
    var eight = /[jx]+/;
    var ten = /[qz]+/;
    var arr = [[one, 1],[two, 2],[three, 3],[four, 4],[five, 5],[eight, 8],[ten, 10]];
    var letters = word.split("");
    var score = 0;
    for(var i = 0; i < letters.length; i++){
        var letter = letters[i];
        for(var j = 0; j < arr.length; j++){
            letter.match(arr[j][0]) ? score += arr[j][1] : score += 0;
        };
    };

    return score;
};



var output = function(word){
    var result = scrabbleScore(word);
    return "The word '" + word.charAt(0).toUpperCase() + word.slice(1) + "' has " + result + " points";
};