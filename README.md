# Alexa skill development done right: Advanced setup

This repo is used as template for an advanced alexa skill. Compared to the [basic setup][basic-setup]
this repo also comes with a DynamoDB, an S3 storage and the code get's bundled to speed up deployment.

The details and motivations are explained in a 
[medium post][medium].

## Prerequisites

- Node & NPM

## Improvements

- DynamoDB as session storage
- S3 for file hosting
- webpack to minify deployment sources

## Run

All commands are described in detail in the [basic setup][basic-setup].

Here's just a short recap:

- `npm install`: install everything
- `npm run deploy:init`: first time deployment
- `npm run deploy`: incremental deploys
- `npm run logs:tail`: watch skill logs in console
- `npm run deploy-skill:init`: connect project to amazon developer console
- `npm run deploy-skill`: deploy skill infos to amazon developer console

[medium]: https://medium.com/@feedm3/alexa-skill-development-done-right-advanced-setup-b00bce268a95 
[basic-setup]: https://github.com/feedm3/learning-alexa-skills-basic-setup
