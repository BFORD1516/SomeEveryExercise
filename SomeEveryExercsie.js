function hasOddNumber(arr) {
    
    return arr.some(function (num) {
      
      return num % 2 !== 0;
    });
  }

  function hasAZero(number) {
    
    const numberString = number.toString();
  
    
    return numberString.includes('0');
  }

  function hasOnlyOddNumbers(arr) {
    return arr.every(function(num) {
      return num % 2 !== 0;
    });
  }

  function hasNoDuplicates(arr) {
    let uniqueValues = {};
    for (let i = 0; i < arr.length; i++) {
      if (uniqueValues[arr[i]]) {
        return false;
      }
      uniqueValues[arr[i]] = true;
    }
    return true;
  }

  function hasCertainKey(arr, key) {
    
    if (arr.length === 0) {
      return false;
    }
    return arr.every(obj => obj.hasOwnProperty(key));
  }

  function hasCertainValue(array, key, value) {
    return array.every(obj => obj[key] === value);
  }