---
sidebar_position: 6
---

DAOstar Tech Infrastructure

Documentation
=============

Daostar.org website
-------------------

Daostar.org website is deployed on Netlify:
https://github.com/metagov/daostar/tree/main/daostar-website

Metagov Organization Account

Members:

-   ipatka@gmail.com

-   ylkk925@gmail.com

-   rashmiabbigeri@gmail.com

-   joshua.z.tan@gmail.com

### Build and Deployment Instructions

Navigate to daostar-website folder and run the below commands

npm install

npm run build

npm run start

The environment variable for this has been configured with Netlify deployment

DAOStar API
-----------

DAOStar API is deployed with a Digital Ocean Droplet

https://github.com/metagov/daostar-api

Metagov-prototype Project

Members:

-   Joshua Tan

-   Crazy Yuan

-   Isaac Patka

-   Luke 

-   Rashmi V Abbigeri

### Build and Deployment Instructions

Local:

pip install -r requirements.txt\
python3 debug.py

DAOStar API Services Backend
----------------------------

DAOStar API Services Backend
https://github.com/metagov/daostar/tree/main/Implementations/API

AWS Account ID: 836240692170

Members with IAM Access:

-   Isaac Patka

-   Luke

-   Rashmi

-   Tom Fisher

-   Crazy Yuan

-   Tucker McLachlan

### Build and Deployment Instructions

Create your access key with CLI use case\
Example link: [https://us-east-1.console.aws.amazon.com/iamv2/home#/users/details/rashmi@daostar.org?section=security_credentials

](https://us-east-1.console.aws.amazon.com/iamv2/home#/users/details/rashmi@daostar.org?section=security_credentials)Open Terminal and navigate to .aws/credentails file\
And update the credentials

Next, navigate to DAOStar/daostar/Implementations/API\
Run the below commands

npm run install

npm run build

Type in the stage name prod

npm run deploy

Navigate to CloudFormation and View Stacks, you should see the status of prod-rest-api-Mystack

![](https://lh7-us.googleusercontent.com/173KkFJFCiSMAgKtH3ev-JuBn7bQf21PpoI1-uNGtAc7loTxY64-USaaiW4AFF7LeaXHJfka8znQlqLi0njzOa82YlOvkU1fEaARdL5RrXZVlD3WUvJump8RfTu2m5AXoZaknTaHNp1Rb4YgUEgqdsQ)

DAOStar Subgraph Indexer
------------------------

DAOStar Subgraph Indexer deployed on The Graph

https://github.com/metagov/daostar/tree/main/Implementations/Subgraph/daostar

### Build and Deployment Instructions

Get [Auth_Token] from your TheGraph Dashboard\
Deployment Access Auth Token:\
graph auth --product hosted service  [Auth_Token]

Run npm install

Refer to the scripts  in package.json file and run necessary commands

Example:

Deploy to optimism-goerli

npm run build:optimism-goerli

npm run deploy:optimism-goerli

DAOStar API Swagger 
------------------------

DAOStar API Swagger
https://github.com/metagov/daostar/tree/main/api

### Build and Deployment Instructions

Coming soon

### Reference documentation:

[DAOstar Backend Service](https://docs.google.com/document/d/1u0nFI3oQuZN9lzbCDsziFj3-ElkkGtBJQRkIarLtvz8/edit)
