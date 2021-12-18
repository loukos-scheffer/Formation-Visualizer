"use strict";

function FormationVisualizer() {
    this.pitch = null
    this.team1players = {}
    this.team2players = {}
    this.infoBox = null
    this.team1color = null
    this.team2color = null
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

    drawPitch: function (infobox, team1, team2, team1score, team2score, team1color, team2color, scoringEnabled, htmlElem) {
        this.team1color = team1color
        this.team2color = team2color

        const pitch = document.createElement('div')
        pitch.id = "pitch"
        pitch.style = "width: 802px; height: 502px; margin: 10px; background-color: Green;"

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



        if (infobox === true) {
            const infoboxPitchWrapper = document.createElement('div')
            infoboxPitchWrapper.append(pitch)
            this.drawInfoBox(team1, team2, team1score, team2score, scoringEnabled, infoboxPitchWrapper)
            htmlElem.append(infoboxPitchWrapper)
            this.pitch = pitch
        }else{
            htmlElem.append(pitch)
            this.pitch = pitch
        }
    },

    addPlayerTeam1: function (position, firstName, lastName, number, ratingsEnabled, imageUrl) {
        if (this.checkTeam1(number, position)){
            return;
        }

        const newDiv = document.createElement('div')
        const player = document.createElement('button')
        newDiv.id = name
        if (position === "GK") {
            newDiv.style = "margin-top: 240px; margin-left: 5px; position: absolute;"
            player.style = `width: 20px; height: 20px; border-radius: 50%; background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "LB") {
            newDiv.style = "margin-top: 50px; margin-left: 50px; position: absolute;"
            player.style = `width: 20px; height: 20px; border-radius: 50%; background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "LCB") {
            newDiv.style = "margin-top: 150px; margin-left: 50px; position: absolute;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "CCB") {
            newDiv.style = "margin-top: 240px; margin-left: 50px; position: absolute;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "RCB") {
            newDiv.style = "margin-top: 330px; margin-left: 50px; position: absolute;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "RB") {
            newDiv.style = "margin-top: 430px; margin-left: 50px; position: absolute;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "LWB") {
            newDiv.style = "margin-top: 50px; margin-left: 150px; position: absolute;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "RWB") {
            newDiv.style = "margin-top: 430px; margin-left: 150px; position: absolute;"
            player.style = `width: 20px; height: 20px; border-radius: 50%; background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "CDM") {
            newDiv.style = "margin-top: 240px; margin-left: 150px; position: absolute;"
            player.style = `width: 20px; height: 20px; border-radius: 50%; background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "CAM") {
            newDiv.style = "margin-top: 240px; margin-left: 280px; position: absolute;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "LCM") {
            newDiv.style = "margin-top: 180px; margin-left: 215px; position: absolute;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "RCM") {
            newDiv.style = "margin-top: 300px; margin-left: 215px;  position: absolute;"
            player.style = `width: 20px; height: 20px; border-radius: 50%; background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "LM") {
            newDiv.style = "margin-top: 50px; margin-left: 215px; position: absolute;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "RM") {
            newDiv.style = "margin-top: 430px; margin-left: 215px; position: absolute;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "LW") {
            newDiv.style = "margin-top: 50px; margin-left: 280px;  position: absolute;"
            player.style = `width: 20px; height: 20px; border-radius: 50%; background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "RW") {
            newDiv.style = "margin-top: 430px; margin-left: 280px; position: absolute;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "LST") {
            newDiv.style = "margin-top: 180px; margin-left: 340px; position: absolute;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "RST") {
            newDiv.style = "margin-top: 300px; margin-left: 340px;  position: absolute;"
            player.style = `width: 20px; height: 20px; border-radius: 50%; background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "CF") {
            newDiv.style = "margin-top: 240px; margin-left: 340px; position: absolute;"
            player.style = `width: 20px; height: 20px; border-radius: 50%; background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        }

        this.team1players[number] = this.createPlayer(position,firstName + " " + lastName, number, imageUrl)

        if (this.infoBox != null) {
            player.addEventListener("click", () => {
                this.showPlayerStatsTeam1(number, ratingsEnabled)
            })
        }
        player.textContent = number
        newDiv.append(player)

        const nameDiv = document.createElement('div')
        const playerName = document.createTextNode(lastName + " ")
        nameDiv.style = "color: white; font-size: 9px; width: 60px; text-align: center;"
        nameDiv.append(playerName)
        const infoDiv = document.createElement('div')
        infoDiv.style = "display: inline-flex;"
        infoDiv.id = "team1player" + number + "matchinfo"
        newDiv.append(nameDiv)
        nameDiv.append(infoDiv)

        const pitch = this.pitch
        pitch.append(newDiv)
    },

    addPlayerTeam2: function (position, firstName, lastName, number, ratingsEnabled, imageUrl) {

        if (this.checkTeam2(number, position)){
            console.log("collision")
            return;
        }

        const newDiv = document.createElement('div')
        const player = document.createElement('button')
        newDiv.id = name
        if (position === "GK") {
            newDiv.style = "margin-top: 240px; margin-left: 740px; position: absolute; text: center;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "RB") {
            newDiv.style = "margin-top: 50px; margin-left: 690px; position: absolute; text: center;"
            player.style = `width: 20px; height: 20px; border-radius: 50%; background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "RCB") {
            newDiv.style = "margin-top: 150px; margin-left: 690px; position: absolute; text: center;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "CCB") {
            newDiv.style = "margin-top: 240px; margin-left: 690px; position: absolute; text: center;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "LCB") {
            newDiv.style = "margin-top: 330px; margin-left: 690px; position: absolute; text: center;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "LB") {
            newDiv.style = "margin-top: 430px; margin-left: 690px; position: absolute; text: center;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "RWB") {
            newDiv.style = "margin-top: 50px; margin-left: 590px; position: absolute; text: center;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "LWB") {
            newDiv.style = "margin-top: 430px; margin-left: 590px; position: absolute; text: center;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "CDM") {
            newDiv.style = "margin-top: 240px; margin-left: 590px; position: absolute; text: center;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "CAM") {
            newDiv.style = "margin-top: 240px; margin-left: 460px; position: absolute; text: center;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "RCM") {
            newDiv.style = "margin-top: 180px; margin-left: 525px; position: absolute; text: center;"
            player.style = `width: 20px; height: 20px; border-radius: 50%; background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "LCM") {
            newDiv.style = "margin-top: 300px; margin-left: 525px; position: absolute; text: center;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "RM") {
            newDiv.style = "margin-top: 50px; margin-left: 525px; position: absolute; text: center;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "LM") {
            newDiv.style = "margin-top: 430px; margin-left: 525px;  position: absolute; text: center;"
            player.style = `width: 20px; height: 20px; border-radius: 50%; background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "RW") {
            newDiv.style = "margin-top: 50px; margin-left: 460px;  position: absolute; text: center;"
            player.style = `width: 20px; height: 20px; border-radius: 50%; background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "LW") {
            newDiv.style = "margin-top: 430px; margin-left: 460px;  position: absolute; text: center;"
            player.style = `width: 20px; height: 20px; border-radius: 50%; background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "RST") {
            newDiv.style = "margin-top: 180px; margin-left: 400px; position: absolute; text: center;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "LST") {
            newDiv.style = "margin-top: 300px; margin-left: 400px; position: absolute; text: center;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        } else if (position === "CF") {
            newDiv.style = "margin-top: 240px; margin-left: 400px; position: absolute; text: center;"
            player.style = `width: 20px; height: 20px; border-radius: 50%;  background-color: ${this.team1color}; margin-left: 20px; display: flex; align-items: center; justify-content: center;`
        }

        player.textContent = number
        this.team2players[number] = this.createPlayer(position, firstName + " " + lastName, number, imageUrl)
        player.addEventListener("click", () => {
            this.showPlayerStatsTeam2(number, ratingsEnabled)
        });
        newDiv.append(player)

        const nameDiv = document.createElement('div')
        const playerName = document.createTextNode(lastName + " ")
        nameDiv.style = "color: white; font-size: 9px; width: 60px; text-align: center;"
        nameDiv.append(playerName)
        const infoDiv = document.createElement('div')
        infoDiv.style = "display: inline-flex;"
        infoDiv.id = "team2player" + number + "matchinfo"
        newDiv.append(nameDiv)
        nameDiv.append(infoDiv)

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

    drawInfoBox: function (team1, team2, team1score, team2score, scoringEnabled, htmlElem) {
        const infoBox = document.createElement('div')
        infoBox.style = "width: 802px; height: 300px; border-width: 2px; border-style: solid; border-color: grey; margin-left: 10px; border-radius: 25px;"
        this.infoBox = infoBox

        const teamsDiv = document.createElement('div')
        teamsDiv.style = "width: 802px; height: 20px; display: inline-flex;"

        const scoreDiv = document.createElement('div')
        if (scoringEnabled){
            const score = document.createTextNode(team1score + " - "  + team2score)
            scoreDiv.append(score)
        }
        scoreDiv.style = "width: 52px;text-align: center; font: robinson; font-size: 18px;"


        const team1NameDiv = document.createElement('div')
        const team1Text = document.createTextNode(team1)
        const team2NameDiv = document.createElement('div')
        const team2Text = document.createTextNode(team2)

        team2NameDiv.append(team2Text)
        team1NameDiv.append(team1Text)
        team1NameDiv.style = "padding: auto; width: auto: height: 20px; font-size: 14pt; text-align: center; margin-left: auto; margin-right: auto;"
        team2NameDiv.style = "padding: auto; width: auto: height: 20px; font-size: 14pt; text-align: center; margin-right: auto; margin-left: auto;"

        teamsDiv.append(team1NameDiv)
        teamsDiv.append(scoreDiv)
        teamsDiv.append(team2NameDiv)

        infoBox.append(teamsDiv)

        htmlElem.append(infoBox)
    },

    createPlayer: function (position, name, number, imageUrl) {
        return {
            position: position,
            name: name,
            number: number,
            imageUrl: imageUrl,
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
        const playerStatsContainer = document.createElement('container')
        playerStatsContainer.id = "team1playerStats"
        playerStatsContainer.style = "height: 280px; width: 401px; position: absolute; display: flex;"

        const playerStatsDiv = document.createElement('div')
        playerStatsDiv.style = "height: 280px; width: 401px; margin-top: 20px;"

        const stat1Container = document.createElement('container')
        const stat2Container = document.createElement('container')
        const stat3Container = document.createElement('container')
        const stat4Container = document.createElement('container')
        const stat5Container = document.createElement('container')
        const stat6Container = document.createElement('container')
        const stat7Container = document.createElement('container')
        const stat8Container = document.createElement('container')
        const stat9Container = document.createElement('container')
        const stat10Container = document.createElement('container')
        const stat11Container = document.createElement('container')
        const stat12Container = document.createElement('container')
        const stat13Container = document.createElement('container')

        stat1Container.style = "width: 250px; height: 20px; margin-top: 20px; position: absolute; display: flex;"
        stat2Container.style = "width: 250px; height: 20px; margin-top: 40px; position: absolute; display: flex;"
        stat3Container.style = "width: 250px; height: 20px; margin-top: 60px; position: absolute; display: flex;"
        stat4Container.style = "width: 250px; height: 20px; margin-top: 80px; position: absolute; display: flex;"
        stat5Container.style = "width: 250px; height: 20px; margin-top: 100px; position: absolute; display: flex;"
        stat6Container.style = "width: 250px; height: 20px; margin-top: 120px; position: absolute; display: flex;"
        stat7Container.style = "width: 250px; height: 20px; margin-top: 140px; position: absolute; display: flex;"
        stat8Container.style = "width: 250px; height: 20px; margin-top: 160px; position: absolute; display: flex;"
        stat9Container.style = "width: 250px; height: 20px; margin-top: 180px; position: absolute; display: flex;"
        stat10Container.style = "width: 250px; height: 20px; margin-top: 200px; position: absolute; display: flex;"
        stat11Container.style = "width: 250px; height: 20px; margin-top: 220px; position: absolute; display: flex;"
        stat12Container.style = "width: 250px; height: 20px; margin-top: 240px; position: absolute; display: flex;"
        stat13Container.style = "width: 250px; height: 20px; margin-top: 260px; position: absolute; display: flex;"

        const stat1Div = document.createElement('div')
        const stat2Div = document.createElement('div')
        const stat3Div = document.createElement('div')
        const stat4Div = document.createElement('div')
        const stat5Div = document.createElement('div')
        const stat6Div = document.createElement('div')
        const stat7Div = document.createElement('div')
        const stat8Div = document.createElement('div')
        const stat9Div = document.createElement('div')
        const stat10Div = document.createElement('div')
        const stat11Div = document.createElement('div')
        const stat12Div = document.createElement('div')
        const stat13Div = document.createElement('div')

        stat1Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat2Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat3Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat4Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat5Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat6Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat7Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat8Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat9Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat10Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat11Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat12Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat13Div.style = "width: 250px; height: 20px; display: inline-flex;"

        const stat1div1 = document.createElement('div')
        const stat1div2 = document.createElement('div')
        stat1div1.style = "display: inline-flex; padding-left: 5px;"
        stat1div2.style = "display: inline-flex; margin-left: auto;"

        const stat2div1 = document.createElement('div')
        const stat2div2 = document.createElement('div')
        stat2div1.style = "display: inline; padding-left: 5px;"
        stat2div2.style = "display: inline; margin-left: auto;"
        const stat3div1 = document.createElement('div')
        const stat3div2 = document.createElement('div')
        stat3div1.style = "display: inline; padding-left: 5px;"
        stat3div2.style = "display: inline; margin-left: auto;"
        const stat4div1 = document.createElement('div')
        const stat4div2 = document.createElement('div')
        stat4div1.style = "display: inline; padding-left: 5px;"
        stat4div2.style = "display: inline; margin-left: auto;"
        const stat5div1 = document.createElement('div')
        const stat5div2 = document.createElement('div')
        stat5div1.style = "display: inline; padding-left: 5px;"
        stat5div2.style = "display: inline; margin-left: auto;"
        const stat6div1 = document.createElement('div')
        const stat6div2 = document.createElement('div')
        stat6div1.style = "display: inline; padding-left: 5px;"
        stat6div2.style = "display: inline; margin-left: auto;"
        const stat7div1 = document.createElement('div')
        const stat7div2 = document.createElement('div')
        stat7div1.style = "display: inline; padding-left: 5px;"
        stat7div2.style = "display: inline; margin-left: auto;"
        const stat8div1 = document.createElement('div')
        const stat8div2 = document.createElement('div')
        stat8div1.style = "display: inline; padding-left: 5px;"
        stat8div2.style = "display: inline; margin-left: auto;"
        const stat9div1 = document.createElement('div')
        const stat9div2 = document.createElement('div')
        stat9div1.style = "display: inline; padding-left: 5px;"
        stat9div2.style = "display: inline; margin-left: auto;"
        const stat10div1 = document.createElement('div')
        const stat10div2 = document.createElement('div')
        stat10div1.style = "display: inline; padding-left: 5px;"
        stat10div2.style = "display: inline; margin-left: auto;"
        const stat11div1 = document.createElement('div')
        const stat11div2 = document.createElement('div')
        stat11div1.style = "display: inline; padding-left: 5px;"
        stat11div2.style = "display: inline; margin-left: auto;"
        const stat12div1 = document.createElement('div')
        const stat12div2 = document.createElement('div')
        stat12div1.style = "display: inline; padding-left: 5px;"
        stat12div2.style = "display: inline; margin-left: auto;"
        const stat13div1 = document.createElement('div')
        const stat13div2 = document.createElement('div')
        stat13div1.style = "display: inline; padding-left: 5px;"
        stat13div2.style = "display: inline; margin-left: auto;"

        const playerImageDiv = document.createElement('div')
        playerImageDiv.style = "margin-top: 40px; margin-left: 250px; padding: 3px: width: 145px;"

        const playerImage = document.createElement('img')
        playerImage.src = this.team1players[number].imageUrl
        playerImage.style = "width: 145px;"
        playerImageDiv.append(playerImage)

        stat1div1.append(document.createTextNode("Name: "))
        stat1div2.append(this.team1players[number].name)

        stat2div1.append(document.createTextNode("Number: "))
        stat2div2.append(this.team1players[number].number)

        if (this.team1players[number].position !== "GK") {

            stat3div1.append(document.createTextNode("Goals: "))
            stat3div2.append(this.team1players[number].goals)

            stat4div1.append(document.createTextNode("Shots: "))
            stat4div2.append(this.team1players[number].shots)

            stat5div1.append(document.createTextNode("Fouls Committed: "))
            stat5div2.append(this.team1players[number].foulsCommitted)

            stat8div1.append(document.createTextNode("Expected Goals: "))
            stat8div2.append(this.team1players[number].xGoals)

        } else {

            stat3div1.append(document.createTextNode("Goals Against: "))
            stat3div2.append(this.team1players[number].goalsAgainst)

            stat4div1.append(document.createTextNode("Shots Against: "))
            stat4div2.append(this.team1players[number].shotsAgainst)

            stat5div1.append(document.createTextNode("Saves: "))
            stat5div2.append(this.team1players[number].saves)

            stat8div1.append(document.createTextNode("Expected Goals Against: "))
            stat8div2.append(this.team1players[number].xGoalsAgainst)
        }

        stat6div1.append(document.createTextNode("Yellow Cards: "))
        stat6div2.append(this.team1players[number].yellowCards)

        stat7div1.append(document.createTextNode("Red Cards: "))
        stat7div2.append(this.team1players[number].redCards)

        stat9div1.append(document.createTextNode("Position: "))
        stat9div2.append(this.team1players[number].position)

        if (ratingsEnabled === true) {

            stat11div1.append(document.createTextNode("Rating: "))
            stat11div2.append(this.team1players[number].rating)
        }

        stat1Div.append(stat1div1)
        stat1Div.append(stat1div2)
        stat2Div.append(stat2div1)
        stat2Div.append(stat2div2)
        stat3Div.append(stat3div1)
        stat3Div.append(stat3div2)
        stat4Div.append(stat4div1)
        stat4Div.append(stat4div2)
        stat5Div.append(stat5div1)
        stat5Div.append(stat5div2)
        stat6Div.append(stat6div1)
        stat6Div.append(stat6div2)
        stat7Div.append(stat7div1)
        stat7Div.append(stat7div2)
        stat8Div.append(stat8div1)
        stat8Div.append(stat8div2)
        stat9Div.append(stat9div1)
        stat9Div.append(stat9div2)
        stat10Div.append(stat10div1)
        stat10Div.append(stat10div2)
        stat11Div.append(stat11div1)
        stat11Div.append(stat11div2)
        stat12Div.append(stat12div1)
        stat12Div.append(stat12div2)
        stat13Div.append(stat13div1)
        stat13Div.append(stat13div2)

        stat1Container.append(stat1Div)
        stat2Container.append(stat2Div)
        stat3Container.append(stat3Div)
        stat4Container.append(stat4Div)
        stat5Container.append(stat5Div)
        stat6Container.append(stat6Div)
        stat7Container.append(stat7Div)
        stat8Container.append(stat8Div)
        stat9Container.append(stat9Div)
        stat10Container.append(stat10Div)
        stat11Container.append(stat11Div)
        stat12Container.append(stat12Div)
        stat13Container.append(stat13Div)

        playerStatsDiv.append(stat1Container)
        playerStatsDiv.append(stat2Container)
        playerStatsDiv.append(stat3Container)
        playerStatsDiv.append(stat4Container)
        playerStatsDiv.append(stat5Container)
        playerStatsDiv.append(stat6Container)
        playerStatsDiv.append(stat7Container)
        playerStatsDiv.append(stat8Container)
        playerStatsDiv.append(stat9Container)
        playerStatsDiv.append(stat10Container)
        playerStatsDiv.append(stat11Container)
        playerStatsDiv.append(stat12Container)
        playerStatsDiv.append(stat13Container)

        playerStatsDiv.id = "player stats div"
        playerStatsContainer.append(playerStatsDiv)
        playerImageDiv.id = "player image div"
        playerStatsContainer.append(playerImageDiv)

        const oldPlayerstats = document.querySelector("#team1playerStats")
        if (oldPlayerstats == null) {
            this.infoBox.appendChild(playerStatsContainer)
        } else {
            this.infoBox.replaceChild(playerStatsContainer, oldPlayerstats)
        }
    },

    showPlayerStatsTeam2: function (number, ratingsEnabled) {

        const playerStatsContainer = document.createElement('container')
        playerStatsContainer.id = "team2playerStats"
        playerStatsContainer.style = "margin-left: 401px; height: 280px; width: 401px; position: absolute; display: flex;"

        const playerStatsDiv = document.createElement('div')
        playerStatsDiv.style = "height: 280px; width: 401px; margin-top: 20px;"

        const stat1Container = document.createElement('container')
        const stat2Container = document.createElement('container')
        const stat3Container = document.createElement('container')
        const stat4Container = document.createElement('container')
        const stat5Container = document.createElement('container')
        const stat6Container = document.createElement('container')
        const stat7Container = document.createElement('container')
        const stat8Container = document.createElement('container')
        const stat9Container = document.createElement('container')
        const stat10Container = document.createElement('container')
        const stat11Container = document.createElement('container')
        const stat12Container = document.createElement('container')
        const stat13Container = document.createElement('container')

        stat1Container.style = "width: 250px; height: 20px; margin-top: 20px; position: absolute; display: flex;"
        stat2Container.style = "width: 250px; height: 20px; margin-top: 40px; position: absolute; display: flex;"
        stat3Container.style = "width: 250px; height: 20px; margin-top: 60px; position: absolute; display: flex;"
        stat4Container.style = "width: 250px; height: 20px; margin-top: 80px; position: absolute; display: flex;"
        stat5Container.style = "width: 250px; height: 20px; margin-top: 100px; position: absolute; display: flex;"
        stat6Container.style = "width: 250px; height: 20px; margin-top: 120px; position: absolute; display: flex;"
        stat7Container.style = "width: 250px; height: 20px; margin-top: 140px; position: absolute; display: flex;"
        stat8Container.style = "width: 250px; height: 20px; margin-top: 160px; position: absolute; display: flex;"
        stat9Container.style = "width: 250px; height: 20px; margin-top: 180px; position: absolute; display: flex;"
        stat10Container.style = "width: 250px; height: 20px; margin-top: 200px; position: absolute; display: flex;"
        stat11Container.style = "width: 250px; height: 20px; margin-top: 220px; position: absolute; display: flex;"
        stat12Container.style = "width: 250px; height: 20px; margin-top: 240px; position: absolute; display: flex;"
        stat13Container.style = "width: 250px; height: 20px; margin-top: 260px; position: absolute; display: flex;"

        const stat1Div = document.createElement('div')
        const stat2Div = document.createElement('div')
        const stat3Div = document.createElement('div')
        const stat4Div = document.createElement('div')
        const stat5Div = document.createElement('div')
        const stat6Div = document.createElement('div')
        const stat7Div = document.createElement('div')
        const stat8Div = document.createElement('div')
        const stat9Div = document.createElement('div')
        const stat10Div = document.createElement('div')
        const stat11Div = document.createElement('div')
        const stat12Div = document.createElement('div')
        const stat13Div = document.createElement('div')

        stat1Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat2Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat3Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat4Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat5Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat6Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat7Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat8Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat9Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat10Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat11Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat12Div.style = "width: 250px; height: 20px; display: inline-flex;"
        stat13Div.style = "width: 250px; height: 20px; display: inline-flex;"

        const stat1div1 = document.createElement('div')
        const stat1div2 = document.createElement('div')
        stat1div1.style = "display: inline-flex; padding-left: 5px;"
        stat1div2.style = "display: inline-flex; margin-left: auto;"

        const stat2div1 = document.createElement('div')
        const stat2div2 = document.createElement('div')
        stat2div1.style = "display: inline; padding-left: 5px;"
        stat2div2.style = "display: inline; margin-left: auto;"
        const stat3div1 = document.createElement('div')
        const stat3div2 = document.createElement('div')
        stat3div1.style = "display: inline; padding-left: 5px;"
        stat3div2.style = "display: inline; margin-left: auto;"
        const stat4div1 = document.createElement('div')
        const stat4div2 = document.createElement('div')
        stat4div1.style = "display: inline; padding-left: 5px;"
        stat4div2.style = "display: inline; margin-left: auto;"
        const stat5div1 = document.createElement('div')
        const stat5div2 = document.createElement('div')
        stat5div1.style = "display: inline; padding-left: 5px;"
        stat5div2.style = "display: inline; margin-left: auto;"
        const stat6div1 = document.createElement('div')
        const stat6div2 = document.createElement('div')
        stat6div1.style = "display: inline; padding-left: 5px;"
        stat6div2.style = "display: inline; margin-left: auto;"
        const stat7div1 = document.createElement('div')
        const stat7div2 = document.createElement('div')
        stat7div1.style = "display: inline; padding-left: 5px;"
        stat7div2.style = "display: inline; margin-left: auto;"
        const stat8div1 = document.createElement('div')
        const stat8div2 = document.createElement('div')
        stat8div1.style = "display: inline; padding-left: 5px;"
        stat8div2.style = "display: inline; margin-left: auto;"
        const stat9div1 = document.createElement('div')
        const stat9div2 = document.createElement('div')
        stat9div1.style = "display: inline; padding-left: 5px;"
        stat9div2.style = "display: inline; margin-left: auto;"
        const stat10div1 = document.createElement('div')
        const stat10div2 = document.createElement('div')
        stat10div1.style = "display: inline; padding-left: 5px;"
        stat10div2.style = "display: inline; margin-left: auto;"
        const stat11div1 = document.createElement('div')
        const stat11div2 = document.createElement('div')
        stat11div1.style = "display: inline; padding-left: 5px;"
        stat11div2.style = "display: inline; margin-left: auto;"
        const stat12div1 = document.createElement('div')
        const stat12div2 = document.createElement('div')
        stat12div1.style = "display: inline; padding-left: 5px;"
        stat12div2.style = "display: inline; margin-left: auto;"
        const stat13div1 = document.createElement('div')
        const stat13div2 = document.createElement('div')
        stat13div1.style = "display: inline; padding-left: 5px;"
        stat13div2.style = "display: inline; margin-left: auto;"

        const playerImageDiv = document.createElement('div')
        playerImageDiv.style = "margin-top: 40px; margin-left: 250px; padding: 3px: width: 145px;"

        const playerImage = document.createElement('img')
        playerImage.src = this.team2players[number].imageUrl
        playerImage.style = "width: 145px;"
        playerImageDiv.append(playerImage)

        stat1div1.append(document.createTextNode("Name: "))
        stat1div2.append(this.team2players[number].name)

        stat2div1.append(document.createTextNode("Number: "))
        stat2div2.append(this.team2players[number].number)

        if (this.team2players[number].position !== "GK") {

            stat3div1.append(document.createTextNode("Goals: "))
            stat3div2.append(this.team2players[number].goals)

            stat4div1.append(document.createTextNode("Shots: "))
            stat4div2.append(this.team2players[number].shots)

            stat5div1.append(document.createTextNode("Fouls Committed: "))
            stat5div2.append(this.team2players[number].foulsCommitted)

            stat8div1.append(document.createTextNode("Expected Goals: "))
            stat8div2.append(this.team2players[number].xGoals)

        } else {

            stat3div1.append(document.createTextNode("Goals Against: "))
            stat3div2.append(this.team2players[number].goalsAgainst)

            stat4div1.append(document.createTextNode("Shots Against: "))
            stat4div2.append(this.team2players[number].shotsAgainst)

            stat5div1.append(document.createTextNode("Saves: "))
            stat5div2.append(this.team2players[number].saves)

            stat8div1.append(document.createTextNode("Expected Goals Against: "))
            stat8div2.append(this.team2players[number].xGoalsAgainst)
        }

        stat6div1.append(document.createTextNode("Yellow Cards: "))
        stat6div2.append(this.team2players[number].yellowCards)

        stat7div1.append(document.createTextNode("Red Cards: "))
        stat7div2.append(this.team2players[number].redCards)

        stat9div1.append(document.createTextNode("Position: "))
        stat9div2.append(this.team2players[number].position)

        if (ratingsEnabled === true) {

            stat11div1.append(document.createTextNode("Rating: "))
            stat11div2.append(this.team2players[number].rating)
        }

        stat1Div.append(stat1div1)
        stat1Div.append(stat1div2)
        stat2Div.append(stat2div1)
        stat2Div.append(stat2div2)
        stat3Div.append(stat3div1)
        stat3Div.append(stat3div2)
        stat4Div.append(stat4div1)
        stat4Div.append(stat4div2)
        stat5Div.append(stat5div1)
        stat5Div.append(stat5div2)
        stat6Div.append(stat6div1)
        stat6Div.append(stat6div2)
        stat7Div.append(stat7div1)
        stat7Div.append(stat7div2)
        stat8Div.append(stat8div1)
        stat8Div.append(stat8div2)
        stat9Div.append(stat9div1)
        stat9Div.append(stat9div2)
        stat10Div.append(stat10div1)
        stat10Div.append(stat10div2)
        stat11Div.append(stat11div1)
        stat11Div.append(stat11div2)
        stat12Div.append(stat12div1)
        stat12Div.append(stat12div2)
        stat13Div.append(stat13div1)
        stat13Div.append(stat13div2)

        stat1Container.append(stat1Div)
        stat2Container.append(stat2Div)
        stat3Container.append(stat3Div)
        stat4Container.append(stat4Div)
        stat5Container.append(stat5Div)
        stat6Container.append(stat6Div)
        stat7Container.append(stat7Div)
        stat8Container.append(stat8Div)
        stat9Container.append(stat9Div)
        stat10Container.append(stat10Div)
        stat11Container.append(stat11Div)
        stat12Container.append(stat12Div)
        stat13Container.append(stat13Div)

        playerStatsDiv.append(stat1Container)
        playerStatsDiv.append(stat2Container)
        playerStatsDiv.append(stat3Container)
        playerStatsDiv.append(stat4Container)
        playerStatsDiv.append(stat5Container)
        playerStatsDiv.append(stat6Container)
        playerStatsDiv.append(stat7Container)
        playerStatsDiv.append(stat8Container)
        playerStatsDiv.append(stat9Container)
        playerStatsDiv.append(stat10Container)
        playerStatsDiv.append(stat11Container)
        playerStatsDiv.append(stat12Container)
        playerStatsDiv.append(stat13Container)

        playerStatsDiv.id = "player stats div"
        playerStatsContainer.append(playerStatsDiv)
        playerImageDiv.id = "player image div"
        playerStatsContainer.append(playerImageDiv)

        const oldPlayerstats = document.querySelector("#team2playerStats")
        if (oldPlayerstats == null) {
            this.infoBox.appendChild(playerStatsContainer)
        } else {
            this.infoBox.replaceChild(playerStatsContainer, oldPlayerstats)
        }

    },

    renderTeam1Yellow: function (playerNumber, yellowBool){
        const infoDiv = document.querySelector("#team1player" + playerNumber + "matchinfo")

        const yellowCard = document.createElement('div')
        yellowCard.style = "margin-left: 2px; height: 8px; width: 5px; background-color: yellow;"

        infoDiv.append(yellowCard)

    },

    renderTeam2Yellow: function (playerNumber, yellowBool){
        const infoDiv = document.querySelector("#team2player" + playerNumber + "matchinfo")

        const yellowCard = document.createElement('div')
        yellowCard.style = "margin-left: 2px; height: 8px; width: 5px; background-color: yellow;"

        infoDiv.append(yellowCard)

    },

    renderTeam1Red: function (playerNumber, yellowBool){
        const infoDiv = document.querySelector("#team1player" + playerNumber + "matchinfo")

        const redCard = document.createElement('div')
        redCard.style = "margin-left: 2px; height: 8px; width: 5px; background-color: red;"

        infoDiv.append(redCard)

    },

    renderTeam2Red: function (playerNumber, yellowBool){
        const infoDiv = document.querySelector("#team2player" + playerNumber + "matchinfo")

        const redCard = document.createElement('div')
        redCard.style = "margin-left: 2px; height: 8px; width: 5px; background-color: red;"

        infoDiv.append(redCard)

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
