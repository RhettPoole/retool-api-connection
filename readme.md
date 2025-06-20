## Overview

**Project Title**: Retool Web API

**Project Description**: The code in this folder will be an API that is used to feed data to a front end tool called Retool. The data will be stored for an AI model to access. The user will be able to ask the AI about the data that is being fed to it. In this scenario, this specific AI will be given data about RV's and how to diagnose the appliances in the RV. 

**Project Goals**: I will likely start with fridges, or furnaces. I would also like the AI to retrieve and give a "diagnostic form" for the user to use. I need to build an API, design the front-end UI, connect JSON or database.

(New project goals given the functionality of Retool's AI model, and reduced scope due to time constraints)
Connect Retool's front end UI to Node/Express backend using Ngrok. All the user to interact with the JSON data via multiple pages or using the search bar.

## Instructions for Build and Use

Steps to build and/or run the software:
SAMPLE PLAN:
1. Initialize Node.js project and install Express.
2. Define Data Structure & Sample Data
3. Build API Endpoints
4. Test API Locally
5. Connect Retool to API
6. Integrate Endpoint functionality in Retool's front end
7. Test/Doc/Deploy

Instructions for using the software:

1. To run local server: node server.js
2. To run ngrok tunnel: ngrok http (port)
3. Update retool's API links with the tunnel link given by ngrok.
4. Interact with Tables and pages in Retool.
5. When done, close server and ngrok tunnel.

## Development Environment 

To recreate the development environment, you need the following software and/or libraries with the specified versions:

* Install Node
* Install Express
* Install Ngrok
* Create Retool account (free)

## Useful Websites to Learn More

I found these websites useful in developing this software:

* https://docs.retool.com/docs/apis
* https://docs.retool.com/apps/quickstart
* https://expressjs.com/en/starter/hello-world.html
* https://www.geeksforgeeks.org/node-js/how-to-make-http-requests-in-node-js/ 
* https://ngrok.com/docs/api/ 
* https://ngrok.com/docs
* https://docs.retool.com/apps/reference/components/ 
* https://docs.retool.com/apps/guides/interaction-navigation/event-handlers
* https://www.youtube.com/watch?v=G7FwV9H6Mnk&list=PLqWdQFDVLADl6vk6LxlCqEYApSMMS_Vlp&index=26  
* https://www.youtube.com/watch?v=1F6jarKVEx8
* https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_promises_api 
* https://codefinity.com/courses/v2/8c50b100-1d6b-4830-a9a4-5fd966c78e38/8dd3ce8e-90ea-4d18-8e8e-ef790f01f571/0f4d1564-7bed-45ee-a316-ca6a75912765?utm_source=google&utm_medium=cpc&utm_campaign=21144377223&utm_content=&utm_term=&dki=&gad_source=5&gad_campaignid=21151281995&gclid=EAIaIQobChMIzciDi_L-jQMV0g9ECB2y1QteEAAYASAAEgLiSPD_BwE 
* https://docs.deno.com/api/node/fs/promises/#:~:text=The%20fs%2Fpromises%20API%20provides,off%20the%20event%20loop%20thread. 
* https://docs.retool.com/apps/guides/forms-inputs/json-schema-form 

## Future Work

The following items I plan to fix, improve, and/or add to this project in the future:

* Implement ngrok's endpoint security using Oauth or other provided tools.
* Include POST and DELETE functionality in front end.
* Connect database via MySQL instead of JSON file
* Include functionality to view customers and who the appliances are tied to via the customer's table.