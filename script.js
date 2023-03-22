function threeSum(arr, target) {
// write your code here
	let sum=Number.MAX_VALUE;
	for(let i=0;i<arr.length;i++){
		for(let j=i+1;j<arr.length;j++){
			for(let k=j+1;k<arr.length;k++){
				let s=arr[i]+arr[j]+arr[k];
				
				if(s<sum && s>=target){
					sum=s;
				}
			}
		}
	}
	return sum;
  
}

module.exports = threeSum;
