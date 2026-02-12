//애니메이션 효과를 위한 텍스트 span으로 감싸는 함수
function wrapTextSpan(el) {
  const text = el.textContent;
  el.textContent = '';

  for(let i = 0; i < text.length; i++) {
    const span = document.createElement('span');

    //현재 글자가 공백인지 확인
    if(text[i] === ' ') {
      //공백이면 '\u00A0' 사용
      span.textContent = '\u00A0';
    } else {
      //공백이 아니면 그 글자 사용
      span.textContent = text[i];
    }
    span.style.transitionDelay = `${i * 0.02}s`;

    el.appendChild(span);
  }
}

//nav 효과 함수
function navEffect() {
  const navLinks = document.querySelectorAll('.nav ul li a');
  const sections = {
    about: document.querySelector('#about'),
    education: document.querySelector('#education'),
    skills: document.querySelector('#skills'),
    projects: document.querySelector('#projects'),
    contact: document.querySelector('#contact')
  };
  //우선순위
  const priority = ['about','education','skills','projects','contact'];
  //상태관리
  const navState = {
    visibleSections: new Set(), //화면에 보이는 섹션을 기록
    scrollDirection: 'down'
  };
  let lastScrollY = window.scrollY;

  //스크롤 방향 감지
  window.addEventListener('scroll', () => {
    navState.scrollDirection = window.scrollY > lastScrollY ? 'down' : 'up';
    lastScrollY = window.scrollY;
  });

  //nav에 active 클래스 적용
  function setActiveNav(id){
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');

      if(href === `#${id}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  //nav 상태 업데이트
  function updateNav() {
    //priority 배열을 모두 검사
    for(let i = 0; i < priority.length; i++) {
      const id = priority[i]

      //화면에 보이는 section이 Set에 기록될 텐데 priority 배열을 모두 검사하다가 화면에 보이는 section이 set에 딱 들어갔을 때
      if(navState.visibleSections.has(id)) {
        //해당 section의 nav active
        setActiveNav(id);

        //첫 번째로 발견한 section만 사용하고 종료
        return;
      }
    }
  }

  //일반 섹션 Observer
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;

      if(entry.isIntersecting) {
        navState.visibleSections.add(id); 
      } else {
        navState.visibleSections.delete(id);
      }
    });
    updateNav();
  }, {
    threshold : 0.4
  });

  ['about', 'education', 'skills', 'contact'].forEach((id) => {
    sectionObserver.observe(sections[id]);
  });

  //projects 섹션 Observer
  const projectsSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const isStart = entry.target.classList.contains('start');
      const isEnd = entry.target.classList.contains('end');

      if(entry.isIntersecting) {
        //내려가고 isStart 지날 때, 올라오고 isEnd 지날 때 = 'projects' 추가
        if(navState.scrollDirection === 'down' && isStart) {
          navState.visibleSections.add('projects');
        }
        if(navState.scrollDirection == 'up' && isEnd) {
          navState.visibleSections.add('projects');
        }
      } else {
        //내려가고 isEnd 지날 때, 올라오고 isStart 지날 때 = 'projects' 제거
        if(navState.scrollDirection === 'down' && isEnd) {
          navState.visibleSections.delete('projects');
        }
        if(navState.scrollDirection === 'up' && isStart) {
          navState.visibleSections.delete('projects');
        }
      }    
    });
    updateNav();
  }, { 
    threshold : 0 
  });

  document.querySelectorAll('#projects .section-trigger').forEach((trigger) => projectsSectionObserver.observe(trigger));

  //about 섹션 애니메이션 효과
  const aboutAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const aboutTexts = entry.target.querySelectorAll('.about-desc, .about-name, .about-role, .about-keywords, .about-qa-card');

      if(entry.isIntersecting) {
        aboutTexts.forEach((text) => {
          text.classList.add('show');
        });
      } else {
        aboutTexts.forEach((text) => {
          text.classList.remove('show');
        });
      }
    });
  }, {
    threshold : 0.3
  });

  aboutAnimationObserver.observe(sections.about);


  //education 섹션 애니메이션 효과
  const eduAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const eduTexts = entry.target.querySelectorAll('.edu-name span, .edu-detail span, .edu-result span, .edu-period span');

      if(entry.isIntersecting) {
        eduTexts.forEach((text) => {
          text.classList.add('show');
        });
      } else {
        eduTexts.forEach((text) => {
          text.classList.remove('show');
        });
      }
    });
  }, {
    threshold : 0.4
  });

  eduAnimationObserver.observe(sections.education);

  //skills 섹션 애니메이션 효과
  const skillAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const skillLeft = entry.target.querySelector('.skills-left');
      const skillRight = entry.target.querySelector('.skills-right');

      if(entry.isIntersecting) {
        skillLeft.classList.add('show');
        skillRight.classList.add('show');
      } else {
        skillLeft.classList.remove('show');
        skillRight.classList.remove('show');
      }
    });
  }, {
    threshold : 0.35
  });

  skillAnimationObserver.observe(sections.skills);

  //contact 섹션 애니메이션 효과
  const contactTextObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const textWrap = entry.target.querySelector('.contact-text-wrap');
      const thankBg = textWrap.querySelector('.thank-bg');

      //요소가 없으면 에러 방지를 위해 현재 entry 처리 중단
      if(!textWrap) return;
      if(!thankBg) return;

      if(entry.isIntersecting) {
        if(!textWrap.classList.contains('show')) {
          textWrap.classList.add('show');

          thankBg.querySelectorAll('span').forEach((el) => {
            el.style.animation = 'none';
            void el.offsetWidth;
            el.style.animation = '';
          });
        }
      } else {
        textWrap.classList.remove('show');
      }
    });
  }, {
    threshold : 0.4
  });

  contactTextObserver.observe(sections.contact);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.edu-name, .edu-detail, .edu-result, .edu-period').forEach(wrapTextSpan);
});

window.addEventListener('loadingComplete', () => {
  navEffect();
});
