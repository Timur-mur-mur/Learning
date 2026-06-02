

let arr = [
  [8,2,4,4,5],
  [6,3,4,5,6],
  [3,7,5,9,7],
  [4,5,2,7,8],
  [5,1,7,0,9]
];
console.log(det(arr));

function isKvadrat(newArr){
return newArr.every(subarr => subarr.length === newArr.length);
};

function minorr(newArr, i , j ){
   
  const matrix = [...newArr.map(a => [...a])];
  matrix.splice(i,1);

  for ( const e of matrix){
    e.splice(j,1);
  };

  if (matrix.length !== 3){
    return det(matrix)
  };


  return det3(matrix);
}



function det3(ar){
  const d3 = ar[0][0]*ar[1][1]*ar[2][2] + 
  ar[0][1]*ar[1][2]*ar[2][0] +
  ar[0][2]*ar[1][0]*ar[2][1] -
  ar[0][2]*ar[1][1]*ar[2][0] - 
  ar[0][0]*ar[1][2]*ar[2][1] -
  ar[2][2]*ar[0][1]*ar[1][0];
  
  return d3; 
}

function det(arr){
  const newArr = [...arr.map(a => [...a])]

  
  if (!isKvadrat(newArr)){
    console.log("это не квадратная матрица");
    return;
  };


  if(newArr.length === 3){
    return det3(newArr);
  }
  

  let sum = 0
  let j = 0
  const i = 0;

  for ( const a of newArr[0]){
    sum += Math.pow(-1, (i+1)+(j+1)) * a * minorr(newArr , i , j);
    j = j + 1;
  }
  return sum;
  
};

