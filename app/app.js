function findMin(array)
{
    var min = array[0];
    var check = 0;
    for(var i in array){
        if(Number.isInteger(array[i])){
            if(array[i]<min){
                min = array[i];
            }
        }else{
            check = 1;
        }

    }

    if(check == 0){
        return min;
    }else{
        return false;
    }

}
module.exports = {
    findMin: findMin
};
