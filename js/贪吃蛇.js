var snakeWidth = 15,
    snakeHeight = 15,
    foodWidth = 15,
    foodHeight = 15,
    button = document.getElementsByTagName('button')[0],
    map = document.getElementsByClassName('map')[0],
    input = document.getElementsByTagName('input')[0];
// 构造蛇体
function Snake(){
    // 构造蛇体初始的三个位置(看的是左上角的位置),最后在下面乘上你想要的宽度和高度就可以
    this.snakeBody = [
        {x : 2 , y : 0},
        {x : 1 , y : 0},
        {x : 0 , y : 0}
    ];
    this.direction = 'right';
    this.snakeLen = this.snakeBody.length;
    this.initialPosition = function(){
        for(var i = 0 ; i < this.snakeLen ; i++){
            var div = document.createElement('div');
            map.appendChild(div);
            div.style.position = 'absolute';
            div.style.width = snakeWidth + 'px';
            div.style.height = snakeHeight + 'px';
            div.style.left = snake.snakeBody[i].x*snakeWidth + 'px';
            div.style.top = snake.snakeBody[i].y*snakeHeight + 'px';
            div.style.backgroundColor = '#00BFFF';
            div.style.borderRadius = '50%';
            div.className = 'snakebody';
        } 
    }
}


// 构造食物
function Food(){
    this.foodRandom = function(){
        var div = document.createElement('div');
        map.appendChild(div);
        div.style.position = 'absolute';
        div.style.backgroundColor = 'red';
        div.style.width = foodWidth + 'px';
        div.style.height = foodHeight + 'px';
        // Math.random()(随机选取大于等于0且小于1的伪随机double值)
        // 40*Math.random()就是产生(0,40)之间的随机数,再用int或parseInt之类的取整
        div.style.left = parseInt(40 * Math.random()) * foodWidth + 'px';
        div.style.top = parseInt(40 * Math.random()) * foodHeight + 'px';
        div.style.borderRadius = '50%';
        div.className = 'oneFood';
    }
}


var food = new Food();
var snake = new Snake();

// 绑定button点击事件
button.addEventListener('click' , incident1 , false);
function incident1(){
    this.style.display = 'none';
    // console.log(snakeLen);
    snake.initialPosition();
    food.foodRandom();
    // 这里构造蛇体可以写入Snake对象里面,因为下面撞墙之后还要进行蛇体重构
    // for(var i = 0 ; i < snakeLen ; i++){
    //     var div = document.createElement('div');
    //     map.appendChild(div);
    //     div.style.position = 'absolute';
    //     div.style.width = snakeWidth + 'px';
    //     div.style.height = snakeHeight + 'px';
    //     div.style.left = snake.snakeBody[i].x*snakeWidth + 'px';
    //     div.style.top = snake.snakeBody[i].y*snakeHeight + 'px';
    //     div.style.backgroundColor = '#00BFFF';
    //     div.style.borderRadius = '50%';
    //     div.className = 'snakebody';
    // }

    // keydown可以响应键盘上的所有按键,并且上下左右没有大小写之分,所有可以通过.which来判断,然后修改snake的direction属性
    document.addEventListener('keydown' , keyBoard ,false);
    function keyBoard(e){
        switch (e.which){
            // 这里应该还要添加一个功能,不能反向按键,比如说蛇体朝下运动,就不能按上键
            case 39 :
                snake.direction = 'right'; break;
            case 37 :
                snake.direction = 'left'; break;
            case 40 :
                snake.direction = 'bottom'; break;
            case 38 :
                snake.direction = 'top'; break;
        }
    }


    var timer1 = setInterval(function(){
        // console.log(head);
        var snakeB = document.getElementsByClassName('snakebody');
        var foodB = document.getElementsByClassName('oneFood');
        // console.log(foodB);
        // console.log(snakeB);
        // 这里现在还没有考虑吃食物增加身体的情况,目前只是3节身体进行考虑,而且据观察这个好像是实时更新的,所以后面如果迟到食物的话,这里也会相应的添加
        var snakeBLen = snakeB.length;
        // console.log(snakeBLen);
        if(parseInt(snakeB[0].style.left) == 0 && snake.direction == 'left' || parseInt(snakeB[0].style.top) == 0 && snake.direction == 'top' || parseInt(snakeB[0].style.left) + snakeWidth == 600 && snake.direction == 'right' || parseInt(snakeB[0].style.top) + snakeWidth == 600 && snake.direction == 'bottom' ){
            alert('笨死了,这墙你都要撞吗!');
            input.value = 0;
            // 因为前面只考虑本身的3节身体,所以这里直接for循环来解决重构问题
            for(var i = snakeBLen - 1 ; i >= 0 ; i--){
                snakeB[i].remove();
            }
            foodB[0].remove();
            button.style.display = '';
            // 这里一定不要忘记对蛇的初始运动方向进行重构
            snake.direction = 'right';
            // 如果不清除定时器任务的话,就相当于两个定时器函数同时执行
            clearInterval(timer1);
        }else if(true){
            for(var i = 1 ; i < snakeBLen ; i++){
                if(parseInt(snakeB[0].style.left) - snakeWidth == parseInt(snakeB[i].style.left) && parseInt(snakeB[0].style.top) == parseInt(snakeB[i].style.top) &&  snake.direction == 'left' || parseInt(snakeB[0].style.top) - snakeHeight == parseInt(snakeB[i].style.top) && parseInt(snakeB[0].style.left) == parseInt(snakeB[i].style.left) && snake.direction == 'top'|| parseInt(snakeB[0].style.left) + snakeWidth == parseInt(snakeB[i].style.left) && parseInt(snakeB[0].style.top) == parseInt(snakeB[i].style.top) &&  snake.direction == 'right' || parseInt(snakeB[0].style.top) + snakeHeight == parseInt(snakeB[i].style.top) && parseInt(snakeB[0].style.left) == parseInt(snakeB[i].style.left) && snake.direction == 'bottom'){
                    alert('你傻啊,自己吃自己!');
                    input.value = 0;
                    for(var i = snakeBLen - 1 ; i >= 0 ; i--){
                        snakeB[i].remove();
                    }
                    foodB[0].remove();
                    button.style.display = '';
                    // 这里一定不要忘记对蛇的初始运动方向进行重构
                    snake.direction = 'right';
                    // 如果不清除定时器任务的话,就相当于两个定时器函数同时执行
                    clearInterval(timer1);
                }
            }
        }
        // 这里反向赋值就可以不用中间变量继承数值了
        for(var i = snakeBLen - 1 ; i > 0 ; i--){
            snakeB[i].style.left = snakeB[i - 1].style.left;
            snakeB[i].style.top = snakeB[i - 1].style.top;        
        }
        // console.log(snake.direction);
        switch(snake.direction){
            case 'right' :
                snakeB[0].style.left = parseInt(snakeB[0].style.left) + snakeWidth + 'px'; break;
            case 'left' :
                snakeB[0].style.left = parseInt(snakeB[0].style.left) - snakeWidth + 'px'; break;
            case 'bottom' :
                snakeB[0].style.top = parseInt(snakeB[0].style.top) + snakeHeight + 'px'; break;
            case 'top' :
                snakeB[0].style.top = parseInt(snakeB[0].style.top) - snakeHeight + 'px'; break;   
        }

        // 这里添加一个if条件判断语句来吃食物,将食物的display变成none,然后创建一个div加入到snakeB中
        if(parseInt(snakeB[0].style.left) == parseInt(foodB[0].style.left) && parseInt(snakeB[0].style.top) == parseInt(foodB[0].style.top)){
            input.value = parseInt(input.value) + 1;
            foodB[0].remove();
            var div = document.createElement('div');
            div.className = 'snakebody';
            map.appendChild(div);
            div.style.position = 'absolute';
            div.style.left = snakeB[snakeBLen - 1].style.left;
            div.style.top = snakeB[snakeBLen - 1].style.top;
            div.style.height =  snakeHeight + 'px';
            div.style.width =  snakeWidth + 'px';
            div.style.backgroundColor = '#00BFFF';
            div.style.borderRadius = '50%';
            food.foodRandom();
        }
    },500);
}
