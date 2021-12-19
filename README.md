# js-library-scheffe8
##Links
- Documentation: https://mighty-anchorage-94026.herokuapp.com/api.html
- Landing page: https://mighty-anchorage-94026.herokuapp.com/index.html

##Getting Started
To get started with FormationVisualizer first construct an instance of the object:

    const fv = new FormationVisualizer()

You can then create a new pitch by calling drawPitch with the following parameters:

    fv.drawPitch(infobox, team1, team2, team1score, team2score, team1color, team2color, scoringEnabled, htmlElem)
- infobox is a boolean that signifies whether the developer would like the infobox to be displayed (ex. 1) or not (ex.2).
- team1 is a string that represents the left side team name (ex. Tottenham Hotspur FC). If infobox is false, this can be null.
- team2 is a string that represents the left side team name (ex. Canadian National Team). If infobox is false, this can be null.
- team1score is an int that represents the score of team 1. If infobox or ratingsEnabled is false, this can be null.
- team2score is an int that represents the score of team 2. If infobox or ratingsEnabled is false, this can be null.
- team1color is a string that represents the color of team 1 (ex. #1a1d21). This determines what color the player circles will be.
- team2color is a string that represents the color of team 2 (ex. #1a1d21). This determines what color the player circles will be.
- ratingsEnabled is a boolean that represents whether the developer would like the match score to be displayed in the infobox.
- htmlElem is the HTML element that the pitch will be appended do.

At this point a player can be added to the pitch by utilizing addPlayerTeam1 or addPlayerTeam2:

    fv.addPlayerTeam1(position, firstName, lastName, number, ratingsEnabled, imageUrl)

- position is a string that represents the position of the player. The library supports the following positions:
    

    "GK", //Goalkeeper
    "LB", //Left Back
    "LCB", //Left Centre Back
    "CCB", //Center Center Back
    "RCB", //Right Center Back
    "RB", //Right Back
    "LWB", //Left Wing Back
    "RWB", //Right Wing Back
    "CDM", //Central Defensive Midfielder
    "LCM", //Left Centre Midfielder
    "RCM", //Right Centre Midfielder
    "LM", //Left Midfielder
    "RM", //Right Midfielder
    "CAM", //Central Attacking Midfielder
    "LW", //Left Winger
    "RW", //Right Winger
    "CF", //Centre Forward
    "LST", //Left Striker
    "RST" //Right Striker
- firstName is a string that represents the first name of the player (ex. Harry).
- lastName is a string that represents the last name of the player (ex. Kane).
- number is an int that represents the number of the player. It is recommended that a number of 1 or 2 digits is entered as is standard for numbers in the sport. Entering 3 or more digits will work as on rare occasion players are allowed to utilize numbers of such length, but the formatting is not optimized for such cases.
- ratingsEnabled is an boolean that represents whether player ratings will show in the infobox.
- imageUrl is a string that the URL of the players picture.
- This function has error checking so that no two players can be placed in the same position, no more than 11 players can be placed on the field per team, and two players cannot be created on the same team if they share a number.

To set what players stats are showing in the infobox, develops can use the showPlayerStatsTeam1 or showPlayerStatsTeam2 functions

    fv.showPlayerStatsTeam2(number, ratingsEnabled)

- number is the number of the player whose stats will be displayed.
- showRatings is a boolean which determines whether the rating of the player will be displayed.
- This function is called everytime a player is clicked on if the infobox is enabled.

To show a yellow card next to a players name a developer can use renderTeam1Yellow or renderTeam2Yellow functions.

    fv.renderTeam1Yellow(playerNum)

- number is the number of the player who will have a yellow card displayed next to their name.
- This function is allowed to be called more than once to render multiple yellow cards in case a player recieves 2 yellows in a match or a developer wants to display yellows tracked over a whole season.

To show a red card next to a players name a developer can use renderTeam1Red or renderTeam2Red functions.

    fv.renderTeam1Yellow(playerNum)

- number is the number of the player who will have a red card displayed next to their name.
- This function is allowed to be called more than once to render multiple red cards in case a developer wants to display reds tracked over a whole season.

To show a goal icon (soccer ball) next to a players name a developer can use renderTeam1Goal or renderTeam2Goal functions.

    fv.renderTeam1Yellow(playerNum)
- number is the number of the player who will have a goal icon displayed next to their name. 
- This function is allowed to be called more than once to render multiple goals.
