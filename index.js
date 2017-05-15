function getFirstSelector(s) {
  return document.querySelector(s)
}

function nestedTarget (){
  return document.querySelector("#nested .target")
}

function increaseRankBy (n){
  // debugger;
  var listed = document.getElementsByClassName('ranked-list')
  for (var i=0;i<listed.length;i++){
    listed[i].innerHTML = parseInt(listed[i].innerHTML)+ n
  }
}

function deepestChild(){
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]
  while (nextNode){
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}
