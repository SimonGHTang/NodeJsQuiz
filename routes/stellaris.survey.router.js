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
                res.render("stellaris_question.ejs", { result: returnQuestion, surveyInfo: {id: id, rowCount:returnRowCount} });
            });
        }
    }).catch(e => {
        res.render("error_page.ejs", {error: "An unknown error occured."});
    });

});

module.exports = router;