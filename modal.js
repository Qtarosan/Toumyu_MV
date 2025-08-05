document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('videoModal');
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const closeBtn = document.querySelector('.close');
    const videoFrame = document.getElementById('videoFrame');

    const videoUrls = {
        'キミの詩': 'https://www.youtube.com/embed/Wo73IohPGuU',
        'ユメひとつ': 'https://www.youtube.com/embed/u-gfKGDFJE0',
        '勝利の凱歌': 'https://www.youtube.com/embed/nulwO84yjbU',
        '見つめてくれるなら': 'https://www.youtube.com/embed/HuF_c6Hui5Q',
        'BE_IN_SIGHT': 'https://www.youtube.com/embed/3yj6XXs0zx4',
        '決戦の鬨': 'https://www.youtube.com/embed/_QaDWYc5iiA',
        '静寂の闘志': 'https://www.youtube.com/embed/zM92fLb-Tv4',
        '約束の空': 'https://www.youtube.com/embed/jvR1pTJWo6A',
        'Free_style': 'https://www.youtube.com/embed/95c5g6PZXfk',
        'Scarlet_Lips': 'https://www.youtube.com/embed/rICOKu5_N_U',
        '問わず語り': 'https://www.youtube.com/embed/aDvNW5RpzsY',
        '焔': 'https://www.youtube.com/embed/xOrYRQKaYQY',
        'お前が知っている': 'https://www.youtube.com/embed/m09I1OgwsIY',
        'IGNITION': 'https://www.youtube.com/embed/KBIHndTFZF4',
        'Impulse': 'https://www.youtube.com/embed/Qzhn_225mKM',
        'STARTING_NOW': 'https://www.youtube.com/embed/2oW6TfhFpXQ'
    };

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const videoTitle = this.getAttribute('data-video');
            const videoUrl = videoUrls[videoTitle];
            
            if (videoUrl) {
                videoFrame.src = videoUrl;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; 
            } else {
                alert('この動画は現在利用できません。');
            }
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        videoFrame.src = ''; 
        document.body.style.overflow = 'auto'; 
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            videoFrame.src = ''; 
            document.body.style.overflow = 'auto'; 
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            videoFrame.src = ''; 
            document.body.style.overflow = 'auto'; 
        }
    });
}); 
