const models = require("../models");

module.exports.startScript = function() {

    var questionList = { };

    questionList.question001 = {
        question: "Granting full citizenship to any sapient alien, regardless of their biology and culture is beneficial to your civilization.",
        xenophobe: -80,
        xenophile: 60,
        egalitarian: 40,
        authoritarian: -10,
        materialist: 0,
        spiritualist: 0,
        militarist: 0,
        pacifist: 0,
    }

    for (var key in questionList) {
        var question = questionList [key]
        models.stellaris_question.create(question).then(result => {
            console.log("Default question added.");
        })
    }
}