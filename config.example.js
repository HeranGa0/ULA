//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://Heran:St6007443@gettingstarted-qz8q3.mongodb.net/test?retryWrites=true&w=majority'//place the URI of your mongo database here.
  }, 
  openCage: {
    key: '004bf0ce00bb4f6bb9f9030620ca881d' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};
