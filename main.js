const clubs = [
  "Arsenal",
  "Manchester City",
  "Manchester United",
  "Liverpool",
  "Tottenham",
  "FC Barcelone",
  "Real Madrid",
  "Atletico Madrid",
  "AC Milan",
  "Inter Milan",
  "Napoli",
  "FC Bayern Munchen",
  "Bayer Leverkusen",
  "Borussia Dortmund",
  "Paris Saint Germain",
  "RB Leipzig"
];

let usedClubs = [];

function pickTwoClubs() {
  if (usedClubs.length === clubs.length) {
    usedClubs = [];
  }

  const available = clubs.filter(club => !usedClubs.includes(club));

  available.sort(() => Math.random() - 0.5);

  const [club1, club2] = available.slice(0, 2);

  usedClubs.push(club1, club2);

  return { club1, club2 };
}

const { club1, club2 } = pickTwoClubs();

console.log(`Le club 1 est ${club1}; Le club 2 est ${club2}`);
