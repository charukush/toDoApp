'use strict';
var AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient();

//Create User  
module.exports.createUser = async (event) => {
    var body = event.body;
    var parseBody = JSON.parse(body);
    var param = {
        TableName: "todo-user",
        Item : parseBody
    };
    var resp = await docClient.put(param).promise();
    /*var useList =[];
    useList.push(parseBody);
    console.log(`User added ${JSON.stringify(param)}`);*/

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'New user added!',
          
        },

      ),
    };
  
    
  };

// Check User Id
  module.exports.checkUser = async (event) => {
      var id = event.pathParameters.id;
      var param = {
          TableName: "todo-user",
          Key : {
              "id" : id
          }
      }
      var resp = await docClient.get(param).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          resp
            },
      ),
    };
  };