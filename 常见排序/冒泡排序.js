//比较相邻两个数,前面比后面大,那么交换它们。
window.onload = function(){
    arr = [2, 4, 7, 8, 3, 23, 65, 43, 12, 34];
    function BubbleSort(array){
        for(var i=array.length-1;i>0;i--){
            for(var j=0;j<i;j++){
                if(array[j]>array[j+1]){
                    var temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
        }
        return array;
    }

    var n = BubbleSort(arr);
    console.log(n);
}

