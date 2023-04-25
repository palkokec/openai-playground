#!/usr/bin/env node

const o = require("openai");
const configuration = new o.Configuration({
  organization: process.env.OPENAI_ORG,
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new o.OpenAIApi(configuration);
const args = process.argv;
const prompt = args[args.length - 1];

openai
  .createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 1024,
    n: 3
  })
  .then((response) => {
    //console.log("Fetched data:", response.data); // Handle resolved Promise
    for (let index = 0; index < response.data.choices.length; index++) {
        const element = response.data.choices[index];
        console.log ("--------------------------------------------------")
        console.log (element.text)
    }
  })
  .catch((error) => {
    console.error("Error:", JSON.stringify(error)); // Handle rejected Promise
  })
//   .finally(() => {
//     console.log("Promise completed"); // Handle Promise completion (optional)
//   });
