const letters = [
  {
    title: "you first open this app",
    body: "hey you,\n\nif you're reading this, you just opened our little app for the first time. i built it for you – with love, a little bit of chaos, and a whole lot of me in it.\n\nlook around. there are letters here for you. for every moment you need me.\n\ni love you.",
    media: []
  },
  {
    title: "you need a laugh",
    body: "okay, here's your official \"please laugh now\" letter:\n\nwhy can't programmers have relationships?\nbecause they always ask for a \"commit\" but never say \"yes\".\n\nand if that didn't work: just think about my face when i try to be technical. that's funny enough.\n\ni love you, you clown.",
    media: [
      { type: "sticker", url: "https://i.postimg.cc/DEIN-LINK-HIER/pinguin.png" } 
    ]
  },
  {
    title: "you need a smile",
    body: "remember that day we [add your favorite memory here]? i think about it a lot.\n\nand about the way you laughed when [add something cute here].\n\ni hope this letter put a little smile on your face. you deserve to smile, always.",
    media: [
      { type: "polaroid", url: "IMG_20261119_063230.jpg" } 
    ]
  },
  {
    title: "you miss me",
    body: "i miss you too. a lot.\n\nsometimes the distance is hard, but you know what? you're with me in every moment. in my thoughts, in my heart, in the song i'm listening to right now.\n\nthis letter is my little way of telling you: i'm here. even when i'm far away.\n\ni'm counting the days until i see you again. and until then: open this letter as often as you want. it stays here for you. always.\n\ni love you so much.",
    media: []
  }
];

const envelopeContainer = document.getElementById('envelopes');
const letterView = document.getElementById('letterView');
const letterTitle = document.getElementById('letterTitle');
const letterBody = document.getElementById('letterBody');
const letterMedia = document.getElementById('letterMedia');
const closeBtn = document.getElementById('closeBtn');

function getReadStatus() {
  try { return JSON.parse(localStorage.getItem('readLetters') || '[]'); }
  catch { return []; }
}

function saveReadStatus(index) {
  const read = getReadStatus();
  if (!read.includes(index)) {
    read.push(index);
    localStorage.setItem('readLetters', JSON.stringify(read));
  }
}

function renderEnvelopes() {
  const read = getReadStatus();
  envelopeContainer.innerHTML = '';
  letters.forEach((letter, i) => {
    const wrap = document.createElement('div');
    wrap.className = 'envelope-wrap';
    wrap.innerHTML = `
      <div class="envelope">
        <div class="paper">💌</div>
        <div class="flap"></div>
        <div class="pocket"></div>
        <div class="envelope-title">${letter.title}</div>
        ${read.includes(i) ? '<div class="read-badge">read</div>' : ''}
      </div>
    `;
    wrap.addEventListener('click', () => openLetter(i, wrap));
    envelopeContainer.appendChild(wrap);
  });
}

function openLetter(i, wrap) {
  wrap.classList.add('opening');

  setTimeout(() => {
    const letter = letters[i];
    letterTitle.textContent = letter.title;
    letterBody.textContent = letter.body;
    
    letterMedia.innerHTML = '';
    if (letter.media && letter.media.length > 0) {
      letter.media.forEach(item => {
        if (item.type === 'polaroid') {
          const imgWrap = document.createElement('div');
          imgWrap.className = 'media-polaroid';
          imgWrap.innerHTML = `<img src="${item.url}" alt="photo">`;
          letterMedia.appendChild(imgWrap);
        } else if (item.type === 'sticker') {
          const img = document.createElement('img');
          img.src = item.url;
          img.className = 'media-sticker';
          img.alt = "sticker";
          letterMedia.appendChild(img);
        }
      });
    }

    letterView.classList.add('open');
    saveReadStatus(i);
  }, 550);

  setTimeout(() => {
    wrap.classList.remove('opening');
    renderEnvelopes();
  }, 1200);
}

closeBtn.addEventListener('click', () => letterView.classList.remove('open'));
letterView.addEventListener('click', (e) => {
  if (e.target === letterView) letterView.classList.remove('open');
});

renderEnvelopes();
