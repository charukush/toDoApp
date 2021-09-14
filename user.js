'use strict';

module.exports.createUser = async (event) => {
    var body = event.body;
    var parseBody = JSON.parse(body);
    var useList =[];
    useList.push(parseBody);
    console.log(`User List ${JSON.stringify(useList)}`);

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'New user!',
          
        },

      ),
    };
  
    
  };