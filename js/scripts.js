let fishRepository = (function(){
  let fishList = [
    {name: 'Bitterling', location: 'River', time: 'All day'},
    {name: 'Pale Chub', location: 'River', time: '9am to 4pm'},
    {name: 'Crucian Carp', location: 'River', time: 'All day'}
  ];

  function add (fish) {
    if (
      typeof fish === "object" && "name" in fish) {
        fishList.push(fish);
      } else {
        console.log("fish format is not correct!");
      }
  }

  function getAll() {
    return fishList;
  }

  return {
    add: add,
    getAll: getAll
  }

})();

let fishList = fishRepository.getAll();

fishList.forEach(function(fish){
  document.write('<p>' + fish.name + ', location: ' + fish.location + '<p>');
});
