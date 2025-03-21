# VK 45.01

<div align="center">
    <a href="https://github.com/QubitPi/VK-45.01/actions/workflows/ci-cd.yaml"><img src="https://img.shields.io/github/actions/workflow/status/QubitPi/VK-45.01/ci-cd.yaml?branch=master&style=for-the-badge&logo=github&logoColor=white&label=CI/CD" alt="CI/CD"/></a>
    <a href="https://paion-data.sentry.io/issues/?project=4508701862199296"><img src="https://img.shields.io/badge/Application%20Monitoring-362D59.svg?style=for-the-badge&logo=sentry&logoColor=white" alt="sentry.io"/></a>
    <img src="https://img.shields.io/badge/NODE-22-339933?logo=Node.js&logoColor=white&labelColor=66cc33&style=for-the-badge" alt="Node 18"/>
    <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge" alt="TypeScript"/>
    <img src="https://img.shields.io/badge/webpack-8DD6F9?logo=webpack&logoColor=white&style=for-the-badge" alt="webpack"/>
    <a href="https://yarnpkg.com/"><img src="https://img.shields.io/badge/Yarn%204-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn 4"/></a>
    <a href="https://eslint.org/"><img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint"/></a>
    <a href="https://prettier.io/"><img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white" alt="Prettier"/></a>
    <a href="https://jest.qubitpi.org/"><img src="https://img.shields.io/badge/Jest%20Unit%20Tests-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest"/></a>
    <a href="https://cypress.qubitpi.org"><img src="https://img.shields.io/badge/Cypress%20E2E-69D3A7?style=for-the-badge&logo=cypress&logoColor=white" alt="Cypress"/></a>
    <a href="https://developer.chrome.com/docs/lighthouse/overview"><img src="https://img.shields.io/badge/Lighthouse-F44B21?style=for-the-badge&logo=lighthouse&logoColor=white" alt="Lighthouse"/></a>
    <a href="https://www.apache.org/licenses/LICENSE-2.0"><img src="https://img.shields.io/badge/Apache%202.0-F25910.svg?style=for-the-badge&logo=Apache&logoColor=white" alt="Apache License"/></a>
    <br/>
    <a href="https://app.argos-ci.com/qubitpi/VK-45.01/reference"><img src="https://argos-ci.com/badge-large.svg" alt="Argos Visual Testing"/></a>
</div>

<!-- TOC -->

- [VK 45.01](#vk-4501)
  - [Introduction](#introduction)
  - [Selected Movies](#selected-movies)
    - [Generation War (German)](#generation-war-german)
      - [Movie Source](#movie-source)
      - [Subtitles](#subtitles)
  - [Development](#development)
    - [Getting Source Code](#getting-source-code)
    - [Scripts](#scripts)
    - [Automatically Formatting Codebase](#automatically-formatting-codebase)
  - [Application Monitoring](#application-monitoring)
  - [License](#license)
  <!-- TOC -->

## Introduction

**VK 45.01** is a companion project for [tiger](https://github.com/QubitPi/tiger) and is a
[web app](https://vk4501.qubitpi.org/) hosting subtitles of [selected movies](#selected-movies) extracted using [Tiger].

The app is hosted at [vk4501.qubitpi.org](https://vk4501.qubitpi.org/).

## Selected Movies

### Generation War (German)

#### Movie Source

- [Generation War E01 (part 1)](https://www.dailymotion.com/video/x6y1zfs)
- [Generation War E01 (part 1)](https://www.dailymotion.com/video/x6y2fdh)
- [Generation War E02 (part 1)](https://www.dailymotion.com/video/x6y64ha)
- [Generation War E02 (part 2)](https://www.dailymotion.com/video/x6y67ir)
- [Generation War E03 (part 1)](https://www.dailymotion.com/video/x6ya2qj)
- [Generation War E03 (part 2)](https://www.dailymotion.com/video/x6ya6yg)

#### Subtitles

- [EP1 - German subtitles.srt](./EP1%20-%20German%20subtitles.srt) (Work in Progress using [QubitPi/tiger][Tiger])

## Development

VK-45.01 has the following packages:

- [`vk4501-app`](packages/vk4501-app): holding business logics of the app
- [`vk4501-redux`](packages/vk4501-redux): managing all app states. VK-45.01 uses
  [Redux state management][Redux]
  [![Redux Badge](https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white&style=flat-square)][Redux]
  instead of ~~[React state management][useState]~~ for a much more maintainable decoupling of React components

### Getting Source Code

```console
git clone git@github.com:QubitPi/VK-45.01.git
cd VK-45.01
```

Install dependencies by

> [!NOTE]
>
> Node 18 and Yarn 4 must be installed in local environment.

```console
yarn
```

### Scripts

- `yarn start`: Runs the app in development mode. Open http://localhost:3000 to view it in the browser. The page automatically reloads
  if we make changes to the code. we will see the build errors and lint warnings in the console.
- `yarn test`: Runs the unit tests
- `yarn cypress:open` & `yarn e2e`: Opens Cypress End-to-End test console and runs the End-to-End tests, respectively
- `yarn build`: Builds the app for production to the build folder. It correctly bundles React in production mode and
  optimizes the build for the best performance. The build is minified and the filenames include the hashes.

### Automatically Formatting Codebase

When CI/CD complains about "Code style check" as the following:

![](./docs/cicd-code-style-check-error-example.png)

Simply run the following command at project root which will auto formatting the codebase using Prettier:

```console
yarn prettier --ignore-path .gitignore . --write
```

> [!TIP]
>
> It's always a good practice to auto-formatting code whenever convenient <img src="https://github.com/QubitPi/QubitPi/blob/master/img/%E5%BF%83%E6%B5%B7.png?raw=true" width="60px" />

## Application Monitoring

sentry.io has been integrated into the [vk4501.qubitpi.org](https://vk4501.qubitpi.org/). Specifically:

- [sourcemap](https://docs.sentry.io/platforms/javascript/legacy-sdk/sourcemaps/) is uploaded to sentry during build time
- error trace are sent to sentry during run time

While error trace will always be sent in production mode (`process.env.NODE_ENV === "production"`), an
[.env.sentry-build-plugin](https://docs.sentry.io/platforms/javascript/sourcemaps/uploading/webpack/) is, however,
required for `yarn build` to be able to generate and upload the sourcemap.

> [!NOTE]
>
> If the `.env.sentry-build-plugin` is not present, `yarn build` will still run successfully. It's just not possible
> then to locate the exact location of error in code on sentry issue console because sourcemap hasn't been uploaded

## License

The use and distribution terms for [VK-45.01]() are covered by the [Apache License, Version 2.0](./LICENSE).

[Redux]: https://react-redux.qubitpi.org/
[Tiger]: https://github.com/QubitPi/tiger
[useState]: https://react.qubitpi.org/reference/react/useState
