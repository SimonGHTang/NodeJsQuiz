
module.exports = function ( sequelize, Sequelize) {
    const stellarisQuestion = sequelize.define('stellaris_question', {
        id: {
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            field: 'stellarisQuestions_id'
        },
        question: Sequelize.STRING,
        egalitarian: Sequelize.INTEGER,
        authoritarian: Sequelize.INTEGER,
        xenophile: Sequelize.INTEGER,
        xenophobe: Sequelize.INTEGER,
        materialist: Sequelize.INTEGER,
        spiritualist: Sequelize.INTEGER,
        militarist: Sequelize.INTEGER,
        pacifist: Sequelize.INTEGER,
    });

    stellarisQuestion.insert = function (question,
                xenophobe,
                xenophile,
                egalitarian,
                authoritarian,
                materialist,
                spiritualist,
                militarist,
                pacifist){
        const surveyQuestion = {
            question: question,
            xenophobe: xenophobe,
            xenophile: xenophile,
            egalitarian: egalitarian,
            authoritarian:authoritarian,
            materialist: materialist,
            spiritualist: spiritualist,
            militarist: militarist,
            pacifist: pacifist
        }

        return this.create(surveyQuestion);
    };

    stellarisQuestion.delete = function(id) {
        return stellarisQuestion.destroy({
            where: {
                id: id
            }
        })
    }

    stellarisQuestion.countRows = async function (){
        return stellarisQuestion.count();
    }

    stellarisQuestion.getAll = async function () {
        return stellarisQuestion.findAll();
    }

    stellarisQuestion.get = async function(id) {
        return await this.findById(id);
    };

    return stellarisQuestion;
}