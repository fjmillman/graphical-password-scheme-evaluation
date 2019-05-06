# Graphical Password Scheme Evaluation

### Requirements

You will need to do the following before you are able to get a local instance of this up and running through the setup stage:

- An installation of git for cloning the repository via https://git-scm.com/downloads
- An installation of node.js and npm on your machine for downloading the libraries and hosting a local server via https://nodejs.org/en/
- A mongoDB Atlas account with a cloud database set up called 'graphicalpasswordscheme' for uploading the data to via https://www.mongodb.com

### Setup

In order to get a local instance of this repository up and running you will need to run through the following steps in your terminal:

1. Clone the repository via `git clone git@github.com:fjmillman/graphical-password-scheme-evaluation.git`
2. Go to the `api` directory and copy the `now-secrets.example.json` file as `now-secrets.json` and put your mongoDB Atlas username and password into it
3. Open up a second terminal window and navigate to the `api` and `app` directories in each window before running the following commands:
   1. `npm install` to install all of the relevant libraries
   2. `npm start` to start up the local servers
4. Open up a web browser and navigate to the address supplied in the `app` terminal

