/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
	
	var N=preferences.length;
	var arr = new Array(N+1);
	var count=0;
	arr[0]=0;

	for(var i = 0; i <preferences.length; i++){
		
			arr[i+1]=preferences[i];

	}


	for(var i = 1; i <=N; i++) {
	
		if (i!=arr[i]){
 			var a=arr[i];
 			var b=arr[a];
 			var c=arr[b];
             
			 if (i==c){
 				count=count+1;

			 }
		}

	}
return count/3;
};
