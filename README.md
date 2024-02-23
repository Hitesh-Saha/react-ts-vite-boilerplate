# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# Getting Started

Getting started is a simple as cloning the repository

```
git clone https://github.com/Hitesh-Saha/react-ts-vite-boilerplate.git
```

Changing into the new directory

```
cd react-ts-vite-boilerplate
```

Removing the .git folder (and any additional files, folders or dependencies you may not need), If needed

```
rm -rf .git
```

Installing dependencies

```
npm install
```

## Run Development Server

Run the app

```
npm start
```

Run the app in vite specified default port

```
npm run dev
```

Congrats! You're ready to starting working on that new project!

## Build App

Run the following command to build the application for production deployment

```
npm run build
```

# Configurations

The following versions are specified for the application

```
{
  vite: "^5.0.8",
  typescript: "^5.2.2",
  tailwindcss: "^3.4.1",
  redux: "^5.0.1",
  react-redux: "^9.1.0",
  react-router-dom: "^6.22.0",
}
```

