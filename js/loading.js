//브라우저가 자동으로 스크롤 위치를 복원하지 말고, 개발자가 직접 스크롤 위치를 제어
history.scrollRestoration = 'manual';

function initLoading() {
  const loadingPage = document.querySelector('.loading');
  const loadingBarProgressBar = document.querySelector('#progressBar'); 
  const loadingPercentText = document.querySelector('.loading .loading-percent');
  let percent = 0;
  const maxWidth = 380;

  const interval = setInterval(() => {
    percent++;

    const currentWidth = (maxWidth * percent) / 100;
    loadingBarProgressBar.setAttribute('width', currentWidth);
    loadingPercentText.textContent = percent + '%';

    //50%가 넘어가면 글자색 변경
    if(percent >= 50) {
      loadingPercentText.style.color = '#fff';
    }

    //100% 완료되면 타이머 중단
    if(percent >= 100) {
      clearInterval(interval);

      //로딩화면 숨김, 스크롤 제어 해제
      setTimeout(() => {
        loadingPage.classList.add('hide');
        document.body.classList.remove('is-loading');

        //로딩 완료(애니메이션 효과 적용을 위해)
        const loadingCompleteEvent = new Event('loadingComplete');
        window.dispatchEvent(loadingCompleteEvent);
      },400);
    }
  }, 30);
}



document.addEventListener('DOMContentLoaded', () => {
  //스크롤 맨 위로 이동
  window.scrollTo(0, 0);
  
  initLoading();
});