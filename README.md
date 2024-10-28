# Isolant Website

Repo for Isolant's website: This is a [NextJS](https://nextjs.org) website, hosted (for now) in [Netlify](https://www.netlify.com), and using [Decap CMS](https://decapcms.org/) as the back-end.

## Installation

1. `git clone https://github.com/Isolant/site/`
2. `npm install`

## Running things locally

`npm run dev`

## Building for production and deploying to the server

`npm run build`

Currently, each push to this repo's `main` branch will trigger a new build in Netlify, and deploy it automatically.

## Admin interface

The admin interface can be found in [this URL](https://www.isolant.com.ar/admin/). We're also using some of Netlify's features, like [Netlify Identify](https://docs.netlify.com/security/secure-access-to-sites/identity/registration-login/) to handle authentication and user management, and [Git Gateway](https://docs.netlify.com/security/secure-access-to-sites/git-gateway/) to ensure changes on the CMS interface update the `.md` files inside the `content` folder.

If you start using a different repository URL, or if you move away from Netlify to a different server, you'll need to update these functionalities to work with the new repo, or use a different [auth provider](https://decapcms.org/docs/external-oauth-clients/)
