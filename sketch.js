let values = [];
let bubble = true;
let select = false;

let i = 0;

function go() {
  var selected = document.getElementById("ss").value;
  if(selected == "0") {
    toBubble();
  }
  if(selected == "1") {
    toSelect();
  }
  loop();
}

function stop() {
  noLoop();
}

function reset() {
  window.location.reload();
}

function toBubble() {
  bubble = true;
  select = false;
}

function toSelect() {
  select = true;
  bubble = false;
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(width);
  for (let k = 0; k < values.length; k++) {
    values[k] = random(height);
  }
  noLoop();
  //selection_sort(values)
}

function draw() {

  background(0);
  let swapped = new Array();
  var len = values.length;

  if(select) {
    console.log("SELECT");
    if (i < values.length) {
      var j_min = i;
      for (var j = i + 1; j < len; j++) {
          if (values[j] < values[j_min]) {
              j_min = j;
              swapped.push(j)
          }
      }
      if (j_min !== i) {
          swap(values, i, j_min);
      }
    } else {
      console.log("finished");
      console.log("size is " + width,0,0);
      noLoop();
    }

  }

  if(bubble) {
    console.log("BUBBLE");
    if (i < values.length) {
      for (let q = 0; q < values.length - i - 1; q++) {
        let a = values[q];
        let b = values[q + 1];
        if (a > b) {
          swap(values, q, q + 1);
          swapped.push(q);
        }
      }
    } else {
      console.log("finished");
      console.log("size is " + width,0,0);
      noLoop();
    }
  }

  i++;

  for (let r = 0; r < values.length; r++) {
    if(swapped.indexOf(r) > -1) {
      stroke(255,0,0);
    } else {
      stroke(0,0,255);
    }
    line(r, height, r, height - values[r]);
    //if(i == j)
  }
}

function selection_sort(A) {
    var len = A.length;
    for (var i = 0; i < len - 1; i++) {
        var j_min = i;
        for (var j = i + 1; j < len; j++) {
            if (A[j] < A[j_min]) {
                j_min = j;
            }
        }
        if (j_min !== i) {
            swap(A, i, j_min);
        }
    }
}





function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
