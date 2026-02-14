//전역변수
let projectArray = [];

//json 데이터 불러오기
async function loadProjects() {
  try {
    const response = await fetch('./data/projects.json');
    const data = await response.json();
    projectArray = [...data];

    initFilterState()
    filterProjects()
  } catch(err) {
    alert(`에러가 발생했습니다: ${err.message}`);
    console.error(err);
  }
}

//프로젝트 카드 생성 함수
function createProjectCard(card) {
  const projectlist = document.querySelector('.project-list');
  
  //일치하는 프로젝트 없을 때 텍스트 생성
  if(card.length === 0) {
    projectlist.innerHTML = '<p class="no-project">일치하는 프로젝트가 없습니다.</p>';
    return;
  }

  projectlist.innerHTML = "";

  //프로젝트 카드
  card.forEach(project => {
    const li = document.createElement('li');
    li.className = 'project-item';
    li.innerHTML = `
      <div class="project-card" >
        <img class="project-card-thumbnail" src="${project.thumbnail}" alt="${project.title}">
      </div>
      <h3 class="project-card-title">${project.title}</h3>
    `;
    li.addEventListener("click", () => openProjectModal(project));
    projectlist.appendChild(li);
  });
}

//필터링 함수
function filterProjects() {
  //기술
  const selectedSkills = [...document.querySelectorAll('.skill-checkbox:checked')].map(checkbox => checkbox.value);

  //타입
  const typeCheckbox = document.querySelector('.option-checkbox:checked');
  const selectedType = typeCheckbox ? typeCheckbox.value : null;
  //전체
  const allCheckbox = document.querySelector('#filter-all');
  const isAll = allCheckbox ? allCheckbox.checked : false;
  //반응형
  const responsiveCheckbox = document.querySelector('#filter-responsive');
  const isResponsive = responsiveCheckbox ? responsiveCheckbox.checked : false;
  
  const filtered = projectArray.filter(project => {
    //기술 필터 ( 하나도 안 골랐거나 선택한 기술이 전부 project.skills에 포함된다면 통과)
    const skillFiltering = selectedSkills.length === 0 || selectedSkills.every(skill => project.skills.includes(skill));

    //타입 필터 ( 전부 또는 선택된 타입이 없거나 project.type과 선택한 타입이 일치하면 통과 )
    const typeFiltering = isAll || !selectedType || project.type === selectedType;

    //반응형 필터 ( 반응형이 없거나 project.responsive가 true이면 통과 )
    const responsiveFiltering = !isResponsive || project.responsive === true;

    return skillFiltering && typeFiltering && responsiveFiltering;
  });

  createProjectCard(filtered);
}

//체크박스 이벤트 함수
function initCheckboxEvent() {
  const skillCheckboxes = document.querySelectorAll('.skill-checkbox');
  const allCheckbox = document.querySelector('#filter-all');
  const typeCheckboxes = document.querySelectorAll('.option-checkbox');
  const responsiveCheckbox = document.querySelector('#filter-responsive');

  //기술(Skill)
  skillCheckboxes.forEach(skillCheckbox => skillCheckbox.addEventListener('change', filterProjects));

  //모든 프로젝트(All)
  allCheckbox.addEventListener('change', () => {
    const isChecked = allCheckbox.checked;

    if(isChecked) {
      typeCheckboxes.forEach(typeCheckbox => {
        typeCheckbox.checked = false;
      });
    }
    filterProjects();
  });

  //개인 or 팀 프로젝트(Type)
  typeCheckboxes.forEach(currentTypeCheckbox  => {
    currentTypeCheckbox .addEventListener('change', () => {
      if(currentTypeCheckbox.checked) {
        //All 체크 해제
        allCheckbox.checked = false;

        //다른거 체크하면 체크 해제
        typeCheckboxes.forEach(otherTypeCheckbox  => {
          const isOtherCheckbox = otherTypeCheckbox !== currentTypeCheckbox;

          if(isOtherCheckbox) {
            otherTypeCheckbox.checked = false;
          }
        });
      }
      filterProjects();
    });
  });

  //반응형(Responsive)
  responsiveCheckbox.addEventListener('change', filterProjects);
}

//필터 초기 상태 함수
function initFilterState() {
  //기술 스택(체크 해제)
  document.querySelectorAll('.skill-checkbox').forEach(skillCheckbox => {
    skillCheckbox.checked = false;
  });

  //전체 프로젝트(체크)
  document.querySelector('#filter-all').checked = true;

  //개인,팀 프로젝트(체크 해제)
  document.querySelectorAll('.option-checkbox').forEach(typeCheckbox => {
    typeCheckbox.checked = false;
  });

  //반응형(체크 해제)
  document.querySelector('#filter-responsive').checked = false;
}

//모달창 생성 함수
function openProjectModal(project) {
  const modalContainer = document.createElement('div');
  modalContainer.className = 'project-modal';

  //기술 스택별 배경색, 글자색 지정
  const skillColors = {
    HTML5 : { bg: '#E34F26', text: '#ffffff' },
    CSS3 : { bg: '#1572B6', text: '#ffffff' },
    JavaScript : { bg: '#F7DF1E', text: '#1e1e1e' },
    SCSS : { bg: '#CD6799', text: '#ffffff' },
    React : { bg: '#61DAFB', text: '#1e1e1e' }
  };

  //배경색과 글자색이 적용된 기술 스택 배지 생성
  const skillsBadge = project.skills.map(skill => {
    const color = skillColors[skill] || { bg: '#ddd', text : '#343A40'}
    return `<span class="skill-badge" style="background-color: ${color.bg}; color:${color.text};">${skill}</span>`;
  }).join('');
  
  //모달창 구조 생성
  modalContainer.innerHTML = `
  <div class="project-modal-inner">
    <div class="project-modal-left">
      <img class="project-modal-fullImg" src="${project.fullImg}" alt="${project.title}">
    </div>
    <div class="project-modal-right">
      <h3 class="project-modal-title">${project.title}</h3>
      <div class="project-modal-info">
        <div class="project-modal-period">
          <i class="fa-solid fa-calendar-days"></i>
          <span>${project.period}</span>
        </div>
        <div class="project-modal-skills">${skillsBadge}</div>
      </div>
      <div class="project-modal-contents">
        <div class="project-modal-problem project-modal-content">
          <h6 class="project-modal-contents-title"># 목표</h6>
          <p class="project-modal-contents-desc">${project.goal}</p>
        </div>
        <div class="project-modal-solution project-modal-content">
          <h6 class="project-modal-contents-title"># 구현 내용</h6>
          <p class="project-modal-contents-desc">${project.features}</p>
        </div>
        <div class="project-modal-desc project-modal-content">
          <h6 class="project-modal-contents-title"># 배운 점</h6>
          <p class="project-modal-contents-desc">${project.learned}</p>
        </div>
      </div>
      <div class="project-modal-links">
        <a href="${project.githubLink}" target="_blank" rel="noopener">Github 바로가기</a>
        <a href="${project.siteLink}" target="_blank" rel="noopener">사이트 바로가기</a>
      </div>
      <div class="project-modal-close-btn">
        <i class="xi-close"></i>
      </div>
    </div>
  </div>
  `

  document.body.appendChild(modalContainer);
  document.body.style.overflow = 'hidden';

  //닫기 버튼 누르면 모달창 닫힘
  const modalCloseBtn = document.querySelector('.project-modal-close-btn');
  modalCloseBtn.addEventListener('click', () => {
    closeProjectModal(modalContainer);
  });

}

//모달창 닫기 함수
function closeProjectModal(modalContainer) {
  modalContainer.remove();
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  loadProjects();
  initCheckboxEvent();
});