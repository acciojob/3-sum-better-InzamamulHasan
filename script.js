function threeSum(arr, target) {
// write your code here
	let sum=Number.MAX_VALUE;
	int c=0;
	for(let i=0;i<arr.length;i++){
		for(let j=i+1;j<arr.length;j++){
			for(let k=j+1;k<arr.length;k++){
				let s=arr[i]+arr[j]+arr[k];
				
				if(s<sum && s>=target){
					sum=s;
					c++;
				}
			}
		}
	}
	if(c==0){
		return target;
	}
	return sum;
  
}

module.exports = threeSum;
