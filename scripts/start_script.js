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

    questionList.question002 = {
        question: "A superior military fleet ensures the success of humanity's survival in space.",
        xenophobe: 0,
        xenophile: 0,
        egalitarian: 0,
        authoritarian: 0,
        materialist: 0,
        spiritualist: 0,
        militarist: 20,
        pacifist: -20,
    }

    questionList.question003 = {
        question: "Democratic leadership is inferior than that of dictatorship.",
        xenophobe: 0,
        xenophile: 0,
        egalitarian: -80,
        authoritarian: 80,
        materialist: 0,
        spiritualist: 0,
        militarist: 0,
        pacifist: 0,
    }

    questionList.question004 = {
        question: "The sovereign superiority of the state supercedes the happiness of its citizens.",
        xenophobe: 0,
        xenophile: 0,
        egalitarian: -10,
        authoritarian: 20,
        materialist: 0,
        spiritualist: 0,
        militarist: 20,
        pacifist: -10,
    }

    questionList.question005 = {
        question: "Hostile alien species best serve humanity through slavery.",
        xenophobe: 30,
        xenophile: -30,
        egalitarian: -30,
        authoritarian: 30,
        materialist: 0,
        spiritualist: 0,
        militarist: 5,
        pacifist: -5,
    }

    questionList.question006 = {
        question: "It is the responsibility of my mankind's military to wage war and defeat conquering and enslaving empires in order to protect weaker civilizations.",
        xenophobe: -25,
        xenophile: 25,
        egalitarian: 0,
        authoritarian: 0,
        materialist: 0,
        spiritualist: 0,
        militarist: 25,
        pacifist: -25,
    }

    questionList.question007 = {
        question: "Humanity must achieve peace through order, dominance and the sacrifice of its own citizen's freedom.",
        xenophobe: 0,
        xenophile: 0,
        egalitarian: -30,
        authoritarian: 40,
        materialist: 0,
        spiritualist: 0,
        militarist: 0,
        pacifist: 20,
    }

    questionList.question008 = {
        question: "War must be brought to end through least amount of bloodshed as possible.",
        xenophobe: 0,
        xenophile: 0,
        egalitarian: 0,
        authoritarian: 0,
        materialist: 0,
        spiritualist: 0,
        militarist: -20,
        pacifist: 20,
    }

    questionList.question009 = {
        question: "There exists in all people, a sentimental intuition, a moral conscious, a spiritual soul.",
        xenophobe: 0,
        xenophile: 0,
        egalitarian: 0,
        authoritarian: 0,
        materialist: -5,
        spiritualist: 20,
        militarist: 0,
        pacifist: 0,
    }

    questionList.question010 = {
        question: "The universe is vast and beautiful, surely there is some form of divine higher being who crafted and molded the grace of the cosmos.",
        xenophobe: 0,
        xenophile: 0,
        egalitarian: 0,
        authoritarian: 0,
        materialist: -5,
        spiritualist: 20,
        militarist: 0,
        pacifist: 0,
    }
    questionList.question011 = {
        question: "Diplomacy and cooperation is the most ideal way to building a bright future for all civilizations.",
        xenophobe: -60,
        xenophile: 60,
        egalitarian: 30,
        authoritarian: -30,
        materialist: 0,
        spiritualist: 0,
        militarist: -5,
        pacifist: 5,
    }

    questionList.question012 = {
        question: "We must avoid contact with unknown alien civilizations or we risk endangering humanity's safety, freedom and survival.",
        xenophobe: 25,
        xenophile: -25,
        egalitarian: 0,
        authoritarian: 0,
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