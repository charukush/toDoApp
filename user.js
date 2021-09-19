'use strict';
var AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient();

//Create User  
module.exports.createUser = async (event) => {
  var body = event.body;
  var parseBody = JSON.parse(body);
  var param = {
    TableName: "todo-user",
    Item: parseBody
  };
  var resp = await docClient.put(param).promise();
  /*var useList =[];
  useList.push(parseBody);
  console.log(`User added ${JSON.stringify(param)}`);*/

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify(
      {
        message: 'New user added!',

      },

    ),
  };


};

// Get User by Id
module.exports.getUser = async (event) => {
  var id = event.pathParameters.id;
  var param = {
    TableName: "todo-user",
    Key: {
      "id": id
    }
  }
  var resp = await docClient.get(param).promise();
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify(
      {
        resp
      },
    ),
  };
};