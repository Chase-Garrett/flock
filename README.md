# Flock

[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)

## Description

A general purpose social network backend API utilizing MongoDB.

## Table of Contents

-[Installation](#installation)

-[Usage](#usage)

-[Credits](#credits)

-[Tests](#tests)

-[License](#license)

-[Questions](#questions)

## Installation

To install simply clone the repository, navigate to the cloned repo and run `npm i` to verfiy that all dependencies have been correctly installed.

## Usage

Once you have cloned the repository and verified all depencies are correctly installed, you can run the application by using `npm run start`. As this is a backend API the best way to interface with this is to use a program like "Insomnia". You are able to make normal CRUD HTTP requests as outlined in the routes directory. Running locally the application is set for `localhost:3001` thus all API routes will follow the format `localhost:3001/api/`. For users the routes are as follows:

- `/api/users/` returns all users
- `/api/users/:userId` returns an individual user matching the userId
- `/api/users/create` takes a JSON object consisting of a username and email to create a new user
- `/api/users/update/:userId` updates a user matching the userId with information provided in a JSON object
- `/api/user/:userId/friends/add/:friendId` adds a friend to the user's friend list where the respective ids match
- `/api/user/:userId/friends/remove/:friendId` removes a friend from the user's friend list where the respective ids match
- `/api/users/delete/:userId` deletes a user matching the userId

For posts the routes are as follows:

- `/api/posts/` returns all posts
- `/api/posts/create/:userId` creates a post for the user matching the userId

For the comments the routes are as follows:

- `/api/comments/create/:userId/:postId` creates a comment on a post matching the postId for the user matching the userId
- `/api/comments/delete/:postId/:commentId` deletes a comment on a post where the respective ids match

A video walkthrough of these API calls using Insomnia can be found [here](https://drive.google.com/file/d/1ksKQ7-ucCsA6VppPKA_6eUpA3u48MUI8/view).

## Credits

This application makes use of node.js, express.js, mongoDB, and mongoose.

## Tests

N/A

## License

This project is licensed under the MIT license.

## Questions

If you have any questions, please contact me at chasegarrett@tutanota.com. You can also visit my [Github](https://github.com/Chase-Garrett) for more of my work.
