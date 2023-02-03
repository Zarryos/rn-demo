# rn-demo
An example for a basic app, with ReactNative

[![React Native Version](https://img.shields.io/badge/react--native-0.69.X-green)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This app is designed to be the the starter app, easily modifiable to add more features in the future.  

It shows some basics of ReactNative development, and demonstrate my way of doing it.

## Features
 - [x] A list of users, with a pull to refresh
 - [x] A search of users
 - [x] An user detail screen, with some more data about the user

https://user-images.githubusercontent.com/15783243/216664650-ecbe04b5-d2b0-49c1-955e-fc0e99adc896.mp4

## How to run the app

Start by cloning the repo:
```
git clone https://github.com/Zarryos/rn-demo.git
```

Follow the [get started](https://reactnative.dev/docs/environment-setup) from ReactNative, skip the init part.

Once you installed all the tools and dependency needed, launch a simulator, run the app :

```
npx react-native run-ios
```

## Code review
The main app code can be reviewed directly on GitHub, if that's the preferred choice.
`/src` is the main point of interest.
 
## Notes on project development
### Some context
This project have been completed for Edda, as a technical test
By the time I wrote this, my experience with ReactNative is 2 and a half yo, being a bit light on typescript

### Technical choices

#### Store
Redux is used as store managment, as this app is designed to be a base/MVP app of a growing project. It's not fully needed for this version, but at least it'll be available for further development!

#### Api
The data is fetched from [a placeholder api](https://jsonplaceholder.typicode.com) for this project

### Project structure
[Atomic design](https://atomicdesign.bradfrost.com/chapter-2/) is used here, for component/containers structure: Atoms (small components, cannot be broke down any further), Molecules (a larger component, eventually using some Atoms components) and Organisms (the largest component, using some Molecules components)
It's not fully respected, as doing it stricly would have taken some additional time, but the basics are here.

I choose to work with this design since that's the one I enjoy and find really adapted to a real app. My opinion on it is that it take some times to refactor/setup initially but once done, it helps a lot to smoother the app development.

### Versionning
This basic app beign really light, the commits have been done directly on master. [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=What%20is%20Gitflow%3F,lived%20branches%20and%20larger%20commits.) is my usual way to work.

### Possible improvements
#### Tests!
Adding some tests would have been nice, unfortunatly lacking time on my side to demonstrate that

I've used [Jest](https://kenjdavidson.com/writing/2020/11/02/react-native-typescript-jest) on a previous project

*Let me know if that's a blocker for this technical test, I could add some later on!*

#### UI/UX
I've kept it *really* simple, a lot can de done there!

## Time spent
The repartition of time used to make this project is the following : 
 - [x] 2h initial app setup, updating my rn version, pods, ruby...
 - [x] 1h project structure design and readme
 - [x] 1h redux & react navigation implementation
 - [x] 3h containers/components coding
 

