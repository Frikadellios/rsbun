# Astro Starter Kit with Bun.sh
# [hosted by Kinsta](https://kinsta.com/?mkrc=GEAEKF)

For Kinsta hosting:
```sh
yarn install
yarn dev --host
yarn build

```
For local development:
```sh
bun install 
bun run dev
bunx --bun run build
```
For Cloudflare - comming soon

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── locales/
│          └── en/translate.json
│          └── uk/translate.json
│          └── ru/translate.json
├── src/
│   └── pages/
│       └── contacts.astro
│       └── services.astro
│       └── info.astro
│       └── about.astro
│       └── index.astro
└── package.json
```

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn install`            | Installs dependencies                            |
| `yarn dev`                | Starts local dev server at `localhost:4321`      |
| `yarn build`              | Build your production site to `./dist/`          |
| `yarn preview`            | Preview your build locally, before deploying     |
| `yarn add astro ...`      | Run CLI commands like `astro add`, `astro check` |

For Bun.sh and local development:

| Command                                                | Action                                           |
| :------------------------------------------------------| :----------------------------------------------- |
| `bun install`                                          | Installs dependencies                            |
| `bun run dev` or `bunx --bun astro dev`                | Starts local dev server at `localhost:4321`      |
| `bun run build` or `bunx --bun astro build`            | Build your production site to `./dist/`          |
| `bun run preview`                                      | Preview your build locally, before deploying     |
| `bunx astro add ...` or `bun install`                  | Run CLI commands like `astro add`, `astro check` |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
