const express = require("express");
const models = require("../models");

const router = express.Router();

router.get("/", (req, res) => {
    models.stellaris_question.getAll().then((returnAllQuestions) => {
        if(returnAllQuestions === null){
            res.render("error_page.ejs", { error: "Could not retrieve survey questions for stellaris ethnics survey."} );
        } else {
            res.render("stellaris_edit_delete_questions.ejs", { questions:returnAllQuestions, surveyinfo: {id: "Editor"} });
        }
    }).catch(e => {
        res.render("error_page.ejs", {error: "An unknown error occured."});
    })
})

router.post("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        res.status(400).send({ error: "Input ID is not a number"});
    }

    var filterMessage = filterInputs(req.body, false);
    if(filterMessage !== "") {
        res.status(400).send({ error: filterMassage})
    }

    models.stellaris_question.update(id,
                                    req.body.Question,
                                    req.body.Xenophile,
                                    req.body.Xenophobe,
                                    req.body.Egalitarian,
                                    req.body.Authoritarian,
                                    req.body.Materialist,
                                    req.body.Spiritualist,
                                    req.body.Militarist,
                                    res.body.Pacifist).then((updatedQuestion) => {
        if(updatedQuestion === undefined) {
            res.status(400).send({ error: "Cannot edit a question that does not exist"})
        } else {
            res.status(200).send({ message: "Question updated successfully", updatedQuestion : updatedQuestion});
        }
    }).catch(e => {
        console.log(e);
        res.render("error_page.ejs", { error: "An enknown error occured editing survey question."});
    });
});

router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        res.status(400).send("Input question ID is not a number");
    }

    models.stellaris_question.delete(id).then((numberOfRowsDestroyed) => {
        if (numberOfRowsDestroyed === 0) {
            res.status(400).send({ error: "Canot delte a question that does not exist."});
        } else {
            res.status(200).send({ message: "Question " + id + " deleted successfully.", id: id});
        }
    }).catch(e => {
        console.log(e);
        res.render("error_page.ejs", {error: "An unknown error occured deleting survey question."});
    });
});

function filterInputs(body, isNewQuestion) {
    if (body.Question === "" && isNewQuestion) { return "Question box blank";}

    if(isNaN(body.Egalitarian)) {
        return "Egalitarian box is not a number";
    } else if (body.Egalitarian === "" ){
        body.Egalitarian = 0;
    }

    if(isNaN(body.Authoritarian)) {
        return "Authoritarian box is not a number";
    } else if (body.Authoritarian === "" ){
        body.Authoritarian = 0;
    }

    if(isNaN(body.Materialist)) {
        return "Materialist box is not a number";
    } else if (body.Materialist === "" ){
        body.Materialist = 0;
    }

    if(isNaN(body.Spiritualist)) {
        return "Spiritualist box is not a number";
    } else if (body.Spiritualist === "" ){
        body.Spiritualist = 0;
    }

    if(isNaN(body.Militarist)) {
        return "Militarist box is not a number";
    } else if (body.Militarist === "" ){
        body.Militarist = 0;
    }

    if(isNaN(body.Pacifist)) {
        return "Pacifist box is not a number";
    } else if (body.Pacifist === "" ){
        body.Pacifist = 0;
    }

    if(isNaN(body.Xenophile)) {
        return "Xenophile box is not a number";
    } else if (body.Xenophile === "" ){
        body.Xenophile = 0;
    }

    if(isNaN(body.Xenophobe)) {
        return "Xenophobe box is not a number";
    } else if (body.Xenophobe === "" ){
        body.Xenophobe = 0;
    }

    return "";
}

module.exports = router;