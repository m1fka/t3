let goLoading = 0;
let goProgflake = false;
let OpenheaderOnOff = true;

const body = document.querySelector('body');

const headerOnOff = document.querySelector('.on-off');
const On = document.querySelector('.on-off .on');
const Off = document.querySelector('.on-off .off');
const runner = document.querySelector('.on-off .runner');

const loading = document.querySelector('.loading-anim');
const lamp = document.querySelector('.lamp');
const light = document.querySelector('.lamp-light');
const names = document.querySelector('.name-sayt');


headerOnOff.addEventListener('click', () => {
    if (OpenheaderOnOff) {
        OpenheaderOnOff = false;

        body.classList.toggle('change');

        On.classList.toggle('open_on-off');
        Off.classList.toggle('open_on-off');
        runner.classList.toggle('open_on-off');

        loading.classList.toggle('open_light');
        lamp.classList.toggle('open_light');
        light.classList.toggle('open_light');
        names.classList.toggle('open_light');

        if (goLoading == 0) {

            goProgflake = true;
            goLoading = 1;
        }
        else {

            goProgflake = false;
            goLoading = 0;
        }
        setTimeout(() => {
            if (goLoading == 1) {
                setTimeout(() => {
                    if (goLoading == 1) {
                        setTimeout(() => {
                            if (goLoading == 1) {
                                setTimeout(() => {
                                    if (goLoading == 1) {
                                        changePage()
                                    }
                                }, 700)
                            }
                        }, 700)
                    }
                }, 700)
            }
        }, 700)

        setTimeout(() => {
            OpenheaderOnOff = true;
        }, 1000)
    }

})

function changePage() {
    window.location.href = 'second.html'
}


// function scrollHeight(){
//     document.body.style.height = 1688+"px";
//     document.body.style.position = "absolute";
//     window.scrollTo({
//         top: document.body.scrollHeight,behavior:'smooth'//плавная прокрутка вниз
//     })
//     setTimeout(()=>{
//         document.body.style.top = -844 +'px';
//         document.body.style.position = "fixed";

//     },1000)
// }



////////

function createProgflake1() {

    const progflake = document.createElement('div');
    progflake.className = 'flake1';
    // прекращаем работу функции
    if (!goProgflake) {
        clearInterval();
        return;
    }
    progflake.style.color = '#d1d1d1';
    progflake.style.zIndex = 50;
    progflake.style.opacity = 0.2;
    progflake.textContent = '⚫';

    progflake.style.left = Math.random() * (226 - 108) + 108 + 'px';//рандомное пололжение относительно окна
    progflake.style.fontSize = Math.random() * (4 - 2) + 2 + 'px'; // Рандомный размер
    progflake.style.animationDuration = Math.random() * (5 - 3) + 3 + 's'; // Рандомная скорость взлета
    document.body.append(progflake);

    setTimeout(() => {
        progflake.remove();
    }, parseFloat(progflake.style.animationDuration) * 1000);//продолжительность полета
}


function createProgflake2() {

    const progflake = document.createElement('div');
    progflake.className = 'flake2';
    // прекращаем работу функции
    if (!goProgflake) {
        clearInterval();
        return;
    }
    progflake.style.color = '#d1d1d1';
    progflake.style.zIndex = 50;
    progflake.style.opacity = 0.2;
    progflake.textContent = '⚫';

    // progflake.textContent = '▫';

    progflake.style.left = Math.random() * (220 - 108) + 108 + 'px';//рандомное пололжение относительно окна
    progflake.style.fontSize = Math.random() * (4 - 2) + 2 + 'px'; // Рандомный размер
    progflake.style.animationDuration = Math.random() * (5 - 3) + 3 + 's'; // Рандомная скорость взлета
    document.body.append(progflake);

    setTimeout(() => {
        progflake.remove();
    }, parseFloat(progflake.style.animationDuration) * 1000);//продолжительность полета
}

//вызов функции с определенной частотой появления слов 
setInterval(createProgflake1, 150);
setInterval(createProgflake2, 150);


// const lowerShadow = document.querySelector('.lower-shadow');
// function lowerWindow() {
//     lowerShadow.style.top = window.innerHeight - 100 + 'px';
// }
// lowerWindow();



// аватар выводит в файле second-js

export async function getUserProfilePhoto() {

    const token = '7613900220:AAEYOhF_VUB5_L5xdhpsvX8oE-ni0fHGzLY'; // Замените на ваш токен
    const userId = '852766243'; // Замените на ID пользователя
    const tgMy = document.querySelector('.tg-my img');


    try {
        const response = await fetch(`https://api.telegram.org/bot${token}/getUserProfilePhotos?user_id=${userId}`);
        const data = await response.json();

        if (data.ok && data.result.total_count > 0) {
            const photo = data.result.photos[0]; // Получаем первую аватарку
            const fileId = photo[photo.length - 1].file_id; // Получаем file_id самого большого размера
            const fileResponse = await fetch(`https://api.telegram.org/bot${token}/getFile?file_id=${fileId}`);
            const fileData = await fileResponse.json();

            if (fileData.ok) {
                const filePath = fileData.result.file_path;
                const avatarUrl = `https://api.telegram.org/file/bot${token}/${filePath}`;
                console.log(avatarUrl); // URL аватарки

                tgMy.src = avatarUrl;
            }
            else {
                tgMy.src = 'style/avatar-notDefined.png';
            }
        } else {
            // console.log('Аватарка не найдена');
            tgMy.src = 'style/avatar-notDefined.png';
        }
    } catch (error) {
        // console.error('Ошибка:', error);
        tgMy.src = 'style/avatar-notDefined.png';
    }
}