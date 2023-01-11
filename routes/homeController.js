

exports.accueil = (req, res)=>{
    res.render('accueil');
};
exports.cartes = (req, res)=>{
    res.render('persCree');
};
exports.creation = (req, res)=>{
    res.render('creation');
};
exports.defaut = (req, res)=>{
    res.render('persDefaut');
};
exports.rapport = (req, res)=>{
    res.render('rapport');
};