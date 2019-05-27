function BinarySearch(arr, item){
	let low = 0,
		high = arr.length-1;
	while (low <= high){
		let mid = Math.floor((low + high)/2),
			found = arr[mid];

		if(found === item) return {index: mid, value:arr[mid]};

		else if(found < item) low = mid+1;
		else if(found > item) high = mid-1;
	}

	return null;
}