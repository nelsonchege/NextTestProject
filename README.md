# Next JS

- Next js is a react meta framework
- it preduilds the whole react app then serves HTML to the client (server side redering)
- Next js also offers optimized caching and automatic code spliting
- automatic code splitting works by loading a single page that is requested
- optimized caching happens by having a structure of the application , dependencies and resources
  required. next js then caches the necessary dependencies and resources required for each page

## Installation

there are two ways to install

### Manual Installation

- run below command depending with what you use

```bash
npm install next react react-dom
# or
yarn add next react react-dom
# or
pnpm add next react react-dom
```

-then in packege.json add the following

```javascript
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

### Automatic Installation

- run below command depending with what you use

```bash
npx create-next-app@latest
# or
yarn create next-app
# or
pnpm create next-app
```

- there will be a cli prompt,
- follow the and answer prompt
