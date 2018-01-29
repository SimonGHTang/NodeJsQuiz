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

router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        res.status(400).send("Input question ID is not a number");
    }

    models.stellaris_question.delete(id).then((numberOfRowsDestroyed) => {
        if (numberOfRowsDestroyed === 0) {
            res.status(200).send({ error: "this question cannot be deleted because it does not exist."});
        } else {
            res.status(200).send({ message: "Question " + id + " deleted successfully.", id: id});
        }
    }).catch(e => {
        console.log(e);
        res.render("error_page.ejs", {error: "An unknown error occured deleting survey question."});
    });
});

module.exports = router;