'use strict';

const englishUsOutput = {
    HELLO: 'Hello',
    HELLO_NAME: 'Hello {{ name }}',
    HELLO_SAVED_NAME: 'Hello {{ name }}. I now know your name. ',
    HELP: "You can try: 'alexa, open hello world' or 'alexa, tell hello world my name is Peter'",
    BYE: 'Bye.',
    UNHANDLED: "Sorry, I didn't get that. You can try: 'alexa, open hello world' or 'alexa, tell hello world my name is Peter'"
};

const englishUkOutput = {};

const germanOutput = {
    HELLO: 'Hallo',
    HELLO_NAME: 'Hallo {{ name }}',
    HELLO_SAVED_NAME: 'Hallo {{ name }}. Ich kennen nun deinen Namen. ',
    HELP: "Du kannst dem Skill zum Beispiel sagen: 'alexa, öffne hallo welt' oder 'alexa, sage hallo welt dass mein name Peter ist'",
    BYE: 'Tschüss.',
    UNHANDLED: "Das habe ich nicht verstanden. Du kannst dem Skill zum Beispiel sagen: 'alexa, öffne hallo welt' oder 'alexa, sage hallo welt dass mein name Peter ist'"
};

const speechOutput = {
    'en-US': {
        'translation': englishUsOutput
    },
    'en-GB': {
        // we use the us translation as default and only overwrite specific ones
        'translation': Object.assign({}, englishUsOutput, englishUkOutput)
    },
    'de-DE': {
        'translation': germanOutput
    }
};

module.exports = speechOutput;
