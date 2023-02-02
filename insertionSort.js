function insertionSort(arr) {
  // Only change code below this line
  
  for(var i=0; i<arr.length;i++) {
    let min = arr[i];
    for(var j = i - 1; j >= 0 && arr[j] > min; j--) {
      arr[j+1]=arr[j];
      //console.log(arr[j])
    }  

    arr[j+1] = min;
    //console.log(arr[i]);
  }
  console.log(arr)
  return arr;
  // Only change code above this line
}

insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])