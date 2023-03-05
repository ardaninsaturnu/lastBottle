##### Mehmet Arda Çelik

## Case for CirPlus

This project creating for job interview case. Project is consist of a game board and features around this board. Our main purpose is handle states and requests with CirPlus Doc.

## Board

- Board is similar to a chessboard. Cell size is 30x30 pixels. eg: if the board area (browser screen size minus controls, labels etc.) is 1280x720
pixels, there should be 42 columns and 24 rows.
- Coordinates of a game element are mentioned as [Cn, Rn] (C: column, R: Row)
- Board is repeating. eg: if reference coordinates are [C42, R5] (east edge of the board) the next cell to the east has coordinates [C1, R5]
(opposite side of the board)

<img width="1242" alt="image" src="https://user-images.githubusercontent.com/46358038/222630660-3a48125b-7bbe-4afb-81e0-2f990576d561.png">

## Game setup

- First, the center coordinates of GPgp is selected randomly (eg: [C4, R18])
- GPgp area is calculated by adding one cell to the center coordinates in each direction.
- GPgp area should be colored in red
- Then starting cell coordinate is selected randomly (eg: [C31, R4])
- Starting cell should be colored blue
- Starting cell can not be inside GPgp zone
- Dice 1: determines the direction
- Dice 2: determines the moves
- The cell which PB is in should be colored in black
- The cell which Henry is in should be colored in yellow

## Game play:
- There are 2 players: Henry (you) and the PB (computer)
- Each player rolls 2 dice and moves accordingly.
- To win the game, Henry should either reach to GPgp zone before the PB or catch the PB.
- PB starts the game.

## Tech

used required techs as Upayments wants :

- ReactJS

## Installation

Clone project your local

```sh
git clone git@github.com:ardaninsaturnu/lastBottle.git
```

Install the dependencies and devDependencies and start the npm.

```sh
npm install
npm start
```

## View

to view project last version click this
url : 

### Commits Explanation

- :rainbow:  for style
- :microbe:  for bug fixies
- :dna:  for merging
- :fairy:  for new features
