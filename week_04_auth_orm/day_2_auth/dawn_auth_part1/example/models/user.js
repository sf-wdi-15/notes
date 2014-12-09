"use strict";

var bcrypt = require("bcrypt");
var salt = bcrypt.genSaltSync(10);

////module.exports = function(sequelize, DataTypes) {
//  var user = sequelize.define("user", {
//    email: DataTypes.STRING,
//    password_digest: DataTypes.STRING
//  }, {
//    classMethods: {
//      associate: function(models) {
//        // associations can be defined here
//      }
//    }
//  });
//
//  return user;
//};


module.exports = function (sequelize, DataTypes){
  var User = sequelize.define('user', {
    email: { 
      type: DataTypes.STRING, 
      unique: true, 
      validate: {
        len: [6, 30],
      }
    },
    password_digest: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  },

  {
    classMethods: {
      encryptPass: function(password) {
        var hash = bcrypt.hashSync(password, salt);
        return hash;
      }, 
      comparePass: function(email, dbpass) {
        // don't salt twice when you compare....watch out for this
        return bcrypt.compareSync(email, dbpass);  
      },
      createNewUser:function(email, password, err, success ) {
        if(password.length < 6) {
          err({message: "Password should be more than six characters"});
        }
        else{
          User.create({
            email: email,
            password_digest: User.encryptPass(password)
          }).error(function(error) {
            console.log(error);
            if(error.email){
              err({message: 'Your username should be at least 6 characters long', email: email});
            }
            else{
              err({message: 'An account with that username already exists', email: email});
            }
          }).success(function(user) {
            success({message: 'Account created, please log in now'});
          });
        }
      },
      authorize: function(email, password, err, success) {
        // find a user in the DB
        User.find({
          where: {
            username: username
          }
        })
        // when that's done, 
        .done(function(error,user){
          if(error){
            console.log(error);
            err({message: "Oops! Something went wrong"});
          }
          else if (user === null){
            err({message: "Username does not exist"});
          }
          else if ((User.comparePass(password, user.password_digest)) === true){
            success();
          }
          else {
            err({message: "Invalid password"});
          }
        });
      }  

    } // close classMethods
  } //close classMethods outer 

                             ); // close define user
                             return User;
}; // close User function

