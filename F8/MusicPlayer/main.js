const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'PLAYER';

const playlist = $('.playlist');
const heading = $('header h2');
const cd = $('.cd');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');
const player = $('.player');
const progress = $('#progress');
const nextBtn = $('.btn-next');
const preBtn = $('.btn-prev');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');

const app = {
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    currentIndex: 0,
    songs: [
        {
            name: "Từ thích thích thành thương thương",
            singer: "Amee x Hoàng Dũng",
            path: "./resources/music/AMEE, Hoàng Dũng - từ thích thích thành thương thương.mp3",
            image: "./resources/img/tttttt.jpg"
        },
        {
            name: "Gặp nhưng không ở lại",
            singer: "Hiền Hồ x Vương Anh Tú",
            path: "./resources/music/Hiền Hồ, Vương Anh Tú - Gặp Nhưng Không Ở Lại.mp3",
            image: "./resources/img/gnkol.jpg"
        },
        {
            name: "Ngày mình giận nhau",
            singer: "Anh Tú ft LyLy",
            path: "./resources/music/Ngay Minh Gian Nhau - Anh Tu_ Lyly_ XHTD.mp3",
            image: "./resources/img/nmgn.jpg"
        },
        {
            name: "Nói chia tay thật khó",
            singer: "Thùy Chi, Trấn Thành",
            path: "./resources/music/NoiChiaTayThatKho-TranThanhThuyChi-6738009.mp3",
            image: "./resources/img/ncttk.jpg"
        },
        {
            name: "Bước qua mùa cô đơn",
            singer: "Vũ",
            path: "./resources/music/Vũ – Bước Qua Mùa Cô Đơn.mp3",
            image: "./resources/img/bqmcd.jpg"
        },
        {
            name: "Sài gòn hôm nay mưa",
            singer: "Hoàng Duyên & JSOL",
            path: "http://vnno-vn-6-tf-mp3-s1-zmp3.zadn.vn/6adf85ae97e87eb627f9/5151330597951198564?authen=exp=1625213314~acl=/6adf85ae97e87eb627f9/*~hmac=64db9e529c74d74d90d58469dbb2eec9",
            image: "https://i.scdn.co/image/ab67616d0000b273d1b5e4b7be8a727c73bfcc53"
        }
    ],
    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
    },
    loadConfig: function() {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
        
        repeatBtn.classList.toggle('active', this.isRepeat);
        randomBtn.classList.toggle('active', this.isRandom);
    },
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
                <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="thumb" style="background-image: url('${song.image}')"></div>

                    <div class="body">
                        <div class="title">${song.name}</div>
                        <p class="author">${song.singer}</p>
                    </div>

                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>`
        });
        playlist.innerHTML = htmls.join('');
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex];
            }
        });
    },
    handleEvent: function() {
        const _this = this;
        const cdWidth = cd.offsetWidth;

        const cdThumbAnimate = cdThumb.animate([{
                transform: "rotate(360deg)"
            }
        ], {
            duration: 10000,
            iterations: Infinity
        });
        cdThumbAnimate.pause();

        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        };

        
        audio.onplay = function() {
            _this.isPlaying = true;
            player.classList.add('playing');
            cdThumbAnimate.play();
        }
        audio.onpause = function() {
            _this.isPlaying = false;
            player.classList.remove('playing');
            cdThumbAnimate.pause();
        }
        playBtn.onclick = function() {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        }

        audio.ontimeupdate = function() {
            if (audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                progress.value = progressPercent;
            }
        }

        progress.onchange = function(e) {
            const seekTime = audio.duration * e.target.value / 100;
            audio.currentTime = seekTime;
        }

        nextBtn.onclick = () => {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        }
        preBtn.onclick = () => {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.preSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        }

        randomBtn.onclick = () => {
            _this.isRandom = !_this.isRandom;
            _this.setConfig('isRandom', _this.isRandom);
            randomBtn.classList.toggle('active', _this.isRandom);
        }

        audio.onended = () => {
            if (this.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        }

        repeatBtn.onclick = () => {
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig('isRepeat', _this.isRepeat);
            repeatBtn.classList.toggle('active', _this.isRepeat);
        }

        playlist.onclick = (e) => {
            const songElement = e.target.closest('.song:not(.active)');
            if (songElement || e.target.closest('.option')) {
                if (songElement && !e.target.closest('.option')) {
                    _this.currentIndex = Number(songElement.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                }
                if (e.target.closest('.option')) {
                    // xử lí
                }
            }
        }
    },
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },
    nextSong: function() {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    preSong: function() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    playRandomSong: function() {
        var newIndex;
        do {
            newIndex = Math.floor(Math.random() * app.songs.length)
        } while (this.currentIndex === newIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },
    scrollToActiveSong: function() {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }, 100);
    },
    start: function() {
        this.loadConfig();

        this.defineProperties();
        this.handleEvent();

        this.loadCurrentSong();
        this.render();
    }
}

app.start()