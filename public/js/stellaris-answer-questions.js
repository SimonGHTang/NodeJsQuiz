$(document).ready(function() {
    $("input.btn-option").on("click", function (e) {
        var id = event.target.id.split("-")[1];
        var surveyOption = 0;

        switch(event.target.value) {
            case "Strongly Agree":
                surveyOption = 2;
                break;
            case "Agree":
                surveyOption = 1;
                break;
            case "Neutral/Unsure":
                surveyOption = -0;
                break;
            case "Disagree":
                surveyOption = -1;
                break;
            case "Strongly Disagree":
                surveyOption = -2;
                break;
            default:
                surveyOption = 0;
        }

        var payload = { question_id: id, answer: surveyOption}

        $.ajax({
            type: "POST",
            url: "/StellarisSurvey/" + id,
            data: payload,
            success: function(res){
                window.location.href = '../StellarisSurvey/' + getNextQuestionId(res);
            }
        });
        e.preventDefault();
    });
});

function getNextQuestionId(res) {
    var index = 0;

    for (var i = 0; i < res.idList.length; i++) {
        if( res.id == res.idList[i].stellarisQuestions_id ) {
            index = i;
            break;
        }
    }

    if((index + 2) == res.idList.length) {
        return -1;
    } else {
        return parseInt( index + 2);
    }
}