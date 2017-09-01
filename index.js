function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}


function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  let newarr = document.querySelectorAll(".ranked-list")
  newarr.forEach(function(list){
    let items = list.querySelectorAll("li");
    items.forEach(function(item){
      let num = item.innerHTML
      num = parseInt(num) + n
      item.innerHTML = num.toString()
    })
  })
}
