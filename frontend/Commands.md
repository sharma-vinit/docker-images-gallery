
vinit@DESKTOP-5UKOS8J:~/images-gallery/frontend$ docker build --no-cache -t images-gallery-frontend .
docker run --name frontend -p 3000:3000 images-gallery-frontend









Steps to Update package.json
1. Install Husky: First, you need to install Husky, which can manage Git hooks.
```sh
npm install husky --save-dev

```
2. Enable Git Hooks: Husky requires you to enable Git hooks. This can be done by running:
```sh
npx husky install
```
Add Husky Configuration to package.json:
You can configure Husky directly in your package.json to run Prettier and add the files to the commit.



###### To run the prettier --write command for all content under the src directory, including all subdirectories and file types that Prettier can handle
`npx prettier --write "src/**/*.{js,jsx,css,html,json}"`
