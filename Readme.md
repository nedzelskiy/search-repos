## Github repositories searcher

###For launch project

for development:
```` bash
GTHUB_AUTH_TOKEN=<your token> yarn dev:client:build
yarn dev:server:build
yarn dev:server:run
````
and project will be available on http://localhost:1234 

for production:
```` bash
GTHUB_AUTH_TOKEN=<your token> prod:client:build
prod:server:build
prod:server:run
````

## Coding task
Your task is to write a simple React Application that renders list of react repositories in the table view of your choice or in the following manner:

        • <name> - 🌟 <stars> - 🍴 <forks>
        • react - 🌟 69012 - 🍴 12581
        • reselect - 🌟 7291 - 🍴 214
        • redux - 🌟 31705 - 🍴 6581
        • recompose - 🌟 5671 - 🍴 342
        ...
        
Repository name should be a link to the actual GitHub repo.

## Constraints
- Use typescript 
- Use react-hooks
- Feel free to use any boilerplate configuration as `create-react-app`
- Feel free to use any design framework you are familiar with (i.e. AntD)
- Do not leave any unused dependencies or scripts
- Do not mock API response in your repository

## Nice to have
If you feel you have time to express yourself more here's the list of few points to guide you
- Pagination
- Flexible search
- Cover you code with tests as much as you can
- Dockerize it!

## API 
Use the Github Graphql API v4 to fetch the list of repos.
- [Docs](https://developer.github.com/v4/)
- [Explorer](https://developer.github.com/v4/explorer/)

## Evaluation points
- use of community best practices 
- use of clean code which is self documenting
- use of domain driven design
- tests for business logic
- clean and extendable project structure, usage of best practices
- use of css-in-js
- use of design frameworks
- use of code quality checkers such as linters and build tools
- use of git with appropriate commit messages
- documentation: README and inline code comments
- use of docker for building and integration test

## Results 
Please share a git repository with us containing your implementation.

