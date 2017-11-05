# Alexa skill development done right: Advanced setup

This repo is used as template for an advanced alexa skill. Advanced because it comes with a DynamoDB and S3 storage.
Also the skill's code get's bundled to speed up deployment by roughly 90%.

The details and motivations are explained in a 
[medium post](https://medium.com/@feedm3/alexa-skill-development-done-right-advanced-setup-4448d65e46ba).

This advanced setup is build on top of the basic setup which can be found 
[here](https://github.com/feedm3/learning-alexa-skills-basic-setup). 

## Prerequisites

- Node & NPM

## Improvements

- DynamoDB as session storage
- S3 for file hosting
- webpack to minify deployment sources

## Run

- `npm install`: install everything
- `npm run deploy:init`: first time deployment
- `npm run deploy`: incremental deploys
- `npm run logs:tail`: watch skill logs in console
- `npm run deploy-skill:init`: connect project to amazon developer console
- `npm run deploy-skill`: deploy skill infos to amazon developer console
