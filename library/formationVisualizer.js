"use strict";

function  FormationVisualizer() {
    this.pitch = null
    this.team1players = []
    this.team2players = []
}

FormationVisualizer.prototype = {

    drawPitch: function (){
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
    },

    addPlayerTeam1: function (position, name, number){
        const newDiv = document.createElement('div')
        const player = document.createElement('button')
        newDiv.id = name
        if (position == "GK"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 240px; margin-left: 15px; background-color: Aqua; position: absolute; text: center;"
        } else if(position == "LB"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 50px; margin-left: 70px; background-color: Aqua; position: absolute;"
        } else if(position == "LCB"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 150px; margin-left: 70px; background-color: Aqua; position: absolute;"
        } else if(position == "CCB"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 240px; margin-left: 70px; background-color: Aqua; position: absolute;"
        } else if(position == "RCB"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 330px; margin-left: 70px; background-color: Aqua; position: absolute;"
        } else if(position == "RB"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 430px; margin-left: 70px; background-color: Aqua; position: absolute;"
        } else if(position == "LWB"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 50px; margin-left: 170px; background-color: Aqua; position: absolute;"
        } else if(position == "RWB"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 430px; margin-left: 170px; background-color: Aqua; position: absolute;"
        } else if(position == "CDM"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 240px; margin-left: 170px; background-color: Aqua; position: absolute;"
        } else if(position == "CAM"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 240px; margin-left: 300px; background-color: Aqua; position: absolute;"
        } else if(position == "LCM"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 180px; margin-left: 235px; background-color: Aqua; position: absolute;"
        } else if(position == "RCM"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 300px; margin-left: 235px; background-color: Aqua; position: absolute;"
        } else if(position == "LM"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 50px; margin-left: 235px; background-color: Aqua; position: absolute;"
        } else if(position == "RM"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 430px; margin-left: 235px; background-color: Aqua; position: absolute;"
        } else if(position == "LW"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 50px; margin-left: 300px; background-color: Aqua; position: absolute;"
        } else if(position == "RW"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 430px; margin-left: 300px; background-color: Aqua; position: absolute;"
        } else if(position == "LST"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 180px; margin-left: 370px; background-color: Aqua; position: absolute;"
        } else if(position == "RST"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 300px; margin-left: 370px; background-color: Aqua; position: absolute;"
        } else if(position == "CF"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 240px; margin-left: 370px; background-color: Aqua; position: absolute;"
        }

        player.textContent = number
        newDiv.append(player)
        const pitch = this.pitch
        pitch.append(newDiv)

        this.team1players.push(player)
    },

    addPlayerTeam2: function (position, name, number){
        const newDiv = document.createElement('div')
        const player = document.createElement('button')
        newDiv.id = name
        if (position == "GK"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 240px; margin-left: 765px; background-color: Pink; position: absolute; text: center;"
        } else if(position == "RB"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 50px; margin-left: 710px; background-color: Pink; position: absolute;"
        } else if(position == "RCB"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 150px; margin-left: 710px; background-color: Pink; position: absolute;"
        } else if(position == "CCB"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 240px; margin-left: 710px; background-color: Pink; position: absolute;"
        } else if(position == "LCB"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 330px; margin-left: 710px; background-color: Pink; position: absolute;"
        } else if(position == "LB"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 430px; margin-left: 710px; background-color: Pink; position: absolute;"
        } else if(position == "RWB"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 50px; margin-left: 610px; background-color: Pink; position: absolute;"
        } else if(position == "LWB"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 430px; margin-left: 610px; background-color: Pink; position: absolute;"
        } else if(position == "CDM"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 240px; margin-left: 610px; background-color: Pink; position: absolute;"
        } else if(position == "CAM"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 240px; margin-left: 480px; background-color: Pink; position: absolute;"
        } else if(position == "RCM"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 180px; margin-left: 545px; background-color: Pink; position: absolute;"
        } else if(position == "LCM"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 300px; margin-left: 545px; background-color: Pink; position: absolute;"
        } else if(position == "RM"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 50px; margin-left: 545px; background-color: Pink; position: absolute;"
        } else if(position == "LM"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 430px; margin-left: 545px; background-color: Pink; position: absolute;"
        } else if(position == "RW"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 50px; margin-left: 480px; background-color: Pink; position: absolute;"
        } else if(position == "LW"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 430px; margin-left: 480px; background-color: Pink; position: absolute;"
        } else if(position == "RST"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 180px; margin-left: 410px; background-color: Pink; position: absolute;"
        } else if(position == "LST"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 300px; margin-left: 410px; background-color: Pink; position: absolute;"
        } else if(position == "CF"){
            player.style = "width: 20px; height: 20px; border-radius: 50%; margin-top: 240px; margin-left: 410px; background-color: Pink; position: absolute;"
        }

        player.textContent = number
        const playerName = document.createTextNode(name)
        const playerNameDiv = document.createElement('div')
        playerNameDiv.style = "position: absolute;"
        playerNameDiv.append(playerName)
        newDiv.append(player)
        newDiv.append(playerNameDiv)
        const pitch = this.pitch
        pitch.append(newDiv)

        this.team1players.push(player)
    }
}