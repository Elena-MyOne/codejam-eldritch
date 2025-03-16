# Eldritch Horror Codejam

## Project Description
This CodeJam will require you to create a small helper application for the board game "Ancient Horror"

## Key Skills:
- creating a complex algorithm for shuffling a deck

## Synopsis and conditions of the algorithm
Many board game lovers have heard of Ancient Horror as one of the most interesting board adventures, but there is one difficulty: preparation for the game for inexperienced players takes from 40 minutes to an hour of time and one of the most difficult conditions is compiling a deck of myths

Three different types of cards are used to assemble the myth deck: blue, brown and green (the type is determined by the color of the stripe in the card header)
In addition, there are different card difficulties:
1. complex cards have tentacles around the name like on the Blue card for example
2. regular cards can't do any signs like the Brown card in the example
3. Light cards have snowflakes around the title like the green card in the example.

Examples:

![Синяя карта](https://github.com/Luffi2539/eldritch-codejam/blob/main/assets/MythicCards/blue/blue2.png?raw=true)
![Коричневая карта](https://github.com/Luffi2539/eldritch-codejam/blob/main/assets/MythicCards/brown/brown1.png?raw=true)
![Зеленая карта](https://github.com/Luffi2539/eldritch-codejam/blob/main/assets/MythicCards/green/green1.png?raw=true)

You will be provided with pre-prepared card assets as well as files with the data of these cards.

At the first stage, the player will need to choose an Ancient One who will indicate the deck layout and how many cards of what color are needed at each stage of the game.

Example of Ancient Card:

![Древний](https://user-images.githubusercontent.com/43149261/172723651-a9c7e003-96b7-44e4-944a-54ad12755fbd.png)

The composition of cards required for the game is calculated by the sum of cards of different colors for all 3 stages
Based on the example, you will need:
Green cards: 5
Blue cards: 2
Brown cards: 9

Next, you will need to determine the difficulty of the game:

From the general set of cards, you will need to select cards according to the selected difficulty:

# Very easy difficulty level: all snowflake cards are taken from the set, if there are not enough cards, then regular cards are taken
# Easy difficulty level: tentacle cards are removed from the set
# Medium difficulty level: the set remains intact
# High difficulty level: snowflake cards are removed from the set
# Very high difficulty level: all tentacle cards are taken from the set, if there are not enough cards, then regular cards are taken

Based on the example: We have chosen a very easy difficulty level and we need 9 brown cards, but in the entire set there are only 5 brown cards with a snowflake, so we take these five cards and then randomly select 4 cards of normal difficulty

Once the required number of cards has been collected, we must create mini-decks for each stage. To do this, the selected cards are shuffled separately (you should get three small decks in which green, blue and brown cards will be located, respectively, in random order

Then you need to select the required number of cards from these decks for each stage:
Based on the example:

For Stage 1, according to the diagram, we need 1 green, 2 brown and 1 blue card.
We randomly select 1 card from the mini-deck of selected green cards, 2 cards from the brown deck and 1 from the blue, after which we shuffle the resulting 4 cards

We repeat this action for the second and third stages as a result, the decks initially shuffled by color will turn into 3 decks of each stage

Next, the laid decks must be placed on top of each other so that the cards from the first stage enter the game first, then the cards of the second stage and at the end the cards of the third stage

Cutting from the rules of the game about collecting decks (this cutting does not include division by difficulty levels, so the algorithm is slightly different
![image](https://user-images.githubusercontent.com/43149261/172725219-0d0c9f22-0594-4b4b-9a2b-ce4427c682ab.png)

Demo of the finished project: [Демо](https://codejam-demo.herokuapp.com/)

## Files for work
In the main branch of this repository you can find 2 folders assets and data that contain useful files and images for completing the task.
You can fork this repository so that you can easily copy the files to yourself later

## Requirements for layout:
Since the main task is the algorithm and not the layout, there are no special requirements, it is not necessary to repeat the layout from the demo, you are free to arrange the elements yourself in any way convenient for you

## Technical requirements
1. At least one ancient card is available to choose from (maximum 4) +5-20 points (5 for each ancient)
2. Several difficulty levels are available to choose from (maximum 5) +5-25 points (5 for each difficulty level
3. Cards are shuffled according to the rules of the game +40 points
4. There is a tracker for the current state of the deck +20 points

Maximum score for the task: 100 (105 potential, of which 5 as an adjustment for the examiners)

## If the task is very difficult
As you can see, the maximum points go for shuffling the deck and for the tracker. If the task seems very difficult for you
choose any Ancient at will and shuffle the cards according to the usual difficulty level
in this case, you will not need to implement the choice of the Ancient, the choice of difficulty, but you will need to make one version of shuffling for static conditions
The choice of the Ancient and the difficulty is already a task with an asterisk for those who want to try a more difficult version of the task


