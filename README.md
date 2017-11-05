# Alexa skill development done right: Advanced setup

This repo is used as template for an advanced alexa skill. Advanced because it comes with a DynamoDB and S3 storage.
Also the skill's code get's bundled to speed up deployment by roughly 90%.

The details and motivations are explained in a 
[medium post](https://medium.com/@feedm3/alexa-skill-development-done-right-advanced-setup-4448d65e46ba).

This advanced setup is build on top of the basic setup which can be found 
[here](https://github.com/feedm3/learning-alexa-skills-basic-setup). 

## Prerequisites

- Node & NPM

## Initialize

This advanced setup is build on top of the basic setup which can be found 
[here](https://github.com/feedm3/learning-alexa-skills-basic-setup). 

- Install everything: `npm install`
- First time deployment: `npm run deploy:init`
- Incremental deploys: `npm run deploy`
- Watch skill logs in console: `npm run logs:tail`
- Connect project to amazon developer console: `npm run deploy-skill:init`
- Deploy skill infos to amazon developer console: `npm run deploy-skill`
