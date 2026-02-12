//contact-box : hide, show 상태
function contactBoxEffect() {
  const contactBox = document.querySelector('.contact-box');
  const contactSection = document.querySelector('#contact');

  //처음에는 hide 상태
  contactBox.classList.add('hide');

  //contact 섹션 도달했을 때 hide 상태
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      //30%이상 보이면 hide 상태
      if(entry.isIntersecting && entry.intersectionRatio >= 0.3) {
        contactBox.classList.remove('show');
        contactBox.classList.add('hide');

        //toggle 초기화
        resetContactToggle();
      }else {
        contactBox.classList.remove('hide');
        contactBox.classList.add('show');
      }
    });
  }, {threshold : 0.3});

  observer.observe(contactSection)
}
contactBoxEffect();

//mail, call 클릭시 오른쪽에서 왼쪽으로 내용 출현 및 클릭 시 복사
function toggleEffect() {
  const contactToggles = document.querySelectorAll('.contact-toggle');

  //contact-toggle 안에 있는 icon과 info를 각각 대응하는 변수로 설정
  contactToggles.forEach((list) => {
    const icon = list.querySelector('.contact-icon');
    const info = list.querySelector('.contact-info');
    const copyText = info.querySelector('span');
    
    //icon 클릭시 info가 출현
    icon.addEventListener('click', () => {
      //icon에 색변경하는 클래스가 포함되어 있는지 확인하는 변수
      const isIconActive = icon.classList.contains('change');

      //모든 icon, info에 포함된 클래스명 제거
      contactToggles.forEach((toggle) => {
        toggle.querySelector('.contact-icon').classList.remove('change');
        toggle.querySelector('.contact-info').classList.remove('open');
      });
      
      //현재 상태에 따라서 열림/닫힘
      if(!isIconActive) {
        icon.classList.add('change');
        info.classList.add('open');
      };
    });

    //info 안에 있는 span 클릭시 복사되었다는 alert 생성
    copyText.addEventListener('click', async() => {
      try {
        await navigator.clipboard.writeText(copyText.textContent);
        alert("복사되었습니다: " + copyText.textContent);
      } catch(err) {
        alert("복사 실패" + err);
      }
    });
  });
}
toggleEffect();

//toggle 초기화 함수
function resetContactToggle() {
  const contactToggles = document.querySelectorAll('.contact-toggle');

  contactToggles.forEach((toggle) => {
    toggle.querySelector('.contact-icon').classList.remove('change');
    toggle.querySelector('.contact-info').classList.remove('open');
  });
}

//github 클릭시 링크로 이동
function contactGithubClick() {
  const contactGithub = document.querySelectorAll('.contact-github');

  contactGithub.forEach((adress) => {
    adress.addEventListener('click', () => {
      window.open('https://github.com/chang9287', 'blank');
    });
  });
}
contactGithubClick();

//kakao 클릭시 모달 창 뜨고 x표시 누르면 창 닫김
function contactKakaoClick() {
  const contactKakao = document.querySelectorAll('.contact-kakao');
  const qrModal = document.querySelector('.qr-modal');
  const qrCloseBtn = document.querySelector('.qr-close-btn');
  //아이콘 클릭시 색변경을 위한 클래스 추가/제거 제어를 위한 변수
  let activeIcon = null;

  //kakao 클릭했을 때 mail,call이 열려있다면 닫기위한 변수 설정
  const contactToggles = document.querySelectorAll('.contact-toggle');

  //클릭시 모달창 열기
  contactKakao.forEach((opentalk) => {
    opentalk.addEventListener('click', () => {
      //kakao 클릭했을 때 mail,call이 열려있다면 닫기
      contactToggles.forEach((toggle) => {
        toggle.querySelector('.contact-icon').classList.remove('change');
        toggle.querySelector('.contact-info').classList.remove('open');
      });

      //기존에 추가된 클래스 있다면 제거
      if(activeIcon) {
        activeIcon.classList.remove('clicked');
      };

      //새로 클릭했을 때 클래스 추가
      opentalk.classList.add('clicked');
      activeIcon = opentalk;
          
      //모달창
      qrModal.classList.add('open');
      document.body.classList.add('qr-modal-open');
    });
  });
  
  //닫기버튼 누름과 동시에 모달창 닫기
  qrCloseBtn.addEventListener('click', () => {
    //클래스 제거 및 변수 원래대로 변경
    if(activeIcon) {
      activeIcon.classList.remove('clicked');
      activeIcon = null;
    }

    qrModal.classList.remove('open');
    document.body.classList.remove('qr-modal-open');
  });
}
contactKakaoClick();