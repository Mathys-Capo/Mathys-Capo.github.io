var options = {
    valueNames: [
      'num',
      'nom',
      { data: ['id'] }
    ]
};

document.addEventListener("DOMContentLoaded", (event) => {
  var elements = document.getElementsByClassName("competences");
  for (let i = 0; i < elements.length; i++) {
    var element=elements[i];
    new List(element.id, options);
  }
});
