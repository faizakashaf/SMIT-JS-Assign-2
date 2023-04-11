function searchArray(arr, value) {
    if (arr.length === 0) {
      return false;
    }
  
      if (arr[0] === value) {
      return true;
    }
  
    return searchArray(arr.slice(1), value);
  }
  
  // Example usage:
  const myArray = [1, 2, 3, 4, 5];
  const searchValue = 3;
  console.log(searchArray(myArray, searchValue)); // Output: true