import inquirer from 'inquirer';
interface IPromptOption {
    projectName: string;
    templateName: string;
}

const PROMPT_LIST: any = [
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
        choices: ['umi-att','react-artt'],
    },
    {
        type: 'list',
        message: 'choose download source',
        name: 'source',
        choices: ['github','gitee'],
    },
];

function entry() {
    inquirer.prompt<IPromptOption>(PROMPT_LIST).then(async (answer) => {
        console.log(answer);
    });
}

entry();