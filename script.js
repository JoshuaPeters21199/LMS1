const teams = [
    {teamLogo: "Images/Team_Logos/atlanta_hawks_logo.svg", teamName: "Atlanta Hawks", coachName: "Quin Snyder", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/boston_celtics_logo.svg", teamName: "Boston Celtics", coachName: "Joe Mazzulla", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/brooklyn_nets_logo.svg", teamName: "Brooklyn Nets", coachName: "Jacqu Vaughn", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/charlotte_hornets_logo.svg", teamName: "Charlotte Hornets", coachName: "Steve Clifford", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/chicago_bulls_logo.svg", teamName: "Chicago Bulls", coachName: "Billy Donovan", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/cleveland_cavaliers_logo.svg", teamName: "Cleveland Cavaliers", coachName: "J.B. Bickerstaff", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/dallas_mavericks_logo.svg", teamName: "Dallas Mavericks", coachName: "Jason Kidd", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/denver_nuggets_logo.svg", teamName: "Denver Nuggets", coachName: "Michael Malone", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/detroit_pistons_logo.svg", teamName: "Detroit Pistons", coachName: "Monty Williams", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/golden_state_warriors_logo.svg", teamName: "Golden State Warriors", coachName: "Steve Kerr", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/houston_rockets_logo.svg", teamName: "Houston Rockets", coachName: "Ime Udoka", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/indiana_pacers_logo.svg", teamName: "Indiana Pacers", coachName: "Rick Carlisle", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/la_clippers_logo.svg", teamName: "Los Angeles Clippers", coachName: "Tyronn Lue", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/los_angeles_lakers_logo.svg", teamName: "Los Angeles Lakers", coachName: "Darvin Ham", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/memphis_grizzlies_logo.svg", teamName: "Memphis Grizzlies", coachName: "Taylor Jenkins", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/miami_heat_logo.svg", teamName: "Miami Heat", coachName: "Erik Spoelstra", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/milwaukee_bucks_logo.svg", teamName: "Milwaukee Bucks", coachName: "Doc Rivers", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/minnesota_timberwolves_logo.svg", teamName: "Minnesota Timberwolves", coachName: "Chris Finch", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/new_orleans_pelicans_logo.svg", teamName: "New Orleans Pelicans", coachName: "Willie Green", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/new_york_knicks_logo.svg", teamName: "New York Knicks", coachName: "Tom Thibodeau", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/oklahoma_city_thunder_logo.svg", teamName: "Oklahoma City Thunder", coachName: "Mark Daigneault", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/orlando_magic_logo.svg", teamName: "Orlando Magic", coachName: "Jamahl Mosley", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/philadelphia_76ers_logo.svg", teamName: "Philadelphia 76ers", coachName: "Nick Nurse", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/phoenix_suns_logo.svg", teamName: "Phoenix Suns", coachName: "Frank Vogel", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/portland_trail_blazers_logo.svg", teamName: "Portland Trail Blazers", coachName: "Chauncey Billups", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/sacramento_kings_logo.svg", teamName: "Sacramento Kings", coachName: "Mike Brown", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/san_antonio_spurs_logo.svg", teamName: "San Antonio Spurs", coachName: "Gregg Popovich", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/toronto_raptors_logo.svg", teamName: "Toronto Raptors", coachName: "Darko Rajakovic", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/utah_jazz_logo.svg", teamName: "Utah Jazz", coachName: "Will Hardy", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()},
    {teamLogo: "Images/Team_Logos/washington_wizards_logo.svg", teamName: "Washington Wizards", coachName: "Brian Keefe", coachPhone: createPhoneNumber(), numOfPlayers: createPlayerNumber()}
]

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function createPhoneNumber() {
    return `${getRandomArbitrary(100,999)}-${getRandomArbitrary(100,999)}-${getRandomArbitrary(1000,9999)}`;
}

function createPlayerNumber() {
    return getRandomArbitrary(14,21);
}

document.addEventListener("DOMContentLoaded", function() {
    let tbody = document.querySelector("#dynamic-table tbody");

    teams.forEach(function(item) {
        let row = document.createElement("tr");
        row.innerHTML = `
        <th scope="row" class="center-item"><img class="table-logo" src="${item.teamLogo}" alt=""></th>
        <td>${item.teamName}</td>
        <td>${item.coachName}</td>
        <td class="center-item">${item.coachPhone}</td>
        <td class="center-item">${item.numOfPlayers}</td>
        <td class="center-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg></td>
        <td class="center-item"><svg id="jazz-trash" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" onclick="setVar(this.id)" data-bs-toggle="modal" data-bs-target="#deleteModal"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/></svg></td>`
        tbody.appendChild(row);
    })
})

console.log(teams);
