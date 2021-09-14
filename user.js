'use strict';
var AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient();
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