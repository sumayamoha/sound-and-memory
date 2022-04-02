Pre-work - Memory Game
Memory Game is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Sumaya Mohamed

Time spent: 5 hours spent in total

Link to project: https://glitch.com/edit/#!/tricky-pointy-moonstone?path=README.md%3A9%3A17 game: https://tricky-pointy-moonstone.glitch.me/

Required Functionality
The following required functionality is complete:

[ x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
[ x] "Start" button toggles between "Start" and "Stop" when clicked.
[ x] Game buttons each light up and play a sound when clicked.
[ x] Computer plays back sequence of clues including sound and visual cue for each button
[ x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
[ x] User wins the game after guessing a complete pattern
[ x] User loses the game after an incorrect guess
The following optional features are implemented:

[ x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
[ x] Buttons use a pitch (frequency) other than the ones in the tutorial
[ x] More than 4 functional game buttons
[ ] Playback speeds up on each turn
[ x] Computer picks a different pattern each time the game is played
[ ] Player only loses after 3 mistakes (instead of on the first mistake)
[ ] Game button appearance change goes beyond color (e.g. add an image)
[ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
[ ] User has a limited amount of time to enter their guess on each turn
The following additional features are implemented:

[ ] List anything else that you can get done to improve the app!
Video Walkthrough (GIF)
If you recorded multiple GIFs for all the implemented features, you can add them here:
(refreshed page to show randomly generated pattern)
![](https://i.imgur.com/J348pOt.gif)


Reflection Questions
If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. I used w3schools.com to think more about how math.random should be implemented in this case.

What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) I was surprised at how if the generateRandom() function wasn't implemented correctly, even if there were no errors in the code, the game would not load or function. The slightest mistake in logic implementation would render the game unworkable, and it was hard trying to figure out where I went in the wrong direction with my code. The time I took to debug the code was a bit gruesome, but I came out knowing so much more about functions and array methods than I would have, had I given up and submitted the project with only the required functionability. I searched on w3schools to see how math.random was used in javascript and what the syntax and logic looked like, and how the code came together as a whole. I also read up on array methods in javascript, since I'm not too familiar with javascript, I wanted to learn exactly how I could manipulate an array in javascript, which is when I finally stumbled upon the .push method. After learning more about array methods, it took me a bit more time to correctly implement the function and figure out how helpful the .push method would be within my code.

What questions about web development do you have after completing your submission? (recommended 100 - 300 words) After completing my submission, I realize that I am more interested in how different language files can come together to create something much bigger than just a memory game. Even though my game was pretty small in terms of length of code, I found it hard at times to look at the files and the methods within them, and test the functionablity of each when I encountered an error and my game would not start at all. I hope to learn more about debugging and become more efficient in writing and testing methods in general. I hope that finding and debugging code will come more naturally to me as I learn and grow as a programmer.

If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) If I had more time, I would try to add the images that were suggested in the optional functions. I also want to make this game look nicer in general. I would love to have a nice layout or background with interactive messages and images. I also love memory games, and I believe games like this can help and destress others, along with strengthening the brain! I would like to add an easy, medium, intermediate, and expert level, so it could be a proper game that people could enjoy. I would maybe add up to 20 buttons for the expert level, and with my generateRandom() function, the patterns would be from 1-20 at random.

Interview Recording URL Link
My 5-minute Interview Recording

License
Copyright [Sumaya Mohamed] 

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.