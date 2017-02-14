var display = document.getElementById("display");

function diffArray(arr1, arr2) {
  var newArr = [];
  var currArr;
  // Same, same; but different.

  function filterArr(val, idx, arr)
  {
    var includes = true;
    for ( var i=0; i<currArr.length; i++ )
      {
        if (currArr[i] == val)
            includes = false;
      }
    return includes;
  }
  
  currArr = arr2;
  newArr = arr1.filter(filterArr);
  
  currArr = arr1;
  var newArr2 = arr2.filter(filterArr)
  
  newArr = newArr.concat(newArr2);
  
  return newArr;
}

var valueList = diffArray([1, 2, 3, 5,6,100], [1, 2, 3, 4, 5,7,110]);

display.innerHTML = valueList;
