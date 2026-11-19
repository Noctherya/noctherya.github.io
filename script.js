const letters = [
  {
    title: "you first open this app",
    body: "hey baby,\n\nif you're reading this, you just opened our little app for the first time. i built it for you – with love, a little bit of chaos, and a whole lot of me in it. I thought if you could do it, why not me? Soo this is what I came up with randomly at work and I personally love that idea.\n\nlook around. there are letters here for you. for every moment you need me. Bare with me but I'm really trying my best over here. Just overlook any bugs you might find throughout this whole thing - upsi.\n\ni love you.",
    media: []
  },
  {
    title: "you need a laugh",
    body: "okay, here's your official \"please laugh now\" letter:\n\nwhy can't programmers have relationships?\nbecause they always ask for a \"commit\" but never say \"yes\" (tot unlustig tu einfach so als hättest du gelacht).\n\nand if that didn't work: just think about my face when i am concentrating on something or you successfully ragebait me.  that's funny enough.\n\ni love you, you Mr. Ragebaiter (like seriously I love you).",
    media: [
      { type: "sticker", url: "cd919016dd9c92801ea180bd6e67a4c1.jpg" } 
    ]
  },
  {
    title: "you need a smile",
    body: "remember that day we first met? i think about it a lot. Actually I think about YOU 24/7 so don't you DARE say I'm not obsessed with you - because I am. Entirely. Your fault for being everything I ever wished for.\n\nand about the way how nervous we both were like the whole time, now I feel the safest and calmest when I'm with you. You're my safe place in human form and I couldn't be any happier.\n\ni hope this letter put a little smile on your face. you deserve to smile, always. Because you love my smile and I love yours so we're even.",
    media: [
      { type: "polaroid", url: "IMG_20261119_063230.jpg" } 
    ]
  },
  {
    title: "you miss me",
    body: "i miss you too. a lot.\n\nsometimes the distance is hard, but you know what? you're with me in every moment. in my thoughts, in my heart, in the song i'm listening to right now, like literally every song is somehow connected to you.\n\nthis letter is my little way of telling you: i'm here. even when i'm not physically with you.\n\ni'm counting the days until i see you again. You know that. and until then: open this letter as often as you want. it stays here for you. That's why I did this whole thing. Reread it as many times as you need to. Or call me. Or text me. Idc - I'll always answer if it's you, no matter what situation I'm in.\n\ni love you so so so much Darling.",
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

// --- NEU: Daten für My Day ---
const myDayEntries = [
  {
    date: "November 18, 2026",
    image: "cd919016dd9c92801ea180bd6e67a4c1.jpg", // Der Name deines Bildes, das du hochgeladen hast
    text: "had a coffee today and thought of you. i kept looking at the empty chair next to me. wish you were here. ☕️"
  },
  {
    date: "November 19, 2026",
    image: "DEIN_BILD_LINK_HIER.jpg", 
    text: "the sky looked so pretty today. i took a picture so you could see it too. miss you. 🌅"
  }
];

// Funktion, um die Timeline aufzubauen
function renderTimeline() {
  const timelineContainer = document.getElementById('timeline');
  if (!timelineContainer) return; // Falls das Element noch nicht da ist

  timelineContainer.innerHTML = '';
  
  myDayEntries.forEach(entry => {
    const card = document.createElement('div');
    card.className = 'day-card';
    card.innerHTML = `
      <div class="day-date">📅 ${entry.date}</div>
      <img src="${entry.image}" alt="My day" class="day-image">
      <div class="day-text">${entry.text}</div>
    `;
    timelineContainer.appendChild(card);
  });
}

// Timeline laden, sobald die Seite fertig ist
renderTimeline();
