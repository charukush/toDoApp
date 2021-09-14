# Project set up steps:
 1. Install serverless
 2. Create project "sls create --template aws-nodejs --path toDoApp"
 3. create package.json using "npm init" commond. package.json will  have all the dependencies for the project
 4. Set up serverless offline to run project locally
 5. run command "npm install serverless-offline --save-dev"
 6. Add plugin to yml file " plugins:
                                - serverless-offline"
 7. command " sls offline"

 # Deploy project on git
  1. create a new repository in your git account
  2. follow the existing command.

  # Deploy project on AWS
   1. Go to amazon console - login
   2. Setup aws keys 
   3. sls deploy
                          