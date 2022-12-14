const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const crossIcon = document.getElementById('cross-icon');
const allNavLinks = document.querySelectorAll('.nav-link');

function toggleNav() {
  mobileNav.classList.toggle('df');
}

hamburger.addEventListener('click', toggleNav);
crossIcon.addEventListener('click', toggleNav);
allNavLinks.forEach((navLink) => {
  navLink.addEventListener('click', toggleNav);
});

// workData
const worksData = [
  {
    id: 'project1',
    title: 'Land locator',
    frame: ['CLand', 'Front End Dev', 2022],
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: './images/leaflet measure.png',
    projectDetails:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'project2',
    title: 'Routing app',
    frame: ['Routing', 'Front-end dev', 2022],
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: './images/routing app.webp',
    projectDetails:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'project3',
    title: 'Land Locator',
    frame: ['CANOPY', 'Front-end Dev', 2022],
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: '../images/feature-img1.png',
    projectDetails:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'project4',
    title: 'Land-Locator',
    frame: ['FACEBOOK', 'FULL STACK DEV', 2022],
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: './images/feature-img4.png',
    projectDetails:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },
];

function fetchOneProject(id) {
  let project = {};

  for (let i = 0; i < worksData.length; i += 1) {
    if (id === worksData[i].id) {
      project = worksData[i];
    }
  }

  const popContainer = document.querySelector('.container');
  const popupModal = document.createElement('article');
  popupModal.classList.add('article-popup');

  const articleModal = document.createElement('div');
  articleModal.classList.add('article-modal');
  const crossIcon = document.createElement('span');
  crossIcon.setAttribute('id', 'cross-article');
  crossIcon.innerHTML = '<img src="./images/cross-article.png" alt="X"/>';
  crossIcon.addEventListener('click', () => {
    popContainer.removeChild(popupModal);
  });

  const title = document.createElement('h2');
  title.classList.add('article-title');
  title.innerText = project.title;

  const frames = document.createElement('ul');
  frames.classList.add('frames');
  project.frame.forEach((tag) => {
    const frame = document.createElement('li');
    frame.classList.add('frame');
    frame.innerText = tag;
    frames.appendChild(frame);
  });

  const imgPrev = document.createElement('div');
  imgPrev.classList.add('img-prev');
  const articleImg = document.createElement('img');
  articleImg.setAttribute('atl', project.title);
  articleImg.setAttribute('src', project.imageUrl);
  imgPrev.appendChild(articleImg);

  const articleBlock = document.createElement('div');
  articleBlock.classList.add('article-block');

  const leftBlock = document.createElement('div');
  leftBlock.classList.add('left-block');
  const articleDetails = document.createElement('p');
  articleDetails.classList.add('article-details');
  articleDetails.innerText = project.projectDetails;
  leftBlock.append(articleDetails);

  const br = document.createElement('hr');

  const rightBlock = document.createElement('div');
  rightBlock.classList.add('right-block');

  const articleTags = document.createElement('ul');
  articleTags.classList.add('article-tags');

  project.tags.forEach((tag) => {
    const taglist = document.createElement('li');
    taglist.classList.add('article-tag');
    taglist.innerText = tag;
    articleTags.append(taglist);
  });

  const actions = document.createElement('div');
  actions.classList.add('actions');

  const actBtn = document.createElement('a');
  actBtn.classList.add('act-btn');
  actBtn.setAttribute('href', project.liveLink);
  actBtn.innerHTML = "See Live <img src='./images/live-link.png' alt='live-link'>";
  actions.appendChild(actBtn);

  const actBtnSource = document.createElement('a');
  actBtnSource.classList.add('act-btn');
  actBtnSource.setAttribute('href', project.sourceLink);
  actBtnSource.innerHTML = "See Source <img src='./images/source-link.png' alt='source-link'>";
  actions.appendChild(actBtnSource);

  rightBlock.append(articleTags, br, actions);

  articleBlock.append(leftBlock, rightBlock);

  articleModal.append(crossIcon, title, frames, imgPrev, articleBlock);
  popupModal.append(articleModal);

  popContainer.append(popupModal);
}

const actionsBtn = document.querySelectorAll('.see-more-action');
actionsBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const { id } = e.target;
    fetchOneProject(id);
  });
});

// login_modal

const loginBtn = document.querySelector('#Login');
const loginModal = document.querySelector('.login-container');
const closeModal  = document.querySelector('#cross-Icon-login')
// loginModal.style.dislay = 'none';
loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'flex';
})
closeModal.addEventListener('click', () => {
  loginModal.style.display = 'none';
})