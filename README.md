Very simple Next.js app created as a part of WP Engine Atlas platform. Data in the app is fetched from Wordpress backend.

Next.js app created basing on https://nextjs.org/learn/basics/create-nextjs-app, but manually - without usage of `npx`.

Prepare Wordpress backend:
- download, upload, and activate the wpe-headless plugin
- install WPGraphQL from the wpe-headless plugin's settings page

How to create such app:

In dir with app's project create:
- `package.json` with content
    - make sure that `scripts.wpe-build` is set
- run `npm i next` to install Next.js
- install `npm i @wpengine/headless`
- `pages/index.js` with content
- `.gitignore` with content
- add global css styles `styles/global.css`
- use global css style in app by adding file `pages/_app.js`
- run `npm run dev` to run it locally (on port 8080)
- create `.env.local` file with appropriate env values
- use https://github.com/wpengine/headless-framework/tree/main/docs/queries to prepare data fetching from Wordpress

How to run this app:
- clone from repo
- create `.env.local` file with appropriate env values
- run `npm run dev` to run it locally (on port 8080)
