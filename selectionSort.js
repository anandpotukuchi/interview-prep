function selectionSort(arr) {
    // Only change code below this line
    for(var i=0;i<arr.length;i++) {
        let min= i;

        for(var j=i+1;j<arr.length; j++) {
            if(arr[j] < arr[min]) {
                min=j;
            }
        }

        if(min!==i) {
            ;[arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
    console.log(arr)
    return arr;
    // Only change code above this line
  }
  
  selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) 