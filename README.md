# Tailwind
Branch for experiments with tailwind.

## Working log
[tailwind with react-router docs](https://tailwindcss.com/docs/installation/framework-guides/react-router)
[react-router docs](https://reactrouter.com/home)
```
docker run -it --rm -p 3000:3000 -v ${PWD}:/app --name server node bash           
cd app
npx create-react-router@latest tailwind
cd tailwind
npm install
npm run dev
rm -rf node_modules
cp -r . /app
```

run app and use bash in container
``` 
docker-compose up
docker exec -it tailwind_container bash
```
https://storybook.js.org/recipes/tailwindcss#2-provide-tailwind-to-stories
``` 
  npm create storybook@latest 
  "storybook": "storybook dev -p 6006 --host 0.0.0.0 --no-open",
```

didn't work


```
npx degit chromaui/intro-storybook-react-template taskbox
yarn add tailwindcss @tailwindcss/vite

https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/
https://tailwindcss.com/docs/installation/using-vite
https://github.com/audunru/tailwind-storybook/tree/main



## Main references
- [Home](https://github.com/IDriuk/playground/)
- [Docs](https://github.com/IDriuk/playground/tree/docs)
- [Chat](https://github.com/IDriuk/playground/tree/chat)
- [Redux Express Postgres App](https://github.com/IDriuk/playground/tree/redux_express_postgres)
- [Redux Express Postgres App on Render](https://playground-pb7l.onrender.com/) for production hosting
- [Postgres with docker compose](https://github.com/IDriuk/playground/tree/postgres_dev)
- [Node with Postgres](https://github.com/IDriuk/playground/tree/node_pg)
- [Express.js with docker compose](https://github.com/IDriuk/playground/tree/express_dev)
- [Gh pages and storybook](https://github.com/IDriuk/playground/tree/gh_pages_storybook)
- [React router app with Docker for development](https://github.com/IDriuk/playground/tree/react_router_dev)


<p align="center">
  <a href="https://www.chromatic.com/">
    <img alt="Chromatic" src="https://avatars2.githubusercontent.com/u/24584319?s=200&v=4" width="60" />
  </a>
</p>

<h1 align="center">
  Chromatic's Intro to Storybook React template
</h1>

This template ships with the main React and Storybook configuration files you'll need to get up and running fast.

## 🚅 Quick start

1.  **Create the application.**

    Use [degit](https://github.com/Rich-Harris/degit) to get this template.

    ```shell
    # Clone the template
    npx degit chromaui/intro-storybook-react-template taskbox
    ```

1.  **Install the dependencies.**

    Navigate into your new site’s directory and install the necessary dependencies.

    ```shell
    # Navigate to the directory
    cd taskbox/

    # Install the dependencies
    yarn
    ```

1.  **Open the source code and start editing!**

    Open the `taskbox` directory in your code editor of choice and building your first component!

1.  **Browse your stories!**

    Run `yarn storybook` to see your component's stories at `http://localhost:6006`

## 🔎 What's inside?

A quick look at the top-level files and directories included with this template.

    .
    ├── .storybook
    ├── .yarn
    ├── node_modules
    ├── public
    ├── src
    ├── .eslintrc.cjs
    ├── .gitignore
    ├── .yarnrc.yml
    ├── index.html
    ├── LICENSE
    ├── package.json
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── yarn.lock
    ├── vite.config.js
    └── README.md

1.  **`.storybook`**: This directory contains Storybook's [configuration](https://storybook.js.org/docs/configure) files.

2.  **`.yarn`**: This directory contains the configuration files for Yarn including the cache and the global packages.

3.  **`node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages).

4.  **`public`**: This directory will contain the development and production build of the site.

5.  **`src`**: This directory will contain all of the code related to what you will see on your application.

6.  **`eslintrc.cjs`**: This file is the configuration file for [ESLint](https://eslint.org/).

7.  **`.gitignore`**: This file tells git which files it should not track or maintain during the development process of your project.

8.  **`.yarnrc.yml`**: This file contains the configuration for Yarn. It's used to define the project's settings, such as caching and other settings.

9.  **`index.html`**: This is the HTML page that is served when generating a development or production build.

10. **`LICENSE`**: The template is licensed under the MIT licence.

11. **`package.json`**: Standard manifest file for Node.js projects, which typically includes project specific metadata (such as the project's name, the author among other information). It's based on this file that npm will know which packages are necessary to the project.

12. **`tsconfig.app.json`**: This file contains the TypeScript compiler options for the project.

13. **`tsconfig.json`**: This file is the root TypeScript configuration file that specifies the root files and the compiler options required to compile the project.

14. **`tsconfig.json`**: This file is the root TypeScript configuration file that specifies the root files and the compiler options that could be extended by other configuration files in the project.

15. **`tsconfig.node.json`**: This file contains the TypeScript compiler options required to manage the Node.js environment in the project configuration files. Used to help distinguish between configurations for different parts of the project.

16. **`vite.config.js`**: This is the configuration file for [Vite](https://vitejs.dev/), a build tool that aims to provide a faster and leaner development experience for modern web projects.

17. **`yarn.lock`**: This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(Do not change it manually).**

18. **`README.md`**: A text file containing useful reference information about the project.

## Contribute

If you encounter an issue with the template, we encourage you to open an issue in this template's repository.

## Learning Storybook

1. Read our introductory tutorial at [Learn Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/).
2. Learn how to transform your component libraries into design systems in our [Design Systems for Developers](https://storybook.js.org/tutorials/design-systems-for-developers/) tutorial.
3. See our official documentation at [Storybook](https://storybook.js.org/).
