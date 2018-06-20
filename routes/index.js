var express = require('express');
var router = express.Router();
var User = require("../model/user")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Save user
router.post('/saveUser', function(req, res) {
  if(req && !req.body.firstName){
    return res.status(403).json({msg : "Please provide proper input"})
  }
  var userObj = new User(req.body);

  userObj.save(function(err,data){
    if(err){
      res.status(403).json({msg : "Something went wrong", err : err})
    }else{
      res.status(200).json({msg : "User record saved successfully"})
    }
  })
});

//Get Users List
router.get('/getUserList', function(req, res) {
  User.find({},function(err,results){
    if(err){
      res.status(403).json({msg : "Something went wrong", err : err})
    }else{
      res.status(200).json({msg : "User records fetched successfully",data : results})
    }
  })
});


module.exports = router;
