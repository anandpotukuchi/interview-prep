function bubbleSort(arr) {
  // Only change code below this line
for(var i=0;i<arr.length;i++) {
    for (var j=0;j<arr.length-i-1;j++) {
      if(arr[j] > arr[j+1]) {
          ;[arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
    }
  }
    console.log(arr)
    //return arr;
  
  // Only change code above this line
}

bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])