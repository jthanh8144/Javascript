const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const heading = $('header h2');
const cd = $('.cd');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');
const player = $('.player');
const progress = $('#progress');
const nextBtn = $('.btn-next');
const preBtn = $('.btn-prev');

var isPlaying = false;

const app = {
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
    render: function() {
        const htmls = this.songs.map(song => {
            return `
                <div class="song">
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
        $('.playlist').innerHTML = htmls.join('');
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex];
            }
        })
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
            _this.nextSong();
            audio.play();
        }
        preBtn.onclick = () => {
            _this.preSong();
            audio.play();
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
    start: function() {
        this.defineProperties();
        this.handleEvent();

        this.loadCurrentSong();
        this.render();
    }
}

app.start()