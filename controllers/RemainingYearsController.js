const remainingModel = require("./../models/RemainingYearsModel");

const RemainingYears = (req, res) => {
    const age = parseInt(req.params.age);
    const sex = parseInt(req.params.sex);
    const smoke = parseInt(req.params.smoke);
    const live = parseInt(req.params.live);
    const weight = parseInt(req.params.weight);
    const height = parseInt(req.params.height);

    let response = remainingModel(age,sex,smoke,live,weight,height);

    res.json(response);
}

module.exports = RemainingYears