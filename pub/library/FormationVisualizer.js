"use strict";

function FormationVisualizer() {
    this.pitch = null
    this.team1players = {}
    this.team2players = {}
    this.infoBox = null
    this.positions = [
        //Standard abbreviations for positions
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
    ]
}

FormationVisualizer.prototype = {

    drawPitch: function (infobox, team1, team2) {
        const pitch = document.createElement('div')
        pitch.id = "pitch"
        pitch.style = "width: 802px; height: 502px; margin: 10px; background-color: Green;"
        const body = document.querySelector("body")

        // const grassCut1 = document.createElement('div')
        // grassCut1.id = "grass cut 1"
        // grassCut1.style = "width: 100px; height: 500px; margin-left: 100px; background-color: #90ee90; position: absolute;"
        // pitch.append(grassCut1)

        const topTouchline = document.createElement('div')
        topTouchline.id = "top touchline"
        topTouchline.style = "width: 782px; height: 2px; margin: 0px; background-color: White; margin-left: 10px; margin-top: 10px; position: absolute;"
        pitch.append(topTouchline)

        const bottomTouchline = document.createElement('div')
        bottomTouchline.id = "bottom touchline"
        bottomTouchline.style = "width: 782px; height: 2px; margin: 0px; background-color: White; margin-left: 10px; margin-top: 490px; position: absolute;"
        pitch.append(bottomTouchline)

        const leftEndline = document.createElement('div')
        leftEndline.id = "left endline"
        leftEndline.style = "width: 2px; height: 480px; margin: 0px; background-color: White; margin-left: 10px; margin-top: 10px; position: absolute;"
        pitch.append(leftEndline)

        const rightEndline = document.createElement('div')
        rightEndline.id = "right endline"
        rightEndline.style = "width: 2px; height: 480px; margin: 0px; background-color: White; margin-left: 790px; margin-top: 10px; position: absolute;"
        pitch.append(rightEndline)

        const leftArc = document.createElement('div')
        leftArc.id = "penalty arc"
        leftArc.style = 'width: 166px; height: 166px; border-radius: 50%; margin-left: 27px; margin-top: 166px; background-color: White; position: absolute;'
        pitch.append(leftArc)

        const leftArcGreen = document.createElement('div')
        leftArcGreen.id = "penalty arc green space"
        leftArcGreen.style = 'width: 162px; height: 162px; border-radius: 50%; margin-left: 29px; margin-top: 168px; background-color: Green; position: absolute;'
        pitch.append(leftArcGreen)

        const leftArcGreenRectangle = document.createElement('div')
        leftArcGreenRectangle.id = "penalty arc green space"
        leftArcGreenRectangle.style = 'width: 133px; height: 166px; margin-left: 27px; margin-top: 166px; background-color: Green; position: absolute;'
        pitch.append(leftArcGreenRectangle)

        const rightArc = document.createElement('div')
        rightArc.id = "penalty arc"
        rightArc.style = 'width: 166px; height: 166px; border-radius: 50%; margin-left: 607px; margin-top: 166px; background-color: White; position: absolute;'
        pitch.append(rightArc)

        const rightArcGreen = document.createElement('div')
        rightArcGreen.id = "penalty arc green space"
        rightArcGreen.style = 'width: 162px; height: 162px; border-radius: 50%; margin-left: 609px; margin-top: 168px; background-color: Green; position: absolute;'
        pitch.append(rightArcGreen)

        const rightArcGreenRectangle = document.createElement('div')
        rightArcGreenRectangle.id = "penalty arc green space"
        rightArcGreenRectangle.style = 'width: 133px; height: 166px; margin-left: 642px; margin-top: 166px; background-color: Green; position: absolute;'
        pitch.append(rightArcGreenRectangle)

        const rightGoalAreaLine1 = document.createElement('div')
        rightGoalAreaLine1.id = "right goal area line 1"
        rightGoalAreaLine1.style = "width: 2px; height: 100px; margin: 0px; background-color: White; margin-left: 740px; margin-top: 200px; position: absolute;"
        pitch.append(rightGoalAreaLine1)

        const rightGoalAreaLine2 = document.createElement('div')
        rightGoalAreaLine2.id = "right goal area line 2"
        rightGoalAreaLine2.style = "width: 50px; height: 2px; margin: 0px; background-color: White; margin-left: 740px; margin-top: 200px; position: absolute;"
        pitch.append(rightGoalAreaLine2)

        const rightGoalAreaLine3 = document.createElement('div')
        rightGoalAreaLine3.id = "right goal area line 1"
        rightGoalAreaLine3.style = "width: 50px; height: 2px; margin: 0px; background-color: White; margin-left: 740px; margin-top: 300px; position: absolute;"
        pitch.append(rightGoalAreaLine3)

        const leftGoalAreaLine1 = document.createElement('div')
        leftGoalAreaLine1.id = "left goal area line 1"
        leftGoalAreaLine1.style = "width: 2px; height: 100px; margin: 0px; background-color: White; margin-left: 60px; margin-top: 200px; position: absolute;"
        pitch.append(leftGoalAreaLine1)

        const leftGoalAreaLine2 = document.createElement('div')
        leftGoalAreaLine2.id = "left goal area line 2"
        leftGoalAreaLine2.style = "width: 50px; height: 2px; margin: 0px; background-color: White; margin-left: 10px; margin-top: 200px; position: absolute;"
        pitch.append(leftGoalAreaLine2)

        const leftGoalAreaLine3 = document.createElement('div')
        leftGoalAreaLine3.id = "left goal area line 1"
        leftGoalAreaLine3.style = "width: 52px; height: 2px; margin: 0px; background-color: White; margin-left: 10px; margin-top: 300px; position: absolute;"
        pitch.append(leftGoalAreaLine3)

        const rightPenaltyAreaLine1 = document.createElement('div')
        rightPenaltyAreaLine1.id = "right Penalty area line 1"
        rightPenaltyAreaLine1.style = "width: 2px; height: 250px; margin: 0px; background-color: White; margin-left: 640px; margin-top: 125px; position: absolute;"
        pitch.append(rightPenaltyAreaLine1)

        const rightPenaltyAreaLine2 = document.createElement('div')
        rightPenaltyAreaLine2.id = "right Penalty area line 2"
        rightPenaltyAreaLine2.style = "width: 150px; height: 2px; margin: 0px; background-color: White; margin-left: 640px; margin-top: 125px; position: absolute;"
        pitch.append(rightPenaltyAreaLine2)

        const rightPenaltyAreaLine3 = document.createElement('div')
        rightPenaltyAreaLine3.id = "right Penalty area line 1"
        rightPenaltyAreaLine3.style = "width: 152px; height: 2px; margin: 0px; background-color: White; margin-left: 640px; margin-top: 375px; position: absolute;"
        pitch.append(rightPenaltyAreaLine3)

        const leftPenaltyAreaLine1 = document.createElement('div')
        leftPenaltyAreaLine1.id = "left Penalty area line 1"
        leftPenaltyAreaLine1.style = "width: 2px; height: 250px; margin: 0px; background-color: White; margin-left: 160px; margin-top: 125px; position: absolute;"
        pitch.append(leftPenaltyAreaLine1)

        const leftPenaltyAreaLine2 = document.createElement('div')
        leftPenaltyAreaLine2.id = "left Penalty area line 2"
        leftPenaltyAreaLine2.style = "width: 150px; height: 2px; margin: 0px; background-color: White; margin-left: 10px; margin-top: 125px; position: absolute;"
        pitch.append(leftPenaltyAreaLine2)

        const leftPenaltyAreaLine3 = document.createElement('div')
        leftPenaltyAreaLine3.id = "left Penalty area line 1"
        leftPenaltyAreaLine3.style = "width: 152px; height: 2px; margin: 0px; background-color: White; margin-left: 10px; margin-top: 375px; position: absolute;"
        pitch.append(leftPenaltyAreaLine3)

        const centreCircle = document.createElement('div')
        centreCircle.id = "center circle"
        centreCircle.style = 'width: 166px; height: 166px; border-radius: 50%; margin-left: 316px; margin-top: 164px; background-color: White; position: absolute;'
        pitch.append(centreCircle)

        const centreCircleGreen = document.createElement('div')
        centreCircleGreen.id = "center circle green"
        centreCircleGreen.style = 'width: 162px; height: 162px; border-radius: 50%; margin-left: 318px; margin-top: 166px; background-color: Green; position: absolute;'
        pitch.append(centreCircleGreen)


        const centreLine = document.createElement('div')
        centreLine.id = "centre line"
        centreLine.style = "width: 2px; height: 482px; margin: 0px; background-color: White; margin-left: 399px; margin-top: 10px; position: absolute;"
        pitch.append(centreLine)

        body.append(pitch)
        this.pitch = pitch

        if (infobox === true) {
            this.drawInfoBox(team1, team2)
        }
    },

    addPlayerTeam1: function (position, firstName, lastName, number, ratingsEnabled) {
        if (this.checkTeam1(number, position)){
            console.log("collision")
            return;
        }

        const newDiv = document.createElement('div')
        const player = document.createElement('button')
        newDiv.id = name
        if (position === "GK") {
            newDiv.style = "margin-top: 240px; margin-left: 5px; position: absolute;"
            player.style = "width: 20px; height: 20px; border-radius: 50%; background-color: Aqua; margin-left: 20px;"
        } else if (position === "LB") {
            newDiv.style = "margin-top: 50px; margin-left: 50px; position: absolute;"
            player.style = "width: 20px; height: 20px; border-radius: 50%; background-color: Aqua; margin-left: 20px;"
        } else if (position === "LCB") {
            newDiv.style = "margin-top: 150px; margin-left: 50px; position: absolute;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Aqua; margin-left: 20px;"
        } else if (position === "CCB") {
            newDiv.style = "margin-top: 240px; margin-left: 50px; position: absolute;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Aqua; margin-left: 20px;"
        } else if (position === "RCB") {
            newDiv.style = "margin-top: 330px; margin-left: 50px; position: absolute;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Aqua; margin-left: 20px;"
        } else if (position === "RB") {
            newDiv.style = "margin-top: 430px; margin-left: 50px; position: absolute;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Aqua; margin-left: 20px;"
        } else if (position === "LWB") {
            newDiv.style = "margin-top: 50px; margin-left: 150px; position: absolute;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Aqua; margin-left: 20px;"
        } else if (position === "RWB") {
            newDiv.style = "margin-top: 430px; margin-left: 150px; position: absolute;"
            player.style = "width: 20px; height: 20px; border-radius: 50%; background-color: Aqua; margin-left: 20px;"
        } else if (position === "CDM") {
            newDiv.style = "margin-top: 240px; margin-left: 150px; position: absolute;"
            player.style = "width: 20px; height: 20px; border-radius: 50%; background-color: Aqua; margin-left: 20px;"
        } else if (position === "CAM") {
            newDiv.style = "margin-top: 240px; margin-left: 280px; position: absolute;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Aqua; margin-left: 20px;"
        } else if (position === "LCM") {
            newDiv.style = "margin-top: 180px; margin-left: 215px; position: absolute;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Aqua; margin-left: 20px;"
        } else if (position === "RCM") {
            newDiv.style = "margin-top: 300px; margin-left: 215px;  position: absolute;"
            player.style = "width: 20px; height: 20px; border-radius: 50%; background-color: Aqua; margin-left: 20px;"
        } else if (position === "LM") {
            newDiv.style = "margin-top: 50px; margin-left: 215px; position: absolute;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Aqua; margin-left: 20px;"
        } else if (position === "RM") {
            newDiv.style = "margin-top: 430px; margin-left: 215px; position: absolute;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Aqua; margin-left: 20px;"
        } else if (position === "LW") {
            newDiv.style = "margin-top: 50px; margin-left: 280px;  position: absolute;"
            player.style = "width: 20px; height: 20px; border-radius: 50%; background-color: Aqua; margin-left: 20px; text-align: center;"
        } else if (position === "RW") {
            newDiv.style = "margin-top: 430px; margin-left: 280px; position: absolute;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Aqua; margin-left: 20px;"
        } else if (position === "LST") {
            newDiv.style = "margin-top: 180px; margin-left: 340px; position: absolute;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Aqua; margin-left: 20px;"
        } else if (position === "RST") {
            newDiv.style = "margin-top: 300px; margin-left: 340px;  position: absolute;"
            player.style = "width: 20px; height: 20px; border-radius: 50%; background-color: Aqua; margin-left: 20px;"
        } else if (position === "CF") {
            newDiv.style = "margin-top: 240px; margin-left: 340px; position: absolute;"
            player.style = "width: 20px; height: 20px; border-radius: 50%; background-color: Aqua; margin-left: 20px;"
        }

        this.team1players[number] = this.createPlayer(position, name, number)

        if (this.infoBox != null) {
            player.addEventListener("click", () => {
                this.showPlayerStatsTeam1(number, ratingsEnabled)
            })
        }
        player.textContent = number
        newDiv.append(player)

        const nameDiv = document.createElement('div')
        const playerName = document.createTextNode(lastName)
        nameDiv.style = "color: white; font-size: 9px; width: 60px; text-align: center;"
        nameDiv.append(playerName)
        newDiv.append(nameDiv)

        const pitch = this.pitch
        pitch.append(newDiv)
    },

    addPlayerTeam2: function (position, firstName, lastName, number, ratingsEnabled) {

        if (this.checkTeam2(number, position)){
            console.log("collision")
            return;
        }

        const newDiv = document.createElement('div')
        const player = document.createElement('button')
        newDiv.id = name
        if (position === "GK") {
            newDiv.style = "margin-top: 240px; margin-left: 740px; position: absolute; text: center;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Pink; margin-left: 20px;"
        } else if (position === "RB") {
            newDiv.style = "margin-top: 50px; margin-left: 690px; position: absolute; text: center;"
            player.style = "width: 20px; height: 20px; border-radius: 50%; background-color: Pink; margin-left: 20px;"
        } else if (position === "RCB") {
            newDiv.style = "margin-top: 150px; margin-left: 690px; position: absolute; text: center;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Pink; margin-left: 20px;"
        } else if (position === "CCB") {
            newDiv.style = "margin-top: 240px; margin-left: 690px; position: absolute; text: center;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Pink; margin-left: 20px;"
        } else if (position === "LCB") {
            newDiv.style = "margin-top: 330px; margin-left: 690px; position: absolute; text: center;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Pink; margin-left: 20px;"
        } else if (position === "LB") {
            newDiv.style = "margin-top: 430px; margin-left: 690px; position: absolute; text: center;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Pink; margin-left: 20px;"
        } else if (position === "RWB") {
            newDiv.style = "margin-top: 50px; margin-left: 590px; position: absolute; text: center;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Pink; margin-left: 20px;"
        } else if (position === "LWB") {
            newDiv.style = "margin-top: 430px; margin-left: 590px; position: absolute; text: center;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Pink; margin-left: 20px;"
        } else if (position === "CDM") {
            newDiv.style = "margin-top: 240px; margin-left: 590px; position: absolute; text: center;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Pink; margin-left: 20px;"
        } else if (position === "CAM") {
            newDiv.style = "margin-top: 240px; margin-left: 460px; position: absolute; text: center;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Pink; margin-left: 20px;"
        } else if (position === "RCM") {
            newDiv.style = "margin-top: 180px; margin-left: 525px; position: absolute; text: center;"
            player.style = "width: 20px; height: 20px; border-radius: 50%; background-color: Pink; margin-left: 20px;"
        } else if (position === "LCM") {
            newDiv.style = "margin-top: 300px; margin-left: 525px; position: absolute; text: center;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Pink; margin-left: 20px;"
        } else if (position === "RM") {
            newDiv.style = "margin-top: 50px; margin-left: 525px; position: absolute; text: center;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Pink; margin-left: 20px;"
        } else if (position === "LM") {
            newDiv.style = "margin-top: 430px; margin-left: 525px;  position: absolute; text: center;"
            player.style = "width: 20px; height: 20px; border-radius: 50%; background-color: Pink; margin-left: 20px;"
        } else if (position === "RW") {
            newDiv.style = "margin-top: 50px; margin-left: 460px;  position: absolute; text: center;"
            player.style = "width: 20px; height: 20px; border-radius: 50%; background-color: Pink; margin-left: 20px;"
        } else if (position === "LW") {
            newDiv.style = "margin-top: 430px; margin-left: 460px;  position: absolute; text: center;"
            player.style = "width: 20px; height: 20px; border-radius: 50%; background-color: Pink; margin-left: 20px;"
        } else if (position === "RST") {
            newDiv.style = "margin-top: 180px; margin-left: 400px; position: absolute; text: center;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Pink; margin-left: 20px;"
        } else if (position === "LST") {
            newDiv.style = "margin-top: 300px; margin-left: 400px; position: absolute; text: center;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Pink; margin-left: 20px;"
        } else if (position === "CF") {
            newDiv.style = "margin-top: 240px; margin-left: 400px; position: absolute; text: center;"
            player.style = "width: 20px; height: 20px; border-radius: 50%;  background-color: Pink; margin-left: 20px;"
        }

        player.textContent = number
        this.team2players[number] = this.createPlayer(position, firstName + " " + lastName, number)
        player.addEventListener("click", () => {
            this.showPlayerStatsTeam2(number, ratingsEnabled)
        });
        newDiv.append(player)
        const nameDiv = document.createElement('div')
        const playerName = document.createTextNode(lastName)
        nameDiv.style = "color: white; font-size: 9px; width: 60px; text-align: center;"
        nameDiv.append(playerName)
        newDiv.append(nameDiv)

        const pitch = this.pitch
        pitch.append(newDiv)
    },

    checkTeam1: function (number, position) {
        if (this.team1players[number] != null){
            console.log("number collision")
            return true
        }
        if (Object.entries(this.team1players).length > 10){
            console.log("team already has 11 players")
            return true
        }

        return Object.entries(this.team1players).some(function (elem) {
            if (elem[1].position === position) {
                console.log("position collision")
                return true
            }
        });
    },

    checkTeam2: function (number, position) {
        if (this.team2players[number] != null){
            console.log("number collision")
            return true
        }
        if (Object.entries(this.team2players).length > 10){
            console.log("team already has 11 players")
            return true
        }

        return Object.entries(this.team2players).some(function (elem) {
            if (elem[1].position === position) {
                console.log("position collision")
                return true
            }
        });
    },

    drawInfoBox: function (team1, team2) {
        const infoBox = document.createElement('div')
        infoBox.style = "width: 802px; height: 300px; border-width: 2px; border-style: solid; border-color: black; margin-left: 10px;"
        this.infoBox = infoBox

        const team1NameDiv = document.createElement('div')
        const team1Text = document.createTextNode(team1)
        const team2NameDiv = document.createElement('div')
        const team2Text = document.createTextNode(team2)
        team2NameDiv.append(team2Text)
        team1NameDiv.append(team1Text)
        team1NameDiv.style = "margin-left: 50px; width: 401px: height: 20px; text-align: left; position: absolute;"
        team2NameDiv.style = "margin-left: 401px; width: 401px: height: 20px; text-align: right; position: absolute;"

        infoBox.append(team1NameDiv)
        infoBox.append(team2NameDiv)

        const body = document.querySelector("body")
        body.append(infoBox)
    },

    createPlayer: function (position, name, number) {
        return {
            position: position,
            name: name,
            number: number,
            goals: 0,
            played: 0,
            shots: 0,
            saves: 0,
            foulsCommitted: 0,
            yellowCards: 0,
            redCards: 0,
            xGoals: 0,
            xGoalsAgainst: 0,
            rating: 0,
            goalsAgainst: 0,
            shotsAgainst: 0
        }
    },

    showPlayerStatsTeam1: function (number, ratingsEnabled) {
        const playerStats = document.createElement('div')
        playerStats.id = "team1playerstats"
        playerStats.style = "height: 280px; margin-top: 20px; width: 401px; position: absolute;"

        const nameDiv = document.createElement('div')
        const nameText = document.createTextNode("Name: " + this.team1players[number].name)
        nameDiv.style = "margin-left: 50px; margin-top: 20px; width: 401px: height: 20px; text-align: left; position: absolute;"
        nameDiv.append(nameText)
        playerStats.append(nameDiv)

        const numberDiv = document.createElement('div')
        const numberText = document.createTextNode("Jersey number: " + this.team1players[number].number)
        numberDiv.style = "margin-left: 50px; margin-top: 40px; width: 401px: height: 20px; text-align: left; position: absolute;"
        numberDiv.append(numberText)
        playerStats.append(numberDiv)

        if (this.team1players[number].position !== "GK") {
            const goalsDiv = document.createElement('div')
            const goalsText = document.createTextNode("Goals: " + this.team1players[number].goals)
            goalsDiv.style = "margin-left: 50px; margin-top: 60px; width: 401px: height: 20px; text-align: left; position: absolute;"
            goalsDiv.append(goalsText)
            playerStats.append(goalsDiv)

            const shotsDiv = document.createElement('div')
            const shotsText = document.createTextNode("Shots: " + this.team1players[number].shots)
            shotsDiv.style = "margin-left: 50px; margin-top: 80px; width: 401px: height: 20px; text-align: left; position: absolute;"
            shotsDiv.append(shotsText)
            playerStats.append(shotsDiv)

            const foulsDiv = document.createElement('div')
            const foulsText = document.createTextNode("Fouls Committed: " + this.team1players[number].foulsCommitted)
            foulsDiv.style = "margin-left: 50px; margin-top: 100px; width: 401px: height: 20px; text-align: left; position: absolute;"
            foulsDiv.append(foulsText)
            playerStats.append(foulsDiv)

            const yellowDiv = document.createElement('div')
            const yellowText = document.createTextNode("Yellow Cards: " + this.team1players[number].yellowCards)
            yellowDiv.style = "margin-left: 50px; margin-top: 120px; width: 401px: height: 20px; text-align: left; position: absolute;"
            yellowDiv.append(yellowText)
            playerStats.append(yellowDiv)

            const redDiv = document.createElement('div')
            const redText = document.createTextNode("Red Cards: " + this.team1players[number].redCards)
            redDiv.style = "margin-left: 50px; margin-top: 140px; width: 401px: height: 20px; text-align: left; position: absolute;"
            redDiv.append(redText)
            playerStats.append(redDiv)

            const xGoalsDiv = document.createElement('div')
            const xGoalsText = document.createTextNode("Expected Goals: " + this.team1players[number].xGoals)
            xGoalsDiv.style = "margin-left: 50px; margin-top: 160px; width: 401px: height: 20px; text-align: left; position: absolute;"
            xGoalsDiv.append(xGoalsText)
            playerStats.append(xGoalsDiv)
        } else {
            const goalsAgainstDiv = document.createElement('div')
            const goalsAgainstText = document.createTextNode("Goals Against: " + this.team1players[number].goalsAgainst)
            goalsAgainstDiv.style = "margin-left: 50px; margin-top: 60px; width: 401px: height: 20px; text-align: left; position: absolute;"
            goalsAgainstDiv.append(goalsAgainstText)
            playerStats.append(goalsAgainstDiv)

            const shotsAgainstDiv = document.createElement('div')
            const shotsAgainstText = document.createTextNode("Shots Against: " + this.team1players[number].shotsAgainst)
            shotsAgainstDiv.style = "margin-left: 50px; margin-top: 80px; width: 401px: height: 20px; text-align: left; position: absolute;"
            shotsAgainstDiv.append(shotsAgainstText)
            playerStats.append(shotsAgainstDiv)

            const savesDiv = document.createElement('div')
            const savesText = document.createTextNode("Saves: " + this.team1players[number].saves)
            savesDiv.style = "margin-left: 50px; margin-top: 100px; width: 401px: height: 20px; text-align: left; position: absolute;"
            savesDiv.append(savesText)
            playerStats.append(savesDiv)

            const yellowDiv = document.createElement('div')
            const yellowText = document.createTextNode("Yellow Cards: " + this.team1players[number].yellowCards)
            yellowDiv.style = "margin-left: 50px; margin-top: 120px; width: 401px: height: 20px; text-align: left; position: absolute;"
            yellowDiv.append(yellowText)
            playerStats.append(yellowDiv)

            const redDiv = document.createElement('div')
            const redText = document.createTextNode("Red Cards: " + this.team1players[number].redCards)
            redDiv.style = "margin-left: 50px; margin-top: 140px; width: 401px: height: 20px; text-align: left; position: absolute;"
            redDiv.append(redText)
            playerStats.append(redDiv)

            const xGoalsAgainstDiv = document.createElement('div')
            const xGoalsAgainstText = document.createTextNode("Expected Goals Against: " + this.team1players[number].xGoalsAgainst)
            xGoalsAgainstDiv.style = "margin-left: 50px; margin-top: 160px; width: 401px: height: 20px; text-align: left; position: absolute;"
            xGoalsAgainstDiv.append(xGoalsAgainstText)
            playerStats.append(xGoalsAgainstDiv)
        }

        const positionDiv = document.createElement('div')
        const positionText = document.createTextNode("Position: " + this.team1players[number].position)
        positionDiv.style = "margin-left: 50px; margin-top: 180px; width: 401px: height: 20px; text-align: left; position: absolute;"
        positionDiv.append(positionText)
        playerStats.append(positionDiv)

        if (ratingsEnabled === true) {
            const ratingDiv = document.createElement('div')
            const ratingText = document.createTextNode("Player rating: " + this.team1players[number].rating)
            ratingDiv.style = "margin-left: 50px; margin-top: 220px; width: 401px: height: 20px; text-align: left; position: absolute;"
            ratingDiv.append(ratingText)
            playerStats.append(ratingDiv)
        }

        const oldPlayerstats = document.querySelector("#team1playerstats")
        if (oldPlayerstats == null) {
            this.infoBox.appendChild(playerStats)
        } else {
            this.infoBox.replaceChild(playerStats, oldPlayerstats)
        }
    },

    showPlayerStatsTeam2: function (number, ratingsEnabled) {
        const playerStats = document.createElement('div')
        playerStats.id = "team2playerstats"
        playerStats.style = "margin-left: 401px; height: 280px; margin-top: 20px; width: 401px; position: absolute;"

        const nameDiv = document.createElement('div')
        const nameText = document.createTextNode("Name: " + this.team2players[number].name)
        nameDiv.style = " margin-top: 20px; width: 401px: height: 20px; text-align: left; position: absolute;"
        nameDiv.append(nameText)
        playerStats.append(nameDiv)

        const numberDiv = document.createElement('div')
        const numberText = document.createTextNode("Jersey number: " + this.team2players[number].number)
        numberDiv.style = " margin-top: 40px; width: 401px: height: 20px; text-align: left; position: absolute;"
        numberDiv.append(numberText)
        playerStats.append(numberDiv)

        if (this.team2players[number].position !== "GK") {
            const goalsDiv = document.createElement('div')
            const goalsText = document.createTextNode("Goals: " + this.team2players[number].goals)
            goalsDiv.style = " margin-top: 60px; width: 401px: height: 20px; text-align: left; position: absolute;"
            goalsDiv.append(goalsText)
            playerStats.append(goalsDiv)

            const shotsDiv = document.createElement('div')
            const shotsText = document.createTextNode("Shots: " + this.team2players[number].shots)
            shotsDiv.style = " margin-top: 80px; width: 401px: height: 20px; text-align: left; position: absolute;"
            shotsDiv.append(shotsText)
            playerStats.append(shotsDiv)

            const foulsDiv = document.createElement('div')
            const foulsText = document.createTextNode("Fouls Committed: " + this.team2players[number].foulsCommitted)
            foulsDiv.style = " margin-top: 100px; width: 401px: height: 20px; text-align: left; position: absolute;"
            foulsDiv.append(foulsText)
            playerStats.append(foulsDiv)

            const yellowDiv = document.createElement('div')
            const yellowText = document.createTextNode("Yellow Cards: " + this.team2players[number].yellowCards)
            yellowDiv.style = " margin-top: 120px; width: 401px: height: 20px; text-align: left; position: absolute;"
            yellowDiv.append(yellowText)
            playerStats.append(yellowDiv)

            const redDiv = document.createElement('div')
            const redText = document.createTextNode("Red Cards: " + this.team2players[number].redCards)
            redDiv.style = " margin-top: 140px; width: 401px: height: 20px; text-align: left; position: absolute;"
            redDiv.append(redText)
            playerStats.append(redDiv)

            const xGoalsDiv = document.createElement('div')
            const xGoalsText = document.createTextNode("Expected Goals: " + this.team2players[number].xGoals)
            xGoalsDiv.style = " margin-top: 160px; width: 401px: height: 20px; text-align: left; position: absolute;"
            xGoalsDiv.append(xGoalsText)
            playerStats.append(xGoalsDiv)
        } else {
            const goalsAgainstDiv = document.createElement('div')
            const goalsAgainstText = document.createTextNode("Goals Against: " + this.team2players[number].goalsAgainst)
            goalsAgainstDiv.style = " margin-top: 60px; width: 401px: height: 20px; text-align: left; position: absolute;"
            goalsAgainstDiv.append(goalsAgainstText)
            playerStats.append(goalsAgainstDiv)

            const shotsAgainstDiv = document.createElement('div')
            const shotsAgainstText = document.createTextNode("Shots Against: " + this.team2players[number].shotsAgainst)
            shotsAgainstDiv.style = " margin-top: 80px; width: 401px: height: 20px; text-align: left; position: absolute;"
            shotsAgainstDiv.append(shotsAgainstText)
            playerStats.append(shotsAgainstDiv)

            const savesDiv = document.createElement('div')
            const savesText = document.createTextNode("Saves: " + this.team2players[number].saves)
            savesDiv.style = " margin-top: 100px; width: 401px: height: 20px; text-align: left; position: absolute;"
            savesDiv.append(savesText)
            playerStats.append(savesDiv)

            const yellowDiv = document.createElement('div')
            const yellowText = document.createTextNode("Yellow Cards: " + this.team2players[number].yellowCards)
            yellowDiv.style = " margin-top: 120px; width: 401px: height: 20px; text-align: left; position: absolute;"
            yellowDiv.append(yellowText)
            playerStats.append(yellowDiv)

            const redDiv = document.createElement('div')
            const redText = document.createTextNode("Red Cards: " + this.team2players[number].redCards)
            redDiv.style = " margin-top: 140px; width: 401px: height: 20px; text-align: left; position: absolute;"
            redDiv.append(redText)
            playerStats.append(redDiv)

            const xGoalsAgainstDiv = document.createElement('div')
            const xGoalsAgainstText = document.createTextNode("Expected Goals Against: " + this.team2players[number].xGoalsAgainst)
            xGoalsAgainstDiv.style = " margin-top: 160px; width: 401px: height: 20px; text-align: left; position: absolute;"
            xGoalsAgainstDiv.append(xGoalsAgainstText)
            playerStats.append(xGoalsAgainstDiv)
        }

        const positionDiv = document.createElement('div')
        const positionText = document.createTextNode("Position: " + this.team2players[number].position)
        positionDiv.style = "margin-top: 180px; width: 401px: height: 20px; text-align: left; position: absolute;"
        positionDiv.append(positionText)
        playerStats.append(positionDiv)

        if (ratingsEnabled === true) {
            const ratingDiv = document.createElement('div')
            const ratingText = document.createTextNode("Player rating: " + this.team2players[number].rating)
            ratingDiv.style = "margin-top: 220px; width: 401px: height: 20px; text-align: left; position: absolute;"
            ratingDiv.append(ratingText)
            playerStats.append(ratingDiv)
        }

        const oldPlayerstats = document.querySelector("#team2playerstats")
        if (oldPlayerstats === null) {
            this.infoBox.appendChild(playerStats)
        } else {
            this.infoBox.replaceChild(playerStats, oldPlayerstats)
        }
    },

    setTeam1goals: function (playerNumber, numGoals) {
        this.team1players[playerNumber].goals = numGoals
    },
    setTeam2goals: function (playerNumber, numGoals) {
        this.team2players[playerNumber].goals = numGoals
    },
    setTeam1played: function (playerNumber, numPlayed) {
        this.team1players[playerNumber].played = numPlayed
    },
    setTeam2played: function (playerNumber, numPlayed) {
        this.team2players[playerNumber].played = numPlayed
    },
    setTeam1shots: function (playerNumber, numShots) {
        this.team1players[playerNumber].shots = numShots
    },
    setTeam2shots: function (playerNumber, numShots) {
        this.team2players[playerNumber].shots = numShots
    },
    setTeam1saves: function (playerNumber, numSaves) {
        this.team1players[playerNumber].saves = numSaves
    },
    setTeam2saves: function (playerNumber, numSaves) {
        this.team2players[playerNumber].saves = numSaves
    },
    setTeam1shotsAgainst: function (playerNumber, numShotsAgainst) {
        this.team1players[playerNumber].shotsAgainst = numShotsAgainst
    },
    setTeam2shotsAgainst: function (playerNumber, numShotsAgainst) {
        this.team2players[playerNumber].shotsAgainst = numShotsAgainst
    },
    setTeam1yellowCards: function (playerNumber, numYellowCards) {
        this.team1players[playerNumber].yellowCards = numYellowCards
    },
    setTeam2yellowCards: function (playerNumber, numYellowCards) {
        this.team2players[playerNumber].yellowCards = numYellowCards
    },
    setTeam1redCards: function (playerNumber, numRedCards) {
        this.team1players[playerNumber].redCards = numRedCards
    },
    setTeam2redCards: function (playerNumber, numRedCards) {
        this.team2players[playerNumber].redCards = numRedCards
    },
    setTeam1foulsCommitted: function (playerNumber, numFoulsCommitted) {
        this.team1players[playerNumber].foulsCommitted = numFoulsCommitted
    },
    setTeam2foulsCommitted: function (playerNumber, numFoulsCommitted) {
        this.team2players[playerNumber].foulsCommitted = numFoulsCommitted
    },
    setTeam1xGoals: function (playerNumber, numxGoals) {
        this.team1players[playerNumber].xGoals = numxGoals
    },
    setTeam2xGoals: function (playerNumber, numxGoals) {
        this.team2players[playerNumber].xGoals = numxGoals
    },
    setTeam1xGoalsAgainst: function (playerNumber, numxGoalsAgainst) {
        this.team1players[playerNumber].xGoalsAgainst = numxGoalsAgainst
    },
    setTeam2xGoalsAgainst: function (playerNumber, numxGoalsAgainst) {
        this.team2players[playerNumber].xGoalsAgainst = numxGoalsAgainst
    },
    setTeam1rating: function (playerNumber, numRating) {
        this.team1players[playerNumber].rating = numRating
    },
    setTeam2rating: function (playerNumber, numRating) {
        this.team2players[playerNumber].rating = numRating
    },
    setTeam1goalsAgainst: function (playerNumber, numGoalsAgainst) {
        this.team1players[playerNumber].goalsAgainst = numGoalsAgainst
    },
    setTeam2goalsAgainst: function (playerNumber, numGoalsAgainst) {
        this.team2players[playerNumber].goalsAgainst = numGoalsAgainst
    },
    getTeam1goals: function (playerNumber) {
        return this.team1players[playerNumber].goals
    },
    getTeam2goals: function (playerNumber) {
        return this.team2players[playerNumber].goals
    },
    getTeam1played: function (playerNumber) {
        return this.team1players[playerNumber].played
    },
    getTeam2played: function (playerNumber) {
        return this.team2players[playerNumber].played
    },
    getTeam1shots: function (playerNumber) {
        return this.team1players[playerNumber].shots
    },
    getTeam2shots: function (playerNumber) {
        return this.team2players[playerNumber].shots
    },
    getTeam1saves: function (playerNumber) {
        return this.team1players[playerNumber].saves
    },
    getTeam2saves: function (playerNumber) {
        return this.team2players[playerNumber].saves
    },
    getTeam1shotsAgainst: function (playerNumber) {
        return this.team1players[playerNumber].shotsAgainst
    },
    getTeam2shotsAgainst: function (playerNumber) {
        return this.team2players[playerNumber].shotsAgainst
    },
    getTeam1yellowCards: function (playerNumber) {
        return this.team1players[playerNumber].yellowCards
    },
    getTeam2yellowCards: function (playerNumber) {
        return this.team2players[playerNumber].yellowCards
    },
    getTeam1redCards: function (playerNumber) {
        return this.team1players[playerNumber].redCards
    },
    getTeam2redCards: function (playerNumber) {
        return this.team2players[playerNumber].redCards
    },
    getTeam1foulsCommitted: function (playerNumber) {
        return this.team1players[playerNumber].foulsCommitted
    },
    getTeam2foulsCommitted: function (playerNumber) {
        return this.team2players[playerNumber].foulsCommitted
    },
    getTeam1xGoals: function (playerNumber) {
        return this.team1players[playerNumber].xGoals
    },
    getTeam2xGoals: function (playerNumber) {
        return this.team2players[playerNumber].xGoals
    },
    getTeam1xGoalsAgainst: function (playerNumber) {
        return this.team1players[playerNumber].xGoalsAgainst
    },
    getTeam2xGoalsAgainst: function (playerNumber) {
        return this.team2players[playerNumber].xGoalsAgainst
    },
    getTeam1rating: function (playerNumber) {
        return this.team1players[playerNumber].rating
    },
    getTeam2rating: function (playerNumber) {
        return this.team2players[playerNumber].rating
    },
    getTeam1goalsAgainst: function (playerNumber) {
        return this.team1players[playerNumber].goalsAgainst
    },
    getTeam2goalsAgainst: function (playerNumber) {
        return this.team2players[playerNumber].goalsAgainst
    },
    getTeam1Players: function () {
        return this.team1players
    },
    getTeam2Players: function () {
        return this.team2players
    },
    getPositions: function () {
        return this.positions
    },
    setTeam1PlayerStats: function (playerNumber, numGoals, numPlayed, numGoalsAgainst, numShotsAgainst, numShots, numxGoalsAgainst, numxGoals, numRating, numSaves, numFoulsCommitted, numRedCards, numYellowCards) {
        this.team1players[playerNumber].goals = numGoals
        this.team1players[playerNumber].played = numPlayed
        this.team1players[playerNumber].shots = numShots
        this.team1players[playerNumber].saves = numSaves
        this.team1players[playerNumber].shotsAgainst = numShotsAgainst
        this.team1players[playerNumber].yellowCards = numYellowCards
        this.team1players[playerNumber].redCards = numRedCards
        this.team1players[playerNumber].foulsCommitted = numFoulsCommitted
        this.team1players[playerNumber].xGoals = numxGoals
        this.team1players[playerNumber].xGoalsAgainst = numxGoalsAgainst
        this.team1players[playerNumber].rating = numRating
        this.team1players[playerNumber].goalsAgainst = numGoalsAgainst

    },
    setTeam2PlayerStats: function (playerNumber, numGoals, numPlayed, numGoalsAgainst, numShotsAgainst, numShots, numxGoalsAgainst, numxGoals, numRating, numSaves, numFoulsCommitted, numRedCards, numYellowCards) {
        this.team2players[playerNumber].goals = numGoals
        this.team2players[playerNumber].played = numPlayed
        this.team2players[playerNumber].shots = numShots
        this.team2players[playerNumber].saves = numSaves
        this.team2players[playerNumber].shotsAgainst = numShotsAgainst
        this.team2players[playerNumber].yellowCards = numYellowCards
        this.team2players[playerNumber].foulsCommitted = numFoulsCommitted
        this.team2players[playerNumber].redCards = numRedCards
        this.team2players[playerNumber].xGoals = numxGoals
        this.team2players[playerNumber].xGoalsAgainst = numxGoalsAgainst
        this.team2players[playerNumber].rating = numRating
        this.team2players[playerNumber].goalsAgainst = numGoalsAgainst
    }
}
