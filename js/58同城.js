var addcontent = document.getElementsByClassName('addcontent'),
    primary = addcontent[2].className,
    addcontent_content = document.getElementsByClassName('addcontent_content');

// 个人中心添加内容
var addcontent_test3_enter = function(){
    addcontent[3].className += ' moreHeight1';
}
addcontent[3].addEventListener('mouseenter' , addcontent_test3_enter , false);

var addcontent_test3_leave = function(){
    addcontent[3].className = primary;
}
addcontent[3].addEventListener('mouseleave' , addcontent_test3_leave , false);

// 商家中心添加内容
var addcontent_test2_enter = function(){
    addcontent[2].className += ' moreHeight2';
}
addcontent[2].addEventListener('mouseenter' , addcontent_test2_enter , false);

var addcontent_test2_leave = function(){
    addcontent[2].className = primary;
}
addcontent[2].addEventListener('mouseleave' , addcontent_test2_leave , false);

// 帮助中心添加内容
var addcontent_test1_enter = function(){
    addcontent_content[1].style.display = 'block';
}
addcontent[1].addEventListener('mouseenter' , addcontent_test1_enter , false);

var addcontent_test1_leave = function(){
    addcontent_content[1].style.display = 'none';
}
addcontent[1].addEventListener('mouseleave' , addcontent_test1_leave , false);

// 网站导航内容
var addcontent_test0_enter = function(){
    addcontent_content[0].style.display = 'block';
}

addcontent[0].addEventListener('mouseenter' , addcontent_test0_enter , false);

var addcontent_test0_leave = function(){
    addcontent_content[0].style.display = 'none';
}

addcontent[0].addEventListener('mouseleave' , addcontent_test0_leave , false);

// 搜索框
var search = document.getElementsByClassName('searchChange')[0];
search.addEventListener('focus' , searchFocus , false);
function searchFocus(){
    // console.log('我执行了呀');
    if(search.value == '招聘季月薪10000+'){
        search.value = '';
        search.style.color = 'black';
    }
}

search.addEventListener('blur' , searchBlur , false);
function searchBlur(){
    // console.log('我执行了呀');
    if(search.value == ''){
        search.value = '招聘季月薪10000+';
        search.style.color = 'rgb(170, 170, 170)';
    }
}

// 右侧导航栏
var div =  document.getElementsByClassName('content2'),
    rightNav = document.getElementsByClassName('rightNav'),
    divLen = div.length;
for(var i = 0 ; i < divLen ; i++){
    var rightNavFn1 = (function(n){
        var test = function(){
            rightNav[n].style.display = 'block';
        }
        return test;
    }(i))
    div[i].addEventListener('mouseenter' , rightNavFn1 , false);
}
for(var i = 0 ; i < divLen ; i++){
    var rightNavFn2 = (function(n){
        var test = function(){
            rightNav[n].style.display = 'none';
        }
        return test;
    }(i))
    div[i].addEventListener('mouseleave' , rightNavFn2 , false);
}

