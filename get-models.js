#!/usr/bin/env node

const o = require('openai');
const configuration = new o.Configuration({
    organization: process.env.OPENAI_ORG,
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new o.OpenAIApi(configuration);
openai.listEngines().then(response => {
    console.log('Fetched data:', response.data); // Handle resolved Promise
  })
  .catch(error => {
    console.error('Error:', error); // Handle rejected Promise
  })
  .finally(() => {
    console.log('Promise completed'); // Handle Promise completion (optional)
  });

openai.retrieveModel("text-davinci-003").then(response => {
    console.log('Fetched data:', response.data); // Handle resolved Promise
  })
  .catch(error => {
    console.error('Error:', error); // Handle rejected Promise
  })
  .finally(() => {
    console.log('Promise completed'); // Handle Promise completion (optional)
  });
