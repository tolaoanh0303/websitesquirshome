// Phóng to màn hình

document.querySelector(".option_icon").addEventListener("click", function () {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen(); 
        }
    }
});


// document.querySelector('.play_box_icon_micbox').addEventListener('click', function() {
//     var mic = this.querySelector('.fa-micro--on');
//     var micSlash = this.querySelector('.fa-micro--off');
    
//     micSlash.style.display = 'none';

//     if (mic.style.display === 'none') {
//         mic.style.display = 'none';
//         micSlash.style.display = 'block';
//     } else {
//         mic.style.display = 'block';
//         micSlash.style.display = 'none';
//     }
// });


// Nhấn mic đổi thành mic slash

var micoffBtn = document.querySelector('.fa-micro--off');
var miconBtn = document.querySelector('.fa-micro--on');


//Nhấn tắt mic thành nút bật mic
micoffBtn.addEventListener('click', function(){
    micoffBtn.style.visibility = 'hidden';
    miconBtn.style.display = 'block';
});

//Nhấn nút bật mic thành nút tắt mic

miconBtn.addEventListener('click', function(){
    micoffBtn.style.visibility = 'visible';
    miconBtn.style.display = 'none';
})




// Nhấn vào icon thời gian hiện lên box thời gian
document.addEventListener('DOMContentLoaded', function(){
    const timeChoose = document.getElementById('menu_icon_1')
    const timeBox = document.getElementById('timebox')

    timeChoose.addEventListener('click', function(){
        if(timeBox.style.display === 'block'){
            timeBox.style.display = 'none';
        }else{
            timeBox.style.display = 'block';
        }
    })

})

document.addEventListener('DOMContentLoaded', function(){
    const timeboxLine = document.getElementById('timebox_line')
    const timeBox = document.getElementById('timebox')

    timeboxLine.addEventListener('click', function(){
        if(timeBox.style.display === 'none'){
            timeBox.style.display = 'block';
        }else{
            timeBox.style.display = 'none';
        }
    })

})

// Nhấn vào icon hình nền hiện box hình nền


document.addEventListener('DOMContentLoaded', function(){
    const imageChoose = document.getElementById('menu_icon_2')
    const imageBox = document.getElementById('imagebox')
    // console.log (timeChoose, timeBox)

    imageChoose.addEventListener('click', function(){
        if(imageBox.style.display === 'block'){
            imageBox.style.display = 'none'
        }else{
            imageBox.style.display = 'block'
        }
    })

})

document.addEventListener('DOMContentLoaded', function(){
    const imageboxLine = document.getElementById('imagebox_line')
    const imageBox = document.getElementById('imagebox')

    imageboxLine.addEventListener('click', function(){
        if(imageBox.style.display === 'none'){
            imageBox.style.display = 'block';
        }else{
            imageBox.style.display = 'none';
        }
    })

})

// Nhấn vào icon âm thanh hiện box âm thanh


document.addEventListener('DOMContentLoaded', function(){
    const soundChoose = document.getElementById('menu_icon_3')
    const soundBox = document.getElementById('sound_container')
    // console.log (timeChoose, timeBox)

    soundChoose.addEventListener('click', function(){
        if(soundBox.style.display === 'block'){
            soundBox.style.display = 'none'
        }else{
            soundBox.style.display = 'block'
        }
    })

})

document.addEventListener('DOMContentLoaded', function(){
    const soundboxLine = document.getElementById('soundbox_line')
    const soundBox = document.getElementById('sound_container')

    soundboxLine.addEventListener('click', function(){
        if(soundBox.style.display === 'none'){
            soundBox.style.display = 'block';
        }else{
            soundBox.style.display = 'none';
        }
    })

})


// Đổi hình nền

function background1() {
    document.querySelector('.home').style.background = "url('./nature.gif') center center / cover";
}
function background2() {
    document.querySelector('.home').style.background = "url('./1331312.png') center center / cover";
}
function background4() {
    document.querySelector('.home').style.background = "url('./240656349_356141432921335_2269866754992327566_n.jpg') center center / cover";
}
function background3() {
    document.querySelector('.home').style.background = "url('./7947194.gif') center center / cover";
}

// Nhấn vào icon điều chỉnh hiện lên box điều chỉnh

document.addEventListener('DOMContentLoaded', function(){
    const adjustChoose = document.getElementById('menu_icon_5');
    const adjustBox = document.getElementById ('adjustbox');

    adjustChoose.addEventListener('click', function(){
        if(adjustBox.style.display === 'block'){
            adjustBox.style.display = 'none';
        }else{
            adjustBox.style.display = 'block';
        }
    })
})

document.addEventListener('DOMContentLoaded', function(){
    const adjustboxLine = document.getElementById('adjustbox_line')
    const adjustBox = document.getElementById('adjustbox')

    adjustboxLine.addEventListener('click', function(){
        if(adjustBox.style.display === 'none'){
            adjustBox.style.display = 'block';
        }else{
            adjustBox.style.display = 'none';
        }
    })
})

// Nhấn vào icon to-do list hiện lên box to-do list

document.addEventListener('DOMContentLoaded', function(){
    const todoChoose = document.getElementById('menu_icon_4');
    const todoBox = document.getElementById('todobox');
    todoChoose.addEventListener('click', function(){
        if(todoBox.style.display === 'block'){
            todoBox.style.display = 'none';
        }else{
            todoBox.style.display = 'block';
        }
    })
})

document.addEventListener('DOMContentLoaded', function(){
    const todoboxLine = document.getElementById('todobox_line')
    const todoBox = document.getElementById('todobox')

    todoboxLine.addEventListener('click', function(){
        if(todoBox.style.display === 'none'){
            todoBox.style.display = 'block';
        }else{
            todoBox.style.display = 'none';
        }
    })
})


// Nhấn vào dấu ba chấm hiện lựa chọn
document.addEventListener('DOMContentLoaded', function(){
    const button = document.getElementById('settings_bar-dot')
    const listOp = document.getElementById ('settings_list')
    // console.log (button, listOp)

    button.addEventListener ('click', function(){
        if (listOp.style.display === 'block'){
            listOp.style.display = 'none';
        }else{
            listOp.style.display = 'block';
        }

    })
})

// Hiện và đóng box chat
document.addEventListener('DOMContentLoaded', function(){
    const inboxBtn = document.getElementById('inbox_button')
    const inbox = document.getElementById('inbox')
    // console.log(inboxBtn, inbox)

    inboxBtn.addEventListener('click', function(){
        if(inbox.style.display === 'block'){
            inbox.style.display = 'none';
        }else{
            inbox.style.display = 'block';
        }
    })
})

document.addEventListener('DOMContentLoaded', function(){
    const inboxLine = document.getElementById('inbox_title-line')
    const inbox = document.getElementById('inbox')
    // console.log(inboxBtn, inbox)

    inboxLine.addEventListener('click', function(){
        if(inbox.style.display === 'block'){
            inbox.style.display = 'none';
        }else{
            inbox.style.display = 'block';
        }
    })
})



// =========== Đổi mật khẩu và lưu thông tin ================//
//B1: lấy ra toàn bộ những element nodes cần thiết
const oldpasswordElement = document.getElementById('oldpassword')
const newpasswordElement = document.getElementById('newpassword')
const confirmpasswordElement = document.getElementById('confirmpassword')
// console.log (oldpasswordElement, newpasswordElement, confirmpasswordElement)

function updatepass() {}
//Kiểm tra xem các trường nhập có trống hay không
function validEmpty() {}


// ======= Countdown thời gian ====== //

var startBtn = document.querySelector('#start');
var pauseBtn = document.querySelector('#pause');
var resetBtn = document.querySelector('#reset');


//Nhấn bắt đầu nút bắt đầu thành nút dừng
startBtn.addEventListener('click', function(){
    startBtn.style.visibility = 'hidden';
    pauseBtn.style.display = 'block';
});

//Nhấn nút dừng chuyển thành nút bắt đầu

pauseBtn.addEventListener('click', function(){
    startBtn.style.visibility = 'visible';
    pauseBtn.style.display = 'none';
})

//Nhấn reset nút dừng thành button
resetBtn.addEventListener('click', function(){
    startBtn.style.visibility = 'visible';
    pauseBtn.style.display = 'none';
})


let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');
let homeworkTittle = document.getElementById('homework');
let practiseTittle = document.getElementById('practise');

let workTime = 30;
let breakTime = 5;
let timer = null;

let seconds = "00"

//display

window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
    homeworkTittle.classList.add('active');
}

//start timer

function start() {
    //change button

    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    //countdown
    let timerFunction = () => {
        //change the display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        //start
        seconds = seconds - 1;

        if(seconds === 0){
            workMinutes = workMinutes - 1;
            if(workMinutes === -1){
                if(breakCount % 2 === 0){
                    //start break
                    workMinutes = breakMinutes;
                    breakCount++;

                    //chang the painel
                    workTittle.classList.remove('active');
                    breakTittle.classList.add('active');
                }else{
                    //continue work
                    workMinutes = workTime;
                    breakCount++;

                    //change the painel
                    breakTittle.classList.remove('active');
                    workTittle.classList.add('active');
                }
            }
            seconds = 59;
        }
    }

    //start countdown
    timer = setInterval(timerFunction, 1000); //1000 = 1s
}

function pause() {
    clearInterval(timer);
}
let displayMinutes = document.getElementById('minutes');
let displaySeconds = document.getElementById('seconds');

function reset() {
    clearInterval(timer);
    displayMinutes.innerHTML = "30";
    displaySeconds.innerHTML = "00";
    workTittle
}

// ====== NHẤP VÀO CÁC STUDY OPTION ======

homeworkTittle.addEventListener('click', function(){
    homeworkTittle.classList.add('active');
    practiseTittle.classList.remove('active');

})

practiseTittle.addEventListener('click', function(){
    practiseTittle.classList.add('active');
    homeworkTittle.classList.remove('active');
})




