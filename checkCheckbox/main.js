
var nameClass = document.querySelectorAll('.click > .test');
for(var i = 0; i < nameClass.length; i++){
    nameClass[i].onclick = click;
}


var reverse;
var count = false;
var level_reverse = 0;


function click(){

    if(this.checked) {
        if (!count && count !== 0) {
            return count = 0;
        } else {
            count++;
            if (count > 1) {
                reverse = true;
                level_reverse = count - 1;
                var tagForBlocken = document.querySelectorAll('.click > .test');
                for(var j = 0; j < tagForBlocken.length; j++){
                    if(!tagForBlocken[j].checked){
                        tagForBlocken[j].setAttribute('disabled' , '');
                    }else{}
                }
            }
            if ((level_reverse + 1) !== count) {
                reverse = false;
            }
            return count;
        }
    }

    if(!this.checked){
        var tagForReBlocken = document.querySelectorAll('.click > .test');

        for(var k = 0; k < tagForReBlocken.length; k++){
            tagForReBlocken[k].removeAttribute('disabled');
        }
        if(reverse){
            if(count > 2 || (count > 0 && count <= 2)){
                count -= 1;
                level_reverse = count - 1;
                return count;
            }
            if(count == 0){
                count = false;
            }
        }
        if(!reverse){
            if(count <= 2 && count >= 1){
                count--;
            }
            if(count < 1){
                count = false;
            }
        }
    }
}




