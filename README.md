# Word Count Challenge
[![npm](https://img.shields.io/badge/npm-v6.14-red)](https://www.npmjs.com/package/npm/v/6.14.15) [![React](https://img.shields.io/badge/React-v17-blue)](https://pt-br.reactjs.org/blog/2020/10/20/react-v17.html)

## Acceptance Criteria

As a user when I view the application then I see a form containing a text box to enter a body of text and when I submit the form with some text then I see a result containing the number of words in the text box
and when I submit the form with an empty text then I see a form error telling me that some text input is required.

As an engineer when I look at your project then I should understand how to install and run it.

## How to
From your command line, clone and run:

### Using npm

#### Install dependencies
```
npm install
```
#### Run server 
```
npm start
```

### Using docker

####  build image
```
docker build -t word:latest .
```
#### Run server 
```
docker run -t -p 3000:3000 word:latest
```