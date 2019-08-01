const path = require('path');

const templatesDir = path.resolve(`${__dirname}/plop-templates`);
const rootDir = process.cwd();
const componentsDir = `${rootDir}/src/components/common`;

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create new component with all required inner structure',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name is?',
      },
      {
        type: 'confirm',
        name: 'stateless',
        default: true,
        message: 'Should it be stateless (functional style) (YES by default) ?',
      },
      {
        type: 'confirm',
        name: 'connected',
        default: false,
        message: 'Should it be connected to redux store (NO by default) ?',
      },
    ],
    actions: data => {
      const actions = [];

      actions.push(
        {
          type: 'add',
          path: `${componentsDir}/{{pascalCase name}}/index.js`,
          templateFile: `${templatesDir}/index.js`,
          data: { name: 'name' },
        },
        {
          type: 'add',
          path: `${componentsDir}/{{pascalCase name}}/{{pascalCase name}}.css`,
          templateFile: `${templatesDir}/style.css`,
        },
        {
          type: 'add',
          path: `${componentsDir}/{{pascalCase name}}/{{pascalCase name}}.jsx`,
          templateFile: `${templatesDir}${data.connected ? '/redux' : ''}/${
            data.stateless ? 'stateless' : 'stateful'
          }.hbs`,
          data: { name: 'name' },
        },
        {
          type: 'add',
          path: `${componentsDir}/{{pascalCase name}}/{{pascalCase name}}.stories.jsx`,
          templateFile: `${templatesDir}${data.connected ? '/redux' : ''}/story.hbs`,
          data: { type: 'type' },
        }
      );

      return actions;
    },
  });
};
