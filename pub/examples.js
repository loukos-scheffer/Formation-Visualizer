//Author: Louis Scheffer V
//CSC309 project demonstration page
"use strict";

const body = document.querySelector("body")


const fv2 = new FormationVisualizer()
const demo2text = document.createTextNode('This is a demonstration of how the library could be used in a post-match ' +
    'configuration where statistics are being shown for a single match including match ratings. To convert such to a ' +
    'pre-match scenario the developer would need to input season stats instead of match stats and set the ratingsEnabled' +
    ' boolean to false. An example of ratings being disabled is also shown immediately when the page loads.')
body.append(demo2text)

fv2.drawPitch(true, "Tottenham Hotspur FC", "Canadian National Team")
fv2.addPlayerTeam1("GK", "Hugo Lloris" , 1, true)
fv2.setTeam1PlayerStats(1, 0, "90 minutes", 4, 9, 0, 4.3, 0, 9, 5, 2, 0, 0)
fv2.addPlayerTeam1("LB", "Danny Rose" , 3, true)
fv2.setTeam1PlayerStats(3, 0, "90 minutes", 0, 0, 0, 0, 0, 7, 0, 1, 0, 0)
fv2.addPlayerTeam1("LCB", "Toby Alderweireld" , 4, true)
fv2.setTeam1PlayerStats(4, 0, "90 minutes", 0, 0, 1, 0, 0, 6, 0, 0, 0, 1)
fv2.addPlayerTeam1("RCB", "Jan Vertonghen" , 5, true)
fv2.setTeam1PlayerStats(5, 0, "90 minutes", 0, 0, 0, 0, 0, 8, 0, 0, 0, 0)
fv2.addPlayerTeam1("RB", "Kyle Walker" , 2, true)
fv2.setTeam1PlayerStats(2, 0, "90 minutes", 0, 0, 0, 0, 0, 5, 0, 0, 0, 1)
fv2.addPlayerTeam1("CAM", "Christian Eriksen" , 23, true)
fv2.setTeam1PlayerStats(23, 1, "90 minutes", 0, 0, 2, 0, 0.2, 8, 0, 1, 1, 0)
fv2.addPlayerTeam1("LCM", "Moussa Sissoko" , 19, true)
fv2.setTeam1PlayerStats(19, 0, "90 minutes", 0, 0, 1, 0, 0, 7, 0, 2, 0, 0)
fv2.addPlayerTeam1("RCM", "Mousa Dembele" , 18, true)
fv2.setTeam1PlayerStats(18, 0, "90 minutes", 0, 0, 0, 0, 0, 8, 0, 1, 0, 0)
fv2.addPlayerTeam1("LW", "Bryan Gil" , 11, true)
fv2.setTeam1PlayerStats(11, 1, "90 minutes", 0, 0, 1, 0, 1.3, 9, 0, 1, 0, 0)
fv2.addPlayerTeam1("RW", "Steven Bergwijn" , 24, true)
fv2.setTeam1PlayerStats(24, 0, "90 minutes", 0, 0, 1, 0, 1.5, 8, 0, 1, 0, 0)
fv2.addPlayerTeam1("CF", "Harry Kane" , 10, true)
fv2.setTeam1PlayerStats(10, 1, "27 minutes", 0, 0, 3, 0, 1.5, 8, 0, 1, 0, 0)

fv2.addPlayerTeam2("GK", "Milan Borjan" , 18, true)
fv2.setTeam2PlayerStats(18, 0, "90 minutes", 3, 9, 0, 4.0, 0, 10, 6, 2, 0, 0)
fv2.addPlayerTeam2("LCB", "Kamal Miller" , 4, true)
fv2.setTeam2PlayerStats(4, 0, "90 minutes", 0, 0, 0, 0, 0, 7, 0, 1, 0, 0)
fv2.addPlayerTeam2("CCB", "Steven Vitoria" , 5, true)
fv2.setTeam2PlayerStats(5, 0, "90 minutes", 0, 0, 1, 0, 0.2, 6, 0, 2, 0, 0)
fv2.addPlayerTeam2("RCB", "Alastair Johnston" , 2, true)
fv2.setTeam2PlayerStats(2, 0, "90 minutes", 0, 0, 0, 0, 0, 8, 0, 0, 0, 0)
fv2.addPlayerTeam2("LWB", "Richie Laryea" , 22, true)
fv2.setTeam2PlayerStats(22, 0, "90 minutes", 0, 0, 0, 0, 0, 5, 0, 0, 0, 0)
fv2.addPlayerTeam2("RWB", "Sam Adekugbe" , 3, true)
fv2.setTeam2PlayerStats(3, 0, "90 minutes", 0, 0, 0, 0, 0, 7, 0, 0, 0, 1)
fv2.addPlayerTeam2("LCM", "Atiba Hutchinson", 13, true)
fv2.setTeam2PlayerStats(13, 0, "90 minutes", 0, 0, 0, 0, 0, 7, 0, 0, 0, 0)
fv2.addPlayerTeam2("RCM", "Stephen Eustaquio" , 7, true)
fv2.setTeam2PlayerStats(7, 0, "90 minutes", 0, 0, 1, 0, 1.1, 7, 0, 0, 0, 0)
fv2.addPlayerTeam2("LW", "Alphonso Davies", 19, true)
fv2.setTeam2PlayerStats(19, 1, "90 minutes", 0, 0, 2, 0, 0.9, 9, 0, 0, 0, 0)
fv2.addPlayerTeam2("RW", "Tajon Buchanan", 11, true)
fv2.setTeam2PlayerStats(11, 1, "90 minutes", 0, 0, 1, 0, 1.0, 8, 0, 2, 0, 1)
fv2.addPlayerTeam2("CF", "Jonathan David", 20, true)
fv2.setTeam2PlayerStats(20, 2, "90 minutes", 0, 0, 2, 0, 1.1, 10, 0, 2, 0, 0)


fv2.showPlayerStatsTeam1(10, false)
fv2.showPlayerStatsTeam2(18, false)

console.log(fv2.getTeam1Players())
console.log(fv2.getTeam2Players())


const fv3 = new FormationVisualizer()
const demo3text = document.createTextNode('This is a second demonstration of how the library could be used as part of a' +
    ' coaching or team organization app. A developer could allow users to setup in a variety of formations and player ' +
    'arrangements. For this demo the infobox is turned off, but it could be turned on depending upon the team usage.')
body.append(demo3text)

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

const positions = fv3.getPositions()
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
    fv3.addPlayerTeam1(positionSelector.value, selectedPlayerName, selectedPlayerNum, false)})
teamDemo.append(submitButton)

body.append(teamDemo)

fv3.drawPitch(false, "Sharks", "Eagles")
