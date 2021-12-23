const btn = document.querySelector('.hamburger-btn');
const nav = document.querySelector('.header-ul');
const navBtns = document.querySelectorAll('.li-btn');

navBtns.forEach((item) => {
  item.addEventListener('click', () => {
    btn.setAttribute('aria-expanded', false);
    nav.setAttribute('data-visible', false);
  });
});

btn.addEventListener('click', () => {
  const visible = btn.getAttribute('aria-expanded');
  if (visible === 'false') {
    btn.setAttribute('aria-expanded', true);
    nav.setAttribute('data-visible', true);
  } else {
    btn.setAttribute('aria-expanded', false);
    nav.setAttribute('data-visible', false);
  }
});

/* speakers */

const trainers = [
  {
    name: 'AMR SALAMA',
    bio: 'Egypt-based film director, author and dog trainer',
    desc: 'Amr doesn’t claim any credentials or specific education, but those he’s worked with say he brings the energy and enthusiasm that inspires them to do more for their pets.',
    img: './assets/images/salama.png',
  },
  {
    name: 'CESAR MILAN',
    bio: 'Author, public speaker, and TV personality',
    desc: 'Live on TV, and via books and seminars, Cesar has helped millions of dog owners by providing simple take-home tips and solutions to various dog problems. His ‘Dog Whisperer’ program was nominated for an Emmy.',
    img: './assets/images/milan.png',
  },
  {
    name: 'ZAK GEORGE',
    bio: 'YouTube Star and television personality',
    desc: 'His Dog Training Revolution channel on YouTube is the go-to channel for many who want to bring positive behavioral change in their dogs. He summarizes even the complicated techniques into energy-packed, flashy, concise, and easy-to-understand clips.',
    img: './assets/images/george.jpg',
  },
  {
    name: 'PATRICIA MCCONNELL',
    bio: 'Certified Applied Animal Behaviorist',
    desc: 'She co-hosted the ‘Calling All Pets’ show on radio for 14 years (’94-’08) in which she shared her expertise with listeners on animal behavior issues.',
    img: './assets/images/patricia.jpeg',
  },
  {
    name: 'SUSAN GARRETT',
    bio: 'Susan specializes in sport, service, and performance dogs',
    desc: 'Susan Garrett’s knowledge on dog agility training is highly sort after in all 6 continents. She has trained and mentored several leading dog trainers and loves sharing her insight via books and podcasts.',
    img: './assets/images/susan.jpg',
  },
  {
    name: 'DAVE SALMONI',
    bio: 'was part of the Tiger ‘rewilding’ project',
    desc: 'His expertise is in rehabilitating broken dogs back into the community, He also shares his DIY guide to living harmoniously with your dog on YouTube and TV shows when invited. His guide is short and straightforward.    ',
    img: './assets/images/dave.jpg',
  },
  {
    name: 'ROGER MUGFORD',
    bio: 'renowned author, inventor, educator, and animal welfare spokesperson.',
    desc: 'As a dog trainer, Dr. Mugford is the real deal. His animal behavior center is where your local vet will refer you to in case of unforgiving pooch problems. He has trained dogs for handicap support service, cancer & Bio detection.    ',
    img: './assets/images/roger.jpg',
  },
  {
    name: 'DOGGY DAN',
    bio: 'Founder and owner of The Online Dog Trainer',
    desc: 'After bouncing from a lot of jobs -math teacher, I.T. sales, British police, etc., he turned to his dream, and over the past decades, he’s been invited to thousands of homes for private one-on-one dog training and consultations.',
    img: './assets/images/dan.jpg',
  },
];

const footer = document.querySelector('footer');
const body = document.querySelectorAll('.body');
const container = document.createElement('div');
body[0].insertBefore(container, footer);
container.className = 'speakers';

const title = document.createElement('h2');
title.className = 'speakers-title';
title.textContent = 'Featured Trainers';
container.appendChild(title);

const line = document.createElement('div');
line.className = 'line big-line';
container.appendChild(line);

const grid = document.createElement('div');
grid.className = 'grid-container';
container.appendChild(grid);

const speakers = [];

for (let i = 0; i < 8; i += 1 {
  const actualSpeaker = document.createElement('div');
  actualSpeaker.className = 'speaker';
  actualSpeaker.innerHTML = `
    <img src="${trainers[i].img}">
    <div class="trainer-text">
    <h3 class="trainer-title">${trainers[i].name}</h3>
    <p class="trainer-bio">${trainers[i].bio}</p>
    <div class="line black"></div>
    <p class="trainer-desc">${trainers[i].desc}</p>
    </div>
    `;
  speakers.push(actualSpeaker);
}

for (let i = 0; i < 8; i += 1) {
  grid.appendChild(speakers[i]);
}
