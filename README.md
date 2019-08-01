# What's inside

- [React 16](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Webpack 4](https://webpack.js.org/)
- [PostCSS](https://postcss.org/)
- [Storybook 5](https://storybook.js.org/)
- [ESlint](https://eslint.org/) & [Stylelint](https://stylelint.io/) (each with 2 configs - dev & prod)
- [Husky](https://github.com/typicode/husky) + [lint-staged](https://github.com/okonet/lint-staged) (pre-commit hook for code formatting ([russian language article](http://blog.csssr.ru/2018/12/05/lint-your-css)))
- [Prettier](https://prettier.io/)
- [Plop](https://plopjs.com/) (to generate new components from templates)
- Keyboard users support with [Focus Ring](https://www.youtube.com/watch?v=ilj2P5-5CjI)
- Some default components (a11y ready)

# CLI scripts

- `start` - starting webpack-dev-server on 3000 port
- `build` - making production build and put it in `dist` folder
- `story` - starting storybook on 9000 port
- `make` - generate new file from template
- `lint` - run both eslint and stylelint with dev configs
- `format` - run both eslint and stylelint with prod configs and `--fix` option
