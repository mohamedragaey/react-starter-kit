### Demo
You can find demo here [Demo](https://mohamedragaey.github.io/boilerplate/).
### Installation
* First clone the boilerplate into your machine 

`git clone https://github.com/mohamedragaey/boilerplate.git   `

* Then navigate to the downloaded boilerplate

`cd boilerplate`
* Then open a terminal and install required packages using `yarn` or `npm`

* If `yarn` run
 `yarn` 
* If `npm` run `npm install`

### Usage

To start the development server run `yarn start` or run `npm run start`.

It will open a new tab in the browser if this didn't happen navigate to this address 
[http://localhost:8080/](http://localhost:8080/)

### Boilerplate Structure
```text
|--dist/
|-----/css/
|--------/app.css
|--------/app-rtl.css
|-----/favicon/
|-----/fonts/
|-----/images/
|-----/js/
|--------/main.js

|--src/
|-----/favicon/
|-----/fonts/
|-----/images/
|-----/js/
|--------/bootstrap-sass.js
|--------/script.js
|--------/partials/
|-----/scss/
|---------/app.scss
|---------/app-rtl.scss
|---------/core/

|--.babelrc
|--.gitignore
|--_config.yml
|--index.html
|--package.json
|--postcss.config.js
|--README.md
|--webpack.common.js
|--webpack.dev.js
|--webpack.prod.js
|--yarn.lock
```
### Explain Boilerplate Structure
* `dist` folder is generated during the build process and it is removed every time you have a new build which means you won't have files that you don't need.
* `src` folder is the folder which contain your development assets from scss, js, images, fonts and favicon. 
* `webpack.common.js webpack.dev.js webpack.prod.js` Your webpack configuration are written in these three files.
* All your development plugins and loaders that you wish to use you need to write it in `webpack.dev.js`
* All your production plugins and loaders that you wish to use you need to write it in `webpack.prod.js`
* `.babelrc` configuration file for babel-loader to compile ES2015 so that browser can understand.
* `postcss.config.js` configuration file for postcss-loader. 

if you need to know more about how to configure your own webpack build process check this 
[docs](https://webpack.js.org/guides/).
### Plugins used in this Boilerplate
If you need to know more about what each plugin do you can go to the links associated with each plugin.

* [webpack-rtl-plugin](https://www.npmjs.com/package/webpack-rtl-plugin)

* [copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin)

* [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)

* [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin)

* [uglifyjs-webpack-plugin](https://www.npmjs.com/package/uglifyjs-webpack-plugin)

* [webpack-visualizer-plugin](https://www.npmjs.com/package/webpack-visualizer-plugin)

* [webpack-dashboard-plugin](https://www.npmjs.com/package/webpack-dashboard)

 
### loaders used in this Boilerplate
If you need to know more about what each loader do you can go to the links associated with each loader.

* [standard-loader](https://www.npmjs.com/package/standard-loader)

* [babel-loader](https://github.com/babel/babel-loader)

* [style-loader](https://www.npmjs.com/package/style-loader)

* [css-loader](https://www.npmjs.com/package/css-loader)

* [postcss-loader](https://www.npmjs.com/package/postcss-loader)

* [sass-loader](https://www.npmjs.com/package/sass-loader)

* [file-loader](https://www.npmjs.com/package/file-loader)

* [image-webpack-loader](https://www.npmjs.com/package/image-webpack-loader)
