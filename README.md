# rn-demo
An example for a basic app, with ReactNative

*WIP*

[![React Native Version](https://img.shields.io/badge/react--native-0.69.X-green)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This app is designed to be the the starter app, easily modifiable to add more features in the future.  

It shows some basics of ReactNative development, and demonstrate my way of doing it.

## Features
 - [x] A list of users, with a pull to refresh
 - [ ] A search of users
 - [ ] An user detail screen, with some more data about the user
 
## Notes on project development
### Some context
This project have been completed for Edda, as a technical test

### Technical choices
Redux is used as store managment and the data is fetched from [a placeholder api](https://jsonplaceholder.typicode.com) for this project

### Project structure
This project followed a standard ReactNative apps architecture, plus the component organization I enjoy : Atoms (small components, cannot be broke down any further), Molecules (a larger component, eventually using some Atoms components) and Organisms (the largest component, using some Molecules components)

### Versionning
This basic app beign really light, the commits have been done directly on master. [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=What%20is%20Gitflow%3F,lived%20branches%20and%20larger%20commits.) is my usual way to work.

## Time spent
The repartition of time used to make this project is the following : 
