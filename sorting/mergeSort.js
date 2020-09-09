function merge(arr1, arr2) {
	let i = 0;
	let j = 0;
	let result =[];
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			result.push(arr1[i]);
			i++
		}
		else {
			result.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		result.push(arr1[i]);
		i++
	}

	while (j < arr2.length) {
		result.push(arr2[j])
		j++
	}
	return result
}

function mergeSort(array){
if(array.length ==1) return array	
var mid = Math.floor(array.length/2)
let leftSort = mergeSort(array.slice(0,mid))
let rightSort = mergeSort(array.slice(mid));
	return merge(leftSort,rightSort)

}



console.log(mergeSort([5,6,3,2,9,1]))
