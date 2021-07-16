const team = {
  _players: [
    {firstName: "Alex",
    lastName: "Bruno",
    age: 23},
    {firstName: "Cole",
    lastName: "Cowman",
    age: 25},
    {firstName: "Elijah",
    lastName: "Pumpkin",
    age: 24},
  ],

  _games: [
    {opponent: "WildDragons",
    teamPoints: 7,
    opponentPoints: 9},
    {opponent: "PinkTeam",
    teamPoints: 8,
    opponentPoints: 3},
    {opponent: "Cats",
    teamPoints: 4,
    opponentPoints: 10},
  ],
  
  get players() {
    return this._players
  },

  get games() {
    return this._games
  },

  addPlayer (firstName, lastName, age) {
    const newPlayer = {
      firstName: firstName, 
      lastName: lastName, 
      age: age};

    this._players.push(newPlayer);
  },

  addGame (opponentName, teamPoints, opponentPoints) {
    const newGame = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints};

    this._games.push(newGame);
  },
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Owls', 5, 1);
team.addGame('WildFoxes', 7, 2);
team.addGame('Flowers', 9, 6);

console.log(team.players);
console.log();
console.log(team.games);