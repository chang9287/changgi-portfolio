//배경 블러, 아이콘에 마우스 호버시 상태처리 함수
function  sectionContactEffect() {
  const mailIcon = document.querySelector('.contact-item-mail');
  const callIcon = document.querySelector('.contact-item-call');
  const mailContent = document.querySelector('.mail-container');
  const callContent = document.querySelector('.call-container');
  
  //사이 공간으로 인해 아이콘 색상 변경에 약간의 문제가 있어 아래쪽에 삼각형 생성
  //덤으로 말주머니 모양처럼 형성
  const mailtriangle = document.querySelector('.mail-triangle');
  const calltriangle = document.querySelector('.call-triangle');

  const contactSection = document.querySelector('#contact');
  //블러처리 되는 요소들
  const blurTargets = contactSection.querySelectorAll('.thank-bg, .thank-title, .commitment');

  //블러 클래스 추가
  function applyBlur() {
    blurTargets.forEach((target) => {
      target.classList.add('blur');
    });
  }

  //블러 클래스 제거
  function removeBlur() {
    blurTargets.forEach((target) => {
      target.classList.remove('blur');
    })
  }

  //icon이나 content 위에 마우스가 있는지 확인하는 함수
  function isMouseOver() {
    return (
      mailIcon.matches(':hover') ||
      callIcon.matches(':hover') ||
      mailContent.matches(':hover') ||
      callContent.matches(':hover')
    );
  }

  //icon이나 content 위에 마우스가 없다면 content창 닫고 블러 해제하는 함수
  //아이콘1에서 마우스를 떼고 아이콘2로 이동할 때, blur 효과가 순간적으로 사라지는 문제가 있어 setTimeout을 0.1초로 설정
  function checkMouseBlur() {
    setTimeout(() => {
      //isMouseOver가 아니라면
      if(!isMouseOver()) {
        mailContent.style.display = 'none';
        callContent.style.display = 'none';
        mailtriangle.style.display = 'none';
        calltriangle.style.display = 'none';
        removeBlur();
      }
    }, 100);
  }

  //icon과 content에 마우스 이벤트 등록하는 함수
  function contactHoverEvent(icon, content, otherContent, triangle, otherTriangle) {
    //아이콘이 마우스에 들어가면
    icon.addEventListener('mouseenter', () => {
      //아이콘에 맞는 콘텐츠 보임
      content.style.display = 'block';
      triangle.style.display = 'block';
      //다른 콘텐츠 안보임
      otherContent.style.display = 'none';
      otherTriangle.style.display = 'none';
      //뒤에 블러처리
      applyBlur();
    });
    
    //icon에서 마우스 떠나고 content에서 마우스가 나갈 때
    icon.addEventListener('mouseleave', checkMouseBlur);
    content.addEventListener('mouseleave', checkMouseBlur);
  }

  //mail일 때
  contactHoverEvent(mailIcon, mailContent, callContent, mailtriangle, calltriangle);
  //call일 때
  contactHoverEvent(callIcon, callContent, mailContent, calltriangle, mailtriangle);
}
sectionContactEffect();

//복사 button 클릭시 복사 및 alert 생성 함수
function copyClipboard() {
  const copyBtn = document.querySelectorAll('.copyBtn');

  copyBtn.forEach((btn) => {
    btn.addEventListener('click', async() => {
      try {
        //현재 버튼 기준으로 가장 가까운 container 내의 .copy-text 찾기
        const copyText = btn.closest('.contact-item').querySelector('.copy-text').textContent;
        await navigator.clipboard.writeText(copyText);
        alert("복사되었습니다: " + copyText);
      } catch(err) {
        alert("복사 실패" + err);
      };
    });
  });
}
copyClipboard();