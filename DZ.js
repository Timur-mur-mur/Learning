let arr = [
  [8,2,4,4,5],
  [6,3,4,5,6],
  [3,7,5,9,7],
  [4,5,2,7,8],
  [5,1,7,0,9]
];



// let a = 0;


// let opred = 0;
//  for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < arr[i].length; j++){
//      opred = opred + Math.pow(-1,i+j) + arr[a][j] ;
//     };
//   };



// function minor_1(arr , a , b){
//   if( arr.length == 2){
//     return arr
//   }
  
//   for (let i = 0; i < arr.length; i++){
//      if(i == a){
//        arr.splice(i,1)};
//      };

//   for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < arr[i].length; j++){
//       if ( j==b ){
//       arr[i].splice(j,1)
//       };
//     };
//   };
//  return arr;
// }

function minor(ar, i, j){
  const newMatrix = [...ar.map(a => [...a])];
  newMatrix.splice(i, 1);
  
  for (const sa of newMatrix) {
    sa.splice(j, 1)
  }
  
  if (newMatrix.length !== 3) {
    return determ(newMatrix)
  }

  return determ3(newMatrix)  
}


function determ3 (arr) {
  return arr[0][0] * arr[1][1] * arr[2][2]
  + arr[0][2] * arr[1][0] * arr[2][1]
  + arr[2][0] * arr[0][1] * arr[1][2]
  - arr[0][2] * arr[1][1] * arr[2][0]
  - arr[0][0] * arr[1][2] * arr[2][1]
  - arr[2][2] * arr[1][0] * arr[0][1]
}

function isSquare(matrix){
  return matrix.every(subArray => subArray.length === matrix.length);
}

function determ(array){
  const newArr = [...array.map(a => [...a])]
  if (!isSquare(newArr)) {
    console.error('Ты еблан, это не квадратная матрица')
    return;
  }

  if (newArr.length === 3) {
    return determ3(newArr);
  }

  let sum = 0;

  let j = 0; 
 
  for (const a of newArr[0]) {
    const i = 0;
    sum += Math.pow(-1,(i + 1)+(j + 1)) * a * minor(newArr, i, j);
    j++;
  }

  return sum;
}

console.log(determ(arr))