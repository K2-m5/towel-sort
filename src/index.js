// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArray = [];
  if (matrix === undefined) {
      return [];
  } else {
      for(let m = 0; m < matrix.length; m++) {
          if(m%2 == 0) {
              matrix[m] = matrix[m].sort(function(a, b) {
                  return a - b;
              });
          } else {
              matrix[m] = matrix[m].sort(function(a, b) {
                  return b - a;
              });
        }
          for(let j = 0; j < matrix[m].length; j++) {
            newArray.push(matrix[m][j]);
        }
      }
      return newArray;
  }
}
