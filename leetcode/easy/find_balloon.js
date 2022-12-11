text = "ballon"
// // //// ////
var maxNumberOfBalloons = function(text) {
    word = "balloon";
    tMap = {};
    wMap = {};
    result = [];
    for(i = 0; i < text.length; i++){
        if(tMap[text[i]]) tMap[text[i]]++;
        else tMap[text[i]] = 1; 
    }
    for(j = 0; j < word.length; j++){
        if(wMap[word[j]]) wMap[word[j]]++;
        else wMap[word[j]] = 1; 
    }
    console.log(tMap);
    console.log(wMap);

    for(k in wMap){
        if(tMap[k]){
            result.push(Math.floor(tMap[k]/wMap[k]));
        } else return 0
    }
    return Math.min(...result)
};

console.log(maxNumberOfBalloons(text));