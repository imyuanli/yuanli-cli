#!/usr/bin/env node

import inquirer from 'inquirer';
import {handleDownload} from "./download.js";

const PROMPT_LIST = [
  {
    type: 'input',
    message: 'enter your project name',
    name: 'projectName',
    default: 'my-app',
  },
  {
    type: 'list',
    message: 'choose download template',
    name: 'templateName',
    choices: ['umi-att'],
  }
];

function entry() {
  inquirer.prompt(PROMPT_LIST).then(async (answer) => {
    await handleDownload(answer)
  });
}

entry();
