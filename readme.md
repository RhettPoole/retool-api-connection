## Overview

**Project Title**: Retool Web API

**Project Description**: The code in this folder will be an API that is used to feed data to a front end tool called Retool. The data will be stored for an AI model to access. The user will be able to ask the AI about the data that is being fed to it. In this scenario, this specific AI will be given data about RV's and how to diagnose the appliances in the RV. 

**Project Goals**: I will likely start with fridges, or furnaces. I would also like the AI to retrieve and give a "diagnostic form" for the user to use. I need to build an API, design the front-end UI, connect JSON or database.

## Instructions for Build and Use

Steps to build and/or run the software:
SAMPLE PLAN:
1. Initialize Node.js project and install Express.
Create a basic server with a test endpoint.
2. Define Data Structure & Sample Data
Decide what data you want to serve (e.g., RV appliances, diagnostics).
Create a simple in-memory data store (array or object) for initial testing.
3. Build API Endpoints
Create endpoints to:
Get all items (e.g., all appliances or diagnostics).
Get a single item by ID.
(Optional) Add, update, or delete items.
4. Test API Locally
Use browser or tools like Postman to test endpoints.
5. Connect Retool to API
Expose your API to Retool (locally or via a tunnel like ngrok).
In Retool, set up a resource to connect to your API.
Build a simple Retool app to display data from your API.
6. Persist Data (Optional for MVP)
Replace in-memory data with a database (e.g., SQLite, MongoDB, or JSON file).
7. Add Features (Iterative)
Add more endpoints or logic as needed (e.g., diagnostic forms, AI integration).
Add authentication if needed.
8. Documentation & Deployment
Update README with usage instructions.
Deploy API to a cloud provider (optional).

Instructions for using the software:

1. To run local server: node server.js
2.
3.

## Development Environment 

To recreate the development environment, you need the following software and/or libraries with the specified versions:

* Install Node
* Install Express
* Install Ngrok

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
* 

## Future Work

The following items I plan to fix, improve, and/or add to this project in the future:

* Implement ngrok's endpoint security using Oauth or other provided tools.
* [ ]
* [ ]
