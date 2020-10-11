# cypress-googleSearch-bdd
Keyword search in google using Cypress and Cucumber

## Setup
`npm install`

## Test location
Tests are located in : `cypress/integration`


## How to run tests?
Two possible options:

  **GUI**

  - run `npm run cypress:open`
  - Click on `search.feature` file from GUI


  **Command line**

  `npm run cypress:run`
  
 
## Videos
The video recorded during the test run can be found in `cypress/videos`. You can also download the video.


### Continuous integration 

Cypress should run on all CI providers. 

You need to add `npm run cypress:run` in your CI provider configuration file.

### How to integrate tests in Deployment process?

In product deployment process, cypress tests should be executed after unit & integration tests.
