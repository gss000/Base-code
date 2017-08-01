/**
 * Created by Administrator on 2017/3/28.
 */

//共享回调函数不传入参数,直接使用封装
//绑定监听事件
function addEventHandler(target, type, fn){
    if(target.addEventListener){
        target.addEventListener(type, fn);
    }else if(target.attachEvent){
        target.attachEvent('on'+type, fn);
    }
}

//移除监听事件
function removeEventHandler(target, type, fn){
    if(target.removeEventListener){
        target.removeEventListener(type, fn);
    }else{
        target.detachEvent('on'+type, fn);
    }
}

//阻止冒泡
function cancelBubble(e){
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble = true;
    }
}


<<<<<<< HEAD

=======
>>>>>>> origin/master
//事件委托,利用冒泡原理,将事件加到父元素上,触发执行效果
document.onclick = function(e){
    e = e || window.event;
    var target = e.target || e.srcElement;
    fn();
}
