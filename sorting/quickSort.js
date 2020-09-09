function quickSort(array, start, end) {


    if(start<end){
    let pivot = partiton(array, start, end);
    quickSort(array, start, pivot - 1);
    quickSort(array,pivot+1, end);
    }

    return array

}




function partiton(array, start, end) {
    let pivot = array[end];
    let j = start;
    for (let i = start; i < end; i++) {
        if (array[i] <= pivot) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            j++
        }
    }
    let temp = array[end];
    array[end] = array[j];
    array[j] = temp;

    return j
}


console.log(quickSort([3, 5, 6, 7, 1, 9], 0, 5))