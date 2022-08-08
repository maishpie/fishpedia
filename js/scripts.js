let fishList = [
  {name: 'Bitterling', location: 'River', time: 'All day'},
  {name: 'Pale Chub', location: 'River', time: '9am to 4pm'},
  {name: 'Crucian Carp', location: 'River', time: 'All day'}
];

for (let i=0; i<fishList.length; i++){
  document.write(fishList[i].name + ', location:' + fishList[i].location)
}
