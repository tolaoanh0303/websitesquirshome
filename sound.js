// Lấy phần tử audio và các btn
var audioElement = document.querySelector('audio');
var playButton = document.querySelector('.play_box_icon_play');
var pauseButton = document.querySelector('.play_box_icon_pause');
var playForwardButton = document.querySelector('.play_box_icon_playforward');
var playBackButton = document.querySelector('.play_box_icon_playback');
var songNameElement = document.querySelector('.songname_1');
const playSong = document.querySelector('.play_song')
const songLists = document.querySelectorAll('.audio img')

pauseButton.style.visibility = 'hidden';

// Đặt event click cho play
playButton.addEventListener('click', function() {
    // Bắt đầu phát nhạc
    audioElement.play();
    // Ẩn  play và hiển thị pause
    playButton.style.visibility = 'hidden';
    pauseButton.style.visibility = 'visible';
});

// Đặt event click cho pause
pauseButton.addEventListener('click', function() {
    // Dừng nhạc
    audioElement.pause();
    // Ẩn  pause và hiển thị play
    pauseButton.style.visibility = 'hidden';
    playButton.style.visibility = 'visible';
});

// Đặt event click cho playback
playBackButton.addEventListener('click', function() {
    // Cập nhật biến theo dõi
    currentSound = (currentSound - 1 + sounds.length) % sounds.length;
    // Cập nhật nguồn của phần tử audio và phát nhạc
    audioElement.src = sources[currentSound].src;
    songNameElement.textContent = sources[currentSound].title;
    pauseButton.style.visibility = 'hidden';
    playButton.style.visibility = 'visible';
});

// Đặt event click cho playforward
playForwardButton.addEventListener('click', function() {
    // Cập nhật biến theo dõi
    currentSound = (currentSound + 1) % sources.length;
    // Cập nhật nguồn của phần tử audio và phát nhạc
    audioElement.src = sources[currentSound].src;
    songNameElement.textContent = sources[currentSound].title;
    pauseButton.style.visibility = 'hidden';
    playButton.style.visibility = 'visible';
});

// Mảng chứa tên của các file âm thanh
var sounds = ["sound1.mp3", "sound2.mp3", "sound3.mp3", "sound4.mp3"];
var sources = [
    {
        title:"Thiên nhiên 1",
        src:"sound1.mp3"
    },
    {
        title:"Thiên nhiên 2",
        src:"sound2.mp3"
    },
    {
        title:"Thiên nhiên 3",
        src:"sound3.mp3"
    },
    {
        title:"Thiên nhiên 4",
        src:"sound4.mp3"
    },
]
var displayNames = ["Thiên nhiên 1", "Thiên nhiên 2", "Thiên nhiên 3", "Thiên nhiên 4"];
// Biến để theo dõi file âm thanh hiện tại
var currentSound = 0;

// Cập nhật nguồn của phần tử audio
audioElement.src = sounds[currentSound];


function selectSound(soundName) {
    // Hiển thị tên âm thanh
    document.querySelector('.songname_1').innerText = "~ " + soundName + " ~";
    sources.forEach((source,index)=>{
        if(soundName===source.title){
            audioElement.src=source.src
            // audioElement.play()
            currentSound=index
            pauseButton.style.visibility = 'hidden';
            playButton.style.visibility = 'visible';
        }
    })
}

