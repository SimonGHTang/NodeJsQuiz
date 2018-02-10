const express = require("express");
const models = require("../models");

const router = express.Router();

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    models.stellaris_question.get(id).then((returnQuestion) => {
        if(returnQuestion === null || returnQuestion === undefined) {
            res.render("error_page.ejs", {error: "Survey question not found for Stellaris Ethnics Survey"} );
        } else {
            models.stellaris_question.countRows().then((returnRowCount) => {
                rowCount = returnRowCount;
                res.render("stellaris_question.ejs", { result: returnQuestion, surveyInfo: {id: id, rowCount: returnRowCount} });
            });
        }
    }).catch(e => {
        res.render("error_page.ejs", {error: "An unknown error occured."});
    });

});

router.post('/:id', (req, res ) => {
    const id = parseInt(req.params.id);
    var message;

    models.stellaris_answer.get(id).then((returnAnswer) => {

        if(returnAnswer === null || returnAnswer === undefined) {
            models.stellaris_answer.insert(req.body.question_id, req.body.answer).catch (e => {
                console.log(e);
                res.render("error_page.ejs", { error: "An unknown error occured inserting survey answer."});
            });
        } else {
            models.stellaris_answer.update(req.body.question_id, req.body.answer).catch(e => {
                console.log(e);
                res.render("error_page.ejs", {error: "An unknown error occured with updating survey answer."});
            });
        }

        models.stellaris_question.listIds().then((idList) => {
            res.status(200).send({ id: id, message:message, idList: idList});
        });
    }).catch( e => {
        console.log(e);
        res.render("error_page.ejs", {error: "An unknown error occured in answer survey question."});
    });
});

module.exports = router;