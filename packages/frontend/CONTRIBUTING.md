# Contributing

This document contains detailed information on how to get started contributing
on the Carrot KPI host frontend, which is developed with React using Typescript,
with `yarn` as the package manager of choice.

## General info

This app acts as an host to the various Carrot templates through Webpack 5
Module Federation, a solution built to make it possible to pull in remote
components at runtime from third parties.

The app is built using Create React App with Typescript and `craco` (used to add
module federation capabilities and other goodies to the end build), with some
Rollup sprinkled on top to make it possible to build the app as a library (read
below to know more).

## Getting started

The first step to get started is installing the package's dependencies using
`yarn` (our package manager of choice). You should run the following command
from the root of the package:

```
yarn install
```

### Setting up envs

A couple envs are required in order to start up the host frontend locally or
build it for a release:

- `REACT_APP_INFURA_PROJECT_ID`: an infura project ID to be used for RPC access
  for various blockchains. You can get one [here](https://www.infura.io/).
- `REACT_APP_WALLETCONNECT_PROJECT_ID`: a WalletConnect v2 project ID is
  required in order to enable WalletConnect based wallet connections. You can
  get one by registering [here](https://cloud.walletconnect.com).
- `REACT_APP_FATHOM_SITE_ID`: id of an existing Fathom site, used to initialize
  the anonymous tracking (this env is optional). You can get one by registering
  [here](https://app.usefathom.com).

After you have these envs, you should create a `.env` file in the root of the
package (or copy the `.env.example` available at the root of the package) and
paste the values there.

A `check-env` script will run before you either start of build the dapp and
throw an error if the env doesn't look good, so make sure your env is ok.

## Running modes

The frontend supports 3 different running modes: **dev**, **staging** and
**standard**.

In standard mode the frontend will behave exactly as it would in production, and
fetch templates data directly from the blockchain (or the subgraph if not in
decentralization mode) and in the case of templates from decentralized storage
option, directly using the CIDs specified on-chain in the manager contracts.
This should in general result in a stabler experience, as only stable templates
should be allowed to reach the on-chain state.

Optionally, templates can also specify a `stagingURL` key in their `base.json`
specification file. When the frontend is running in staging mode the template's
federated modules (both **page** and **creation form**) will be loaded from that
URL instead of the on-chain specified decentralized storage CIDs.

This helps while testing out new features as it means that each template
developer can potentially set up a CI flow to build the template's frontend at
each commit and serve it through a static server (using services such as
[**Vercel**](https://vercel.com/carrot-kpi) or
[**Netlify**](https://www.netlify.com/) for example). It's then possible to add
the hosting URL in the `base.json` file under the `stagingURL` key, and any host
frontend instance running in staging mode will try to load the template's
frontend from there instead of the IPFS CID specified on-chain (which, again,
contains the latest **stable** and **Carrot Labs checked** version of the
template at hand).

It's clear then that staging mode can be used to test out bleeding-edge features
of Carrot that have reached a certain maturity stage but that are **not yet
ready for production**.

> **Warning**: we recognize the risk that template developers could potentially
> push malicious code in staging mode template builds, and as such the mode
> itself is limited to only interact with testnets. Additionally, a warning will
> be visible while the frontend is running in staging mode encouraging the user
> to excercise maximum caution.

Dev mode is simply a flag that is set to true in the shared state. Its role is
either to be read by templates or other libraries to tell them they can use dev
mode specific functionality (such as local machine hosted infrastructure that is
spun up by Carrot Scripts).

## Start a local dev build

Two different commands are available to start a local dev build:

- `start`: this will start a local Webpack dev server serving the app built to
  run in standard mode, which means the template federated modules will be
  loaded from decentralized storage options using the on-chain specified cids.
- `start:staging`: this will start a local Webpack dev server serving the app
  built to run in staging mode, which means the template federated modules will
  be loaded from the specified `stagingURL` derived from the template's on-chain
  `base.json`. Read more about staging mode in the section above.

## Building modes

The frontend supports 2 different build modes: **library** and **standalone**.

In standalone mode the frontend will be built to an optimized frontend ready to
be released in production, and all the available features will be enabled.

The library mode on the other hand builds the frontend to a library that can
then be used to test out templates locally. The utility is for template
developers to be able to run the full Carrot host frontend in template
playgrounds, to test out template frontends locally through the help of Carrot
Scripts. This gives them an exact view of how their template would look and
behave in production on their local machine, without having to publish anything.
Needless to say, this improves developer experience.

The standalone builts are handled by Webpack through Create React App, while
library builds are handled by Rollup.

Various pieces of the app would not be functional in library mode, so we use a
`__LIBRARY_MODE__` global in order to remove some parts of the app from the end
bundle at build time. When building in library mode through Rollup, the
`__LIBRARY_MODE__` is set to `true`, while when building in standalone mode
through Webpack it's set to `false`.

## Building

Two different commands are available to build the host frontend:

- `build`: this will build the host frontend in standalone mode. The build's
  output will be placed under the `build` folder, which will contain a frontend
  app ready to be published.
- `build:library`: this will bundle the app in library format, ready to be
  consumed by template developers that want functional playground modes for
  their template frontends. The end bundle is put under `dist` and the
  `package.json` is configured in order to make the library accessible to
  developers. In fact the library can be published to `npm` as soon as the
  `dist` folder is available.

## Checking the build's size

In order to keep the standalone-built app as lean as possible while keeping all
the features, `size-limit` is used to check the output's size under the `build`
folder. The current size limit for the folder at the time of writing is `5Mb`.

Size limit's config is visible in the `.size-limit.json` file.

## Linting

In order to keep the code consistent, linting is applied using Prettier and
ESLint. The configuration is slightly customized from the base
`eslint-config-custom` to work with React.

## Adding envs

In case you're building a new feature and it requires adding an env, you do the
following:

1. If the env is required for the dapp to work correctly, update the
   `./scripts/check-env.js` script to reflect it.
2. Add its name to the `.env.example` file (obviously, do not add the env's
   value to the example file)
3. Update the `./src/react-app-env.d.ts` file to add the env's name to the
   augmented `NodeJS` namespace.
4. Update the `turbo.json` file at the root of the monorepo to add the env to
   the `globalEnv` key.