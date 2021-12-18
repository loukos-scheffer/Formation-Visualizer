//Author: Louis Scheffer V
//CSC309 project demonstration page
"use strict";

const body = document.querySelector("body")


const fv2 = new FormationVisualizer()
const demo2text = document.createTextNode('This is a demonstration of how the library could be used in a post-match ' +
    'configuration where statistics are being shown for a single match including match ratings. To convert such to a ' +
    'pre-match scenario the developer would need to input season stats instead of match stats and set the ratingsEnabled' +
    ' boolean to false. An example of ratings being disabled is also shown immediately when the page loads.')
const demo2p = document.createElement('p')
demo2p.append(demo2text)
demo2p.style= "text-align: center; width: 802px; margin: auto; "
body.append(demo2p)

const pitch2 = document.createElement('div')
pitch2.id = "football pitch"
pitch2.style = "justify-content: center; display: flex;"
body.append(pitch2)

fv2.drawPitch(true, "Tottenham Hotspur FC", "Canadian National Team", 2, 3, "Aqua", "Pink",true, pitch2)
fv2.addPlayerTeam1("GK", "Hugo", "Lloris" , 1, true, "https://wolves-cdn.azureedge.net/images/default-player.png")
fv2.setTeam1PlayerStats(1, 0, "90 minutes", 4, 9, 0, 4.3, 0, 9, 5, 2, 0, 0)
fv2.addPlayerTeam1("LB", "Danny",  "Rose" , 3, true, "https://wolves-cdn.azureedge.net/images/default-player.png")
fv2.setTeam1PlayerStats(3, 0, "90 minutes", 0, 0, 0, 0, 0, 7, 0, 1, 0, 0)
fv2.addPlayerTeam1("LCB", "Toby", "Alderweireld" , 4, true, "https://wolves-cdn.azureedge.net/images/default-player.png")
fv2.setTeam1PlayerStats(4, 0, "90 minutes", 0, 0, 1, 0, 0, 6, 0, 0, 0, 1)
fv2.addPlayerTeam1("RCB", "Jan", "Vertonghen" , 5, true, "https://wolves-cdn.azureedge.net/images/default-player.png")
fv2.setTeam1PlayerStats(5, 0, "90 minutes", 0, 0, 0, 0, 0, 8, 0, 0, 0, 0)
fv2.addPlayerTeam1("RB", "Kyle", "Walker" , 2, true, "https://wolves-cdn.azureedge.net/images/default-player.png")
fv2.setTeam1PlayerStats(2, 0, "90 minutes", 0, 0, 0, 0, 0, 5, 0, 0, 0, 1)
fv2.addPlayerTeam1("CAM", "Christian", "Eriksen" , 23, true, "https://wolves-cdn.azureedge.net/images/default-player.png")
fv2.setTeam1PlayerStats(23, 1, "90 minutes", 0, 0, 2, 0, 0.2, 8, 0, 1, 1, 0)
fv2.addPlayerTeam1("LCM", "Moussa", "Sissoko" , 19, true, "https://wolves-cdn.azureedge.net/images/default-player.png")
fv2.setTeam1PlayerStats(19, 0, "90 minutes", 0, 0, 1, 0, 0, 7, 0, 2, 0, 0)
fv2.addPlayerTeam1("RCM", "Mousa", "Dembele" , 18, true, "https://wolves-cdn.azureedge.net/images/default-player.png")
fv2.setTeam1PlayerStats(18, 0, "90 minutes", 0, 0, 0, 0, 0, 8, 0, 1, 0, 0)
fv2.addPlayerTeam1("LW", "Bryan", "Gil" , 11, true, "https://wolves-cdn.azureedge.net/images/default-player.png")
fv2.setTeam1PlayerStats(11, 1, "90 minutes", 0, 0, 1, 0, 1.3, 9, 0, 1, 0, 0)
fv2.addPlayerTeam1("RW", "Steven", "Bergwijn" , 24, true, "https://wolves-cdn.azureedge.net/images/default-player.png")
fv2.setTeam1PlayerStats(24, 0, "90 minutes", 0, 0, 1, 0, 1.5, 8, 0, 1, 0, 0)
fv2.addPlayerTeam1("CF", "Harry", "Kane" , 10, true, "https://tot-tmp.azureedge.net/media/40873/firstteam_harrykane_2021_22.png?anchor=center&mode=crop&width=500")
fv2.setTeam1PlayerStats(10, 1, "27 minutes", 0, 0, 3, 0, 1.5, 8, 0, 1, 0, 0)

fv2.addPlayerTeam2("GK", "Milan", "Borjan" , 18, true, "https://www.canadasoccer.com/wp-content/themes/betheme-child/assets/Imagery/Masked%20Photos/Masked%20profile%20photos/MNT/CANMNT-PNG/Milan-Right%20copy.png")
fv2.setTeam2PlayerStats(18, 0, "90 minutes", 3, 9, 0, 4.0, 0, 10, 6, 2, 0, 0)
fv2.addPlayerTeam2("LCB", "Kamal", "Miller" , 4, true, "https://wolves-cdn.azureedge.net/images/default-player.png")
fv2.setTeam2PlayerStats(4, 0, "90 minutes", 0, 0, 0, 0, 0, 7, 0, 1, 0, 0)
fv2.addPlayerTeam2("CCB", "Steven", "Vitoria" , 5, true, "https://wolves-cdn.azureedge.net/images/default-player.png")
fv2.setTeam2PlayerStats(5, 0, "90 minutes", 0, 0, 1, 0, 0.2, 6, 0, 2, 0, 0)
fv2.addPlayerTeam2("RCB", "Alastair", "Johnston" , 2, true, "https://wolves-cdn.azureedge.net/images/default-player.png")
fv2.setTeam2PlayerStats(2, 0, "90 minutes", 0, 0, 0, 0, 0, 8, 0, 0, 0, 0)
fv2.addPlayerTeam2("LWB", "Richie", "Laryea" , 22, true, "https://wolves-cdn.azureedge.net/images/default-player.png")
fv2.setTeam2PlayerStats(22, 0, "90 minutes", 0, 0, 0, 0, 0, 5, 0, 0, 0, 0)
fv2.addPlayerTeam2("RWB", "Sam", "Adekugbe" , 3, true, "https://wolves-cdn.azureedge.net/images/default-player.png")
fv2.setTeam2PlayerStats(3, 0, "90 minutes", 0, 0, 0, 0, 0, 7, 0, 0, 0, 1)
fv2.addPlayerTeam2("LCM", "Atiba", "Hutchinson", 13, true, "https://wolves-cdn.azureedge.net/images/default-player.png")
fv2.setTeam2PlayerStats(13, 0, "90 minutes", 0, 0, 0, 0, 0, 7, 0, 0, 0, 0)
fv2.addPlayerTeam2("RCM", "Stephen", "Eustaquio" , 7, true, "https://wolves-cdn.azureedge.net/images/default-player.png")
fv2.setTeam2PlayerStats(7, 0, "90 minutes", 0, 0, 1, 0, 1.1, 7, 0, 0, 0, 0)
fv2.addPlayerTeam2("LW", "Alphonso", "Davies", 19, true, "https://wolves-cdn.azureedge.net/images/default-player.png")
fv2.setTeam2PlayerStats(19, 1, "90 minutes", 0, 0, 2, 0, 0.9, 9, 0, 0, 0, 0)
fv2.addPlayerTeam2("RW", "Tajon", "Buchanan", 11, true, "https://wolves-cdn.azureedge.net/images/default-player.png")
fv2.setTeam2PlayerStats(11, 1, "90 minutes", 0, 0, 1, 0, 1.0, 8, 0, 2, 0, 1)
fv2.addPlayerTeam2("CF", "Jonathan", "David", 20, true, "https://wolves-cdn.azureedge.net/images/default-player.png")
fv2.setTeam2PlayerStats(20, 2, "90 minutes", 0, 0, 2, 0, 1.1, 10, 0, 2, 0, 0)


fv2.showPlayerStatsTeam1(10, false)
fv2.showPlayerStatsTeam2(18, false)

fv2.renderTeam1Yellow(11, true)
fv2.renderTeam1Red(11, true)
fv2.renderTeam2Yellow(11, true)
fv2.renderTeam2Red(11, true)

console.log(fv2.getTeam1Players())
console.log(fv2.getTeam2Players())


const fv3 = new FormationVisualizer()
const demo3p = document.createElement('p')
const demo3text = document.createTextNode('This is a second demonstration of how the library could be used as part of a' +
    ' coaching or team organization app. A developer could allow users to setup in a variety of formations and player ' +
    'arrangements. For this demo the infobox is turned off, but it could be turned on depending upon the team usage.')
demo3p.append(demo3text)
demo3p.style= "text-align: center; width: 802px; margin: auto; padding-top: 20px; padding-bottom: 10px;"
body.append(demo3p)

let players = [
    {firstName: "John", lastName: "Smith", number: 1},
    {firstName: "Jon", lastName: "Smith", number: 2},
    {firstName: "Johnny", lastName: "Smith", number: 3},
    {firstName: "Jonny", lastName: "Smith", number: 4},
    {firstName: "Jonathan", lastName: "Smith", number: 5},
    {firstName: "Johnathan", lastName: "Smith", number: 6},
    {firstName: "Joni", lastName: "Smith", number: 7},
    {firstName: "Jony", lastName: "Smith", number: 8},
    {firstName: "John-Anthony", lastName: "Smith", number: 9},
    {firstName: "Jean", lastName: "Smith", number: 10},
    {firstName: "Jean-Paul", lastName: "Smith", number: 11},
    {firstName: "Giancarlo", lastName: "Smith",number: 12},
    {firstName: "Gianny", lastName: "Smith", number: 13},
    {firstName: "Gianni", lastName: "Smith", number: 14},
    {firstName: "John", lastName: "Smith", number: 15},
    {firstName: "John", lastName: "Smith", number: 16},
    {firstName: "John", lastName: "Smith", number: 17},
    {firstName: "John", lastName: "Smith", number: 18}
]
const teamDemo = document.createElement('div')
teamDemo.style = "justify-content: center; display: flex;"
const playerSelector = document.createElement('select')

for (let i = 0; i < players.length; i++){
    const playerOption = document.createElement('option')
    playerOption.value = players[i].firstName + " " + players[i].lastName + " - " + players[i].number
    playerOption.innerText = players[i].firstName + " " + players[i].lastName + " - " + players[i].number
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
    const selectedPlayerFirstName = selectedPlayerName.split(" ")[0]
    const selectedPlayerLastName = selectedPlayerName.split(" ")[1]
    const selectedPlayerNum = selectedPlayer[1].trim()
    fv3.addPlayerTeam1(positionSelector.value, selectedPlayerFirstName, selectedPlayerLastName, selectedPlayerNum, false)})
teamDemo.append(submitButton)

body.append(teamDemo)

const pitch3 = document.createElement('div')
pitch3.id = "football pitch"
pitch3.style = "justify-content: center; display: flex;"
body.append(pitch3)

fv3.drawPitch(false, "Sharks", "Eagles", 0, 0, "red", "yellow", false, pitch3)
