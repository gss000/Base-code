//1.在数据集之中,选择一个元素作为"基准"(pivot)
//2.所有小于"基准"的元素,都移到"基准"的左边;所有大于"基准"的元素,都移到"基准"的右边.
//3.对"基准"左边和右边的两个子集,不断重复第一步和第二步,直到所有子集只剩下一个元素为止.

window.onload = function(){
    arr = [2, 10, 7, 8, 3, 23, 65, 43, 12, 34];
    console.log(quickSort(arr));
}

function quickSort(array){
    if(array.length <= 1) { return array; };
    var halfindex = Math.floor(array/2);
    var left = [];
    var right = [];
    var value = array.splice(halfindex, 1)[0];
    for(var i=0;i<array.length;i++){
        if(array[i]<value){
            left.push(array[i]);
        }else if(array[i]>value){
            right.push(array[i]);
        }
    }
    return quickSort(left).concat([value], quickSort(right));
}