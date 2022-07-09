
module.exports = {
    youtubeHandler : youtubeHandler,
    linkedinHandler,
    instagramHandler,
    facebookHandler,
    likeeHandler,
    pintrestHandler
};

function youtubeHandler(req, res){
    res.json({msg:"youtube"})
}
function linkedinHandler(req, res){
    res.json({msg:"linkedin"})
}


function instagramHandler(req, res){
    res.json({msg:"instagram"})
}


function facebookHandler(req, res){
    res.json({msg:"facebook"})
}


function likeeHandler(req, res){
    res.json({msg:"likee"})
}

function pintrestHandler(req, res){
    res.json({msg:"pintrest"})
}










