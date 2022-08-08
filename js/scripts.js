let fishList = [
  {name: 'Bitterling', location: 'River', time: 'All day'},
  {name: 'Pale Chub', location: 'River', time: '9am to 4pm'},
  {name: 'Crucian Carp', location: 'River', time: 'All day'}
];

fishList.forEach(function(fish){
  document.write(fish.name + ', location:' + fish.location)
})
