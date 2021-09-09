const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  let goodStations = [];
  
  for (const station in stations) {
    if (stations[station][1] >= 20) {
      if (stations[station][2] === 'school' || stations[station][2] === 'community centre') {
        goodStations.push(stations[station][0]);
      }
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));