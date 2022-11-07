document.addEventListener('DOMContentLoaded', function() {
    // конечная дата
    const deadline = new Date(2022, 12, 31);
    // id таймера
    let timerId = null;
  
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      // if (diff <= 0) {
      //   clearInterval(timerId);
      // }
  
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $hours[1].textContent = hours < 10 ? '0' + hours : hours;
      $minutes[1].textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds[1].textContent = seconds < 10 ? '0' + seconds : seconds;
      $hours[0].textContent = hours < 10 ? '0' + hours : hours;
      $minutes[0].textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds[0].textContent = seconds < 10 ? '0' + seconds : seconds;
    }
  
  
    
    // получаем элементы, содержащие компоненты даты

    const $hours = document.querySelectorAll('.timer__hours');
    const $minutes = document.querySelectorAll('.timer__minutes');
    const $seconds = document.querySelectorAll('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  });
  
  
  //изменение имени при медиазапросе
  function changeTimeName(match){    

  const $hours = document.querySelectorAll(".hours");
  const $minutes = document.querySelectorAll(".minutes");
  const $seconds = document.querySelectorAll(".seconds");// 
  
    $hours[1].textContent = match.matches ? 'HH': "hours";
    $minutes[1].textContent = match.matches ? 'MM' : "minutes";
    $seconds[1].textContent = match.matches ? 'SS' : "seconds";

    $hours[0].textContent = match.matches ? 'HH': "hours";
    $minutes[0].textContent = match.matches ? 'MM' : "minutes";
    $seconds[0].textContent = match.matches ? 'SS' : "seconds";
  
  }
  
  let resolutionMatch = window.matchMedia("(max-width: 768px)");
  changeTimeName(resolutionMatch);
  resolutionMatch.addListener(changeTimeName);
  
  
  
  
  
  const popup = document.getElementById('popup');
  document.getElementById('close-popup').addEventListener('click', () => {
    popup.classList.add('invise');
  });
  
  document.getElementById('crosshair')
  .addEventListener('click', () => {
    popup.classList.add('invise');
  });
  

  
  
//   document.getElementById('form').addEventListener('submit', function(e) {
//   e.preventDefault(); 
//   let data = document.getElementById('email').value 
//   let countOfMail=data.length                     //ответ сервера зависит от количества букв введнных в форму, до 13 ответ сервера 200,
//       var xhr = new XMLHttpRequest();
//     xhr.open("GET", `https://reqres.in/api/products/${countOfMail}`
//     );            
  
//     xhr.onload = function(){
//       console.log(xhr.responseText)
//         if(xhr.status === 200)
//         {
//           document.getElementById('email').value=""
//           MyResponse(true)
//         }
//         else
//         {
//           document.getElementById('email').value=""
//           MyResponse(false)
//         }
//     };
//     xhr.send();
//   })
  