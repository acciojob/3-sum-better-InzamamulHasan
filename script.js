function threeSum(arr, target) {
// write your code here
	let sum=0;
	let ch=Infinity;
	let c=0;
	for(let i=0;i<arr.length;i++){
		for(let j=i+1;j<arr.length;j++){
			for(let k=j+1;k<arr.length;k++){
				let s=arr[i]+arr[j]+arr[k];
				let dif=Math.abs(target-s);
				if(dif<ch){
					ch=dif;
					sum=s;
					c++;
				}
			}
		}
	}
	if(c==0){
		return 0;
	}
	return sum;
  
}

module.exports = threeSum;
