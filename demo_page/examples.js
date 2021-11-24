//Author: Louis Scheffer V
//CSC309 project demonstration page
"use strict";

const fv = new FormationVisualizer()
fv.drawPitch(true, "Tottenham Hotspur FC", "Canadian National Team")
fv.addPlayerTeam1("GK", "Hugo Lloris" , 1, true)
fv.setTeam1PlayerStats(1, 0, 38, 15, 59, 0, 32, 0, 10, 44, 2, 1, 1)
fv.addPlayerTeam1("LB", "Danny Rose" , 3, true)
fv.setTeam1PlayerStats(3, 2, 38, 0, 0, 12, 0, 1.5, 8, 0, 102, 1, 7)
fv.addPlayerTeam1("LCB", "Toby Alderweireld" , 4, true)
fv.setTeam1PlayerStats(4, 2, 38, 0, 0, 12, 0, 1.5, 8, 0, 102, 1, 7)
fv.addPlayerTeam1("RCB", "Jan Vertonghen" , 5, true)
fv.setTeam1PlayerStats(5, 2, 38, 0, 0, 12, 0, 1.5, 8, 0, 102, 1, 7)
fv.addPlayerTeam1("RB", "Kyle Walker" , 2, true)
fv.setTeam1PlayerStats(2, 2, 38, 0, 0, 12, 0, 1.5, 8, 0, 102, 1, 7)
fv.addPlayerTeam1("CAM", "Christian Eriksen" , 23, true)
fv.setTeam1PlayerStats(23, 2, 38, 0, 0, 12, 0, 1.5, 8, 0, 102, 1, 7)
fv.addPlayerTeam1("LCM", "Moussa Sissoko" , 19, true)
fv.setTeam1PlayerStats(19, 2, 38, 0, 0, 12, 0, 1.5, 8, 0, 102, 1, 7)
fv.addPlayerTeam1("RCM", "Mousa Dembele" , 18, true)
fv.setTeam1PlayerStats(18, 2, 38, 0, 0, 12, 0, 1.5, 8, 0, 102, 1, 7)
fv.addPlayerTeam1("LW", "Bryan Gil" , 11, true)
fv.setTeam1PlayerStats(11, 2, 38, 0, 0, 12, 0, 1.5, 8, 0, 102, 1, 7)
fv.addPlayerTeam1("RW", "Steven Bergwijn" , 24, true)
fv.setTeam1PlayerStats(24, 2, 38, 0, 0, 12, 0, 1.5, 8, 0, 102, 1, 7)
fv.addPlayerTeam1("CF", "Harry Kane" , 10, true)
fv.setTeam1PlayerStats(10, 2, 38, 0, 0, 12, 0, 1.5, 8, 0, 102, 1, 7)

fv.addPlayerTeam2("GK", "Milan Borjan" , 18, true)
fv.setTeam2PlayerStats(18, 0, 38, 15, 59, 0, 32, 0, 10, 44, 2, 1, 1)
fv.addPlayerTeam2("LCB", "Kamal Miller" , 4, true)
fv.setTeam2PlayerStats(4, 2, 12, 0, 0, 8, 0, 1.1, 7, 0, 52, 0, 3)
fv.addPlayerTeam2("CCB", "Steven Vitoria" , 5, true)
fv.setTeam2PlayerStats(5, 2, 12, 0, 0, 8, 0, 1.1, 7, 0, 52, 0, 3)
fv.addPlayerTeam2("RCB", "Alastair Johnston" , 2, true)
fv.setTeam2PlayerStats(2, 2, 12, 0, 0, 8, 0, 1.1, 7, 0, 52, 0, 3)
fv.addPlayerTeam2("LWB", "Richie Laryea" , 22, true)
fv.setTeam2PlayerStats(22, 2, 12, 0, 0, 8, 0, 1.1, 7, 0, 52, 0, 3)
fv.addPlayerTeam2("RWB", "Sam Adekugbe" , 3, true)
fv.setTeam2PlayerStats(3, 2, 12, 0, 0, 8, 0, 1.1, 7, 0, 52, 0, 3)
fv.addPlayerTeam2("LCM", "Atiba Hutchinson", 13, true)
fv.setTeam2PlayerStats(13, 2, 12, 0, 0, 8, 0, 1.1, 7, 0, 52, 0, 3)
fv.addPlayerTeam2("RCM", "Stephen Eustaquio" , 7, true)
fv.setTeam2PlayerStats(7, 2, 12, 0, 0, 8, 0, 1.1, 7, 0, 52, 0, 3)
fv.addPlayerTeam2("LW", "Alphonso Davies", 19, true)
fv.setTeam2PlayerStats(19, 2, 12, 0, 0, 8, 0, 1.1, 7, 0, 52, 0, 3)
fv.addPlayerTeam2("RW", "Tajon Buchanan", 11, true)
fv.setTeam2PlayerStats(11, 2, 12, 0, 0, 8, 0, 1.1, 7, 0, 52, 0, 3)
fv.addPlayerTeam2("CF", "Jonathan David", 20, true)
fv.setTeam2PlayerStats(20, 2, 12, 0, 0, 8, 0, 1.1, 7, 0, 52, 0, 3)


fv.showPlayerStatsTeam1(10, false)
fv.showPlayerStatsTeam2(18, false)

const demo2text = document.createTextNode('This is a second demonstration of how the library could be used as part of a coaching or team organization app:')
const body = document.querySelector("body")
body.append(demo2text)
let players = [
    {name: "John Smith", number: 1},
    {name: "Jon Smith", number: 2},
    {name: "Johnny Smith", number: 3},
    {name: "Jonny Smith", number: 4},
    {name: "Jonathan Smith", number: 5},
    {name: "Johnathan Smith", number: 6},
    {name: "Joni Smith", number: 7},
    {name: "Jony Smith", number: 8},
    {name: "John Smith", number: 9},
    {name: "John Smith", number: 10},
    {name: "John Smith", number: 11},
    {name: "John Smith", number: 12},
    {name: "John Smith", number: 13},
    {name: "John Smith", number: 14},
    {name: "John Smith", number: 15},
    {name: "John Smith", number: 16},
    {name: "John Smith", number: 17},
    {name: "John Smith", number: 18}
]
const teamDemo = document.createElement('div')
const playerSelector = document.createElement('select')

for (let i = 0; i < players.length; i++){
    const playerOption = document.createElement('option')
    playerOption.value = players[i].name + " - " + players[i].number
    playerOption.innerText = players[i].name + " - " + players[i].number
    playerSelector.append(playerOption)
}
teamDemo.append(playerSelector)

const positions = fv.getPositions()
const positionSelector = document.createElement('select')
for (let i = 0; i < positions.length; i++){
    const positionsOption = document.createElement('option')
    positionsOption.value = positions[i]
    positionsOption.innerText = positions[i]
    positionSelector.append(positionsOption)
}
teamDemo.append(positionSelector)

const submitButton = document.createElement('button')
submitButton.innerText = "Add Player to Formation"
submitButton.addEventListener("click", () => {
    const selectedPlayer = playerSelector.value.split("-")
    const selectedPlayerName = selectedPlayer[0].trim()
    const selectedPlayerNum = selectedPlayer[1].trim()
    fv.addPlayerTeam1(positionSelector.value, selectedPlayerName, selectedPlayerNum,false)})
teamDemo.append(submitButton)

body.append(teamDemo)

fv.drawPitch(false, "Sharks", "Eagles")
