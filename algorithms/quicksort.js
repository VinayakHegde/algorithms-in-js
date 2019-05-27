function QuickSort(arr){
	if(arr.length < 2) return arr;
	let pivot = arr.splice(0,1),
		lesser = new Array(),
		greater = new Array();

	arr.forEach(function(item){
		if(item <= pivot) lesser.push(item);
		else greater.push(item);
	});

	return QuickSort(lesser).concat(pivot, QuickSort(greater));
}