const indexDesignLoad = () => {

    window.addEventListener('scroll', function(event){
        const position = this.scrollY;
        if(position >= 120){
            const HEADING = document.getElementById('identity').children[0].children[0];
            const IMAGES = document.querySelectorAll('#identityImage');

            HEADING.classList.add('leftTorightAnimation');
            IMAGES.forEach(e => {
                e.classList.add('zeroToFullAnimation');
            })
        }
        if(position >= 500){
            const DESCCART = document.querySelectorAll('.index__description-item');
            DESCCART.forEach(e => {
                e.classList.add('clockWiseAnimation');
            })
        }
        if(position >= 1340){
            const HEADING = document.getElementById('levels').children[0];
            HEADING.classList.add('rightToleftAnimation');
        }
    })
}

indexDesignLoad();