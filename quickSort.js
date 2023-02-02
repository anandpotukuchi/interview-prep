function quickSort(arr, start = 0, end = arr.length - 1) {
    // Base case
    if (start >= end) return
    let pivotIndex = partition(arr, start, end)
    // Left
    quickSort(arr, start, pivotIndex - 1)
    // Right
    quickSort(arr, pivotIndex + 1, end)
    //console.log(arr)
    return arr
  }
  function partition(arr, start, end) {
    const pivotValue = arr[start]
    let swapIndex = start
    for (let i = start + 1; i <= end; i++) {
      if (pivotValue > arr[i]) {
        swapIndex++
        if (i !== swapIndex) {
          // SWAP
          ;[arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]
        }
      }
    }
    if (swapIndex !== start) {
      // Swap pivot into correct place
      ;[arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]]
    }
    return swapIndex
  }

 quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])








