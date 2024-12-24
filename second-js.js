let goLoading = 0;
let OpenheaderOnOff = true;

const body = document.querySelector('body');

const headerOnOff = document.querySelector('.on-off');
const On = document.querySelector('.on-off .on');
const Off = document.querySelector('.on-off .off');
const runner = document.querySelector('.on-off .runner');

// function topWindow() {
//     headerOnOff.style.top = window.innerHeight - 844 + 'px';
// }
// topWindow();

headerOnOff.addEventListener('click', () => {
    if (OpenheaderOnOff) {
        OpenheaderOnOff = false;

        body.classList.toggle('change');

        On.classList.toggle('open_on-off');
        Off.classList.toggle('open_on-off');
        runner.classList.toggle('open_on-off');

        if (goLoading == 0) {

            goLoading = 1;
        }
        else {

            goLoading = 0;
        }
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

        setTimeout(() => {
            OpenheaderOnOff = true;
        }, 1000)
    }
})

function changePage() {
    window.location.href = 'index.html'
}


// прокрут









// let posX = 0;
// let posY = 0;
// window.addEventListener('touchmove',e=>{
//     const{clientX, clientY} = e.touches;[0]
//     if(posY>clientY){//вверх

//     }
//     if(posY<clientY){
//         if (844 > posY && posY >= 0) {
//             window.scrollTo({ top: 844, behavior: 'smooth' });
//         }
//         if (1688 > posY && posY >= 844) {
//             window.scrollTo({ top: 1688, behavior: 'smooth' });
//         }
//         if (2532 > posY && posY >= 1688) {
//             window.scrollTo({ top: 2532, behavior: 'smooth' });
//         }
//     }
//     posX = clientX;
//     posY = clientY;
// })







// window.addEventListener('wheel', (e) => {

//     const scrollY = window.scrollY;
//     //e.preventDefault();//предотвращает стандартный скролл

//     if (e.deltaY > 0) {//вниз
// if (844 > scrollY >= 0) {
//     window.scrollTo({ top: 844, behavior: 'smooth' });
// }
// if (1688 > scrollY && scrollY >= 844) {
//     window.scrollTo({ top: 1688, behavior: 'smooth' });
// }
// if (2532 > scrollY && scrollY >= 1688) {
//     window.scrollTo({ top: 2532, behavior: 'smooth' });
// }
//     }
//     if (e.deltaY < 0) {
// if (0 < scrollY && scrollY <= 844) {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// }
// if (844 < scrollY && scrollY <= 1688) {
//     window.scrollTo({ top: 844, behavior: 'smooth' });
// }
// if (1688 < scrollY && scrollY <= 2532) {
//     window.scrollTo({ top: 1688, behavior: 'smooth' });
// }
//     }
// })






// аватар

    // tgMy.src = 'style/avatar-notDefined.png';

// async function getUserProfilePhoto() {

//     const token = '7613900220:AAEYOhF_VUB5_L5xdhpsvX8oE-ni0fHGzLY'; // Замените на ваш токен
//     const userId = '852766243'; // Замените на ID пользователя
//     const tgMy = document.querySelector('.tg-my img');


//     try {
//         const response = await fetch(`https://api.telegram.org/bot${token}/getUserProfilePhotos?user_id=${userId}`);
//         const data = await response.json();

//         if (data.ok && data.result.total_count > 0) {
//             const photo = data.result.photos[0]; // Получаем первую аватарку
//             const fileId = photo[photo.length - 1].file_id; // Получаем file_id самого большого размера
//             const fileResponse = await fetch(`https://api.telegram.org/bot${token}/getFile?file_id=${fileId}`);
//             const fileData = await fileResponse.json();

//             if (fileData.ok) {
//                 const filePath = fileData.result.file_path;
//                 const avatarUrl = `https://api.telegram.org/file/bot${token}/${filePath}`;
//                 console.log(avatarUrl); // URL аватарки

//                 tgMy.src = avatarUrl;
//             }
//             else {
//                 tgMy.src = 'style/avatar-notDefined.png';
//             }
//         } else {
//             // console.log('Аватарка не найдена');
//             tgMy.src = 'style/avatar-notDefined.png';
//         }
//     } catch (error) {
//         // console.error('Ошибка:', error);
//         tgMy.src = 'style/avatar-notDefined.png';
//     }
// }
import{getUserProfilePhoto}from './index-js.js';
getUserProfilePhoto();


