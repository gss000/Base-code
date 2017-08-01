/**
 * Created by Administrator on 2017/3/15.
 */
//浏览器检测
//navigator.appName 浏览器名称
//navigator.appVersion 浏览器版本
//navigator.userAgent 浏览器用户代理字符串
//navigator.platform; 浏览器所在系统
//BrowserDetect.browser 浏览器名称
//BrowserDetect.version 浏览器版本
//BrowseDetect.Os 宿主操作系统

function myBrowser(){
    var userAgent = navigator.userAgent;
    var isOpera = userAgent.indexOf('Opera')>-1;
    if(isOpera){
        return 'Opera';
    }
    if(userAgent.indexOf('Firefox')>-1){
        return 'Firefox';
    }
    if(userAgent.indexOf('Chrome')> -1){
        return 'Chrome';
    }
    if(userAgent.indexOf('Safari') > -1){
        return 'Safari';
    }
    if(userAgent.indexOf('compatible') > -1 &&
        userAgent.indexOf('MSIE') > -1 &&
        !isOpera){
        return 'IE';
    }
}

var Browser = myBrowser();
if ("IE" == Browser) {
        alert("IE");
    }
if ("Firefox" == Browser) {
        alert("Firefox");
    }
if ("Chrome" == Browser) {
        alert("Chrome");
    }
if ("Opera" == Browser) {
        alert("Opera");
    }
 if ("Safari" == Browser) {
        alert("Safari");
    }