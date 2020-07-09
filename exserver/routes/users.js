var express = require('express');
var router = express.Router();
var mysql = require('../config/database')();

var connection = mysql.init();
mysql.test_open(connection);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup',function(req,res){
  var user = req.body.userInfo;
  
  if(user != undefined){
    console.log(user);
    
    var sql = 'INSERT INTO userinfo(id,pw,name) VALUES(?,?,?)';
    var params = [user.id,user.pw,user.name];

    connection.query(sql,params,function(err,rows,fields){
        if(err){
            console.log(err);
        }
        else{
            console.log("insert ok");
            res.send("success");
        }
    });  
  }
});

router.post('/login',function(req,res){
  var user = req.body.userInfo;
  console.log(user);

  if(user != undefined){
    console.log(user.name + " want login!");
    var sql = "SELECT * FROM userinfo WHERE id = ? && pw = ?";

    connection.query(sql,[user.id,user.pw],function(err,rows){
        if(err){
            console.log(err);
        }
        else{
            console.log(rows);
            if(rows.length > 0){
              console.log(user.id + " can login!");
              res.send("success");
            }
            else{
              console.log(user.id + " doens't exist!");
              res.send("fail result empty");
            }
        }
    });
  };
});



module.exports = router;
