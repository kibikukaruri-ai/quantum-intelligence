const fs = require("fs");

function logRecommendation(text){

fs.appendFileSync(
"./logs/recommendations.txt",
text + "\n\n"
);

}

module.exports = logRecommendation;