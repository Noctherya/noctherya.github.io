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
    body: "i miss you too. a lot.\n\nsometimes the distance is hard, but you know what? you're with me in every moment. in my thoughts, in my heart, in the song i'm listening to right now, like literally every song is somehow connected to you.\n\nthis letter is my little way of telling you: i'm here. even when i'm not physically with you.\n\ni'm counting the days until I see you again. You know that. and until then: open this letter as often as you want. it stays here for you. That's why I did this whole thing. Reread it as many times as you need to. Or call me. Or text me. Idc - I'll always answer if it's you, no matter what situation I'm in.\n\ni love you so so so much Darling.",
    media: []
  }
];

const myDayData = [
  {
    date: "November 19, 2026",
    entries: [
      { image: "IMG_20261119_063216.jpg", text: "outfit of the day, aber kennst du ja schon. ☕️" },
      { image: "IMG_20261119_140747.jpg", text: "it's raining the whole time, thinking about how cozy it would be, the both of us cuddled up watching a movie while it's raining. 🌧️" }
    ]
  }
];

// Die Geheimnisse (Deine Texte + die neuen Insecurities & Love Reasons)
const secretsData = [
  { body: "The way you look at me when you think I don't notice. It makes me feel like the only person in the world.", image: "" },
  { body: "I was walking home today and saw a couple holding hands. And suddenly the distance felt so heavy. I just wanted to hold yours.", image: "IMG_20261119_140747.jpg" },
  { body: "I am so incredibly proud of you. Never forget that.", image: "" },
  { body: "I heard a song today and immediately thought of you. Suddenly the whole day was a little bit better.", image: "" },
  { body: "i love the way you always say goodnight before hanging up on call. I always want to call back the exact second we hang up", image: "" },
  { body: "I really really miss hugging you, 9/10 times I'm crying when hugging Hasi", image: "" },
  { body: "I saw someone today that laughs the way you do, my heart made a flip, silly thing, hoping you'd be there", image: "" },
  { body: "I've already imagined what our wedding would look like, ooops", image: "" },
  { body: "I have never loved anyone the way I love you. And I'm being dead serious right now, you make me feel complete", image: "" },
  { body: "sometimes I'm scared of being annoying if I text too much but I just can't help it", image: "" },
  { body: "yes I am jealous. insanely jealous of everyone that came before me and I know how ridiculous that is because they made you become the person you are now, and I love that person more than anything else. but sometimes it just..hurts?", image: "" },
  { body: "I don't know if you know. but you're really healing my relationship toward food and that's more than anyone has ever done for me", image: "" },
  { body: "I cried today because I miss you so much, but it wasn't just sadness, I was overwhelmed by how much I'm feeling for you", image: "" },
  { body: "when I was on the bus today I couldn't stop thinking about how much better it would be if you'd be there, holding my hand, me resting my head on your shoulder, I just really miss you", image: "" },
  { body: "You never ask me to be someone I'm not and I think that is worth so much more than you think it is", image: "" },
  { body: "sometimes I'm scared that you'll wake up one day and realize I'm not as special as you thought I were", image: "" },
  { body: "when I'm with you my head simply goes quiet, you are my calm", image: "" },
  { body: "I'm so so incredibly proud of you, for trying to let go of your bad habits for me and I'm trying my best to do the same, I want to be a better person - for you - for us", image: "" },
  { body: "I love ALL the petnames you give me", image: "" },
  { body: "I love your sleepy you when I call to wake you up, I'm always smiling doing so", image: "" },
  { body: "sometimes I hate myself so much I just want to hide from everyone but then I remember you think I'm beautiful and that - just helps", image: "" },
  { body: "I'm scared that if I tell you how much I actually need you, you'd feel trapped", image: "" },
  { body: "I love your humor. even your bad jokes that you know are bad but tell them anyway", image: "" },
  { body: "silly but valid. I love your height. the way I have to look up at you", image: "" },
  { body: "I love that you make me feel like the most important person in the world. even if it's just through our calls. it matters to me", image: "" },
  { body: "I worry that I'm not enough for you. not pretty enough, not as pretty as your ex-girlfriends. that I'm not smart or funny enough..just not enough.", image: "" }
];

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // BRIEFE LOGIK
  // ==========================================
  const envelopeContainer = document.getElementById('envelopes');
  const letterView = document.getElementById('letterView');
  const letterTitle = document.getElementById('letterTitle');
  const letterBody = document.getElementById('letterBody');
  const letterMedia = document.getElementById('letterMedia');
  const closeBtn = document.getElementById('closeBtn');

  function getOpenCounts() {
    try { return JSON.parse(localStorage.getItem('openCounts')) || {}; } catch { return {}; }
  }
  function incrementOpenCount(index) {
    const counts = getOpenCounts();
    counts[index] = (counts[index] || 0) + 1;
    localStorage.setItem('openCounts', JSON.stringify(counts));
  }

  function renderEnvelopes() {
    if (!envelopeContainer) return;
    const counts = getOpenCounts();
    envelopeContainer.innerHTML = '';
    
    letters.forEach((letter, i) => {
      const wrap = document.createElement('div');
      wrap.className = 'envelope-wrap';
      const count = counts[i] || 0;
      let badgeHtml = count > 0 ? `<div class="read-badge">read ${count}x</div>` : '';

      wrap.innerHTML = `
        <div class="envelope">
          <div class="paper">💌</div>
          <div class="flap"></div>
          <div class="pocket"></div>
          <div class="envelope-title">${letter.title}</div>
          ${badgeHtml}
        </div>
      `;
      wrap.addEventListener('click', () => openLetter(i, wrap));
      envelopeContainer.appendChild(wrap);
    });
  }

  function openLetter(i, wrap) {
    if (!letterView) return;
    wrap.classList.add('opening');

    setTimeout(() => {
      const letter = letters[i];
      letterTitle.textContent = letter.title;
      letterBody.innerHTML = letter.body.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" style="color: #9b6b7a; text-decoration: underline;">$1</a>');
      
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
          } else if (item.type === 'audio') {
            const audioWrap = document.createElement('div');
            audioWrap.className = 'media-audio';
            audioWrap.innerHTML = `<audio controls src="${item.url}"></audio>`;
            letterMedia.appendChild(audioWrap);
          }
        });
      }

      letterView.classList.add('open');
      incrementOpenCount(i);
      setTimeout(renderEnvelopes, 100); 
    }, 550);

    setTimeout(() => { wrap.classList.remove('opening'); }, 1200);
  }

  if (closeBtn && letterView) {
    closeBtn.addEventListener('click', () => letterView.classList.remove('open'));
    letterView.addEventListener('click', (e) => { if (e.target === letterView) letterView.classList.remove('open'); });
  }
  renderEnvelopes();

  // ==========================================
  // MY DAY LOGIK
  // ==========================================
  const daysList = document.getElementById('daysList');
  const dayView = document.getElementById('dayView');
  const dayDetailDate = document.getElementById('dayDetailDate');
  const dayDetailContent = document.getElementById('dayDetailContent');
  const closeDayBtn = document.getElementById('closeDayBtn');

  function renderDaysList() {
    if (!daysList) return;
    daysList.innerHTML = '';
    myDayData.forEach((day, index) => {
      const card = document.createElement('div');
      card.className = 'day-selector';
      const count = day.entries.length;
      const countText = count === 1 ? '1 moment' : `${count} moments`;
      card.innerHTML = `
        <div class="day-selector-date">📅 ${day.date}</div>
        <div class="day-selector-count">${countText}</div>
      `;
      card.addEventListener('click', () => openDayDetail(index));
      daysList.appendChild(card);
    });
  }

  function openDayDetail(index) {
    if (!dayView) return;
    const day = myDayData[index];
    dayDetailDate.textContent = day.date;
    dayDetailContent.innerHTML = '';
    day.entries.forEach(entry => {
      const item = document.createElement('div');
      item.className = 'day-detail-item';
      let imgHtml = entry.image ? `<img src="${entry.image}" alt="My day image">` : '';
      item.innerHTML = `${imgHtml}<p>${entry.text}</p>`;
      dayDetailContent.appendChild(item);
    });
    dayView.classList.add('open');
  }

  if (closeDayBtn && dayView) {
    closeDayBtn.addEventListener('click', () => dayView.classList.remove('open'));
    dayView.addEventListener('click', (e) => { if (e.target === dayView) dayView.classList.remove('open'); });
  }
  renderDaysList();

  // ==========================================
  // FOR YOU (HERZEN) LOGIK
  // ==========================================
  const heartsContainer = document.getElementById('heartsContainer');
  const openedSecretsSection = document.getElementById('openedSecretsSection');
  const openedList = document.getElementById('openedList');
  const secretView = document.getElementById('secretView');
  const secretBody = document.getElementById('secretBody');
  const secretMedia = document.getElementById('secretMedia');
  const closeSecretBtn = document.getElementById('closeSecretBtn');

  function getOpenedSecrets() {
    try { return JSON.parse(localStorage.getItem('openedSecrets')) || []; } catch { return []; }
  }

  function saveOpenedSecret(index) {
    const opened = getOpenedSecrets();
    if (!opened.includes(index)) {
      opened.push(index);
      localStorage.setItem('openedSecrets', JSON.stringify(opened));
    }
  }

  function renderSecrets() {
    if (!heartsContainer || !openedList) return;
    const openedIndices = getOpenedSecrets();
    
    heartsContainer.innerHTML = '';
    openedList.innerHTML = '';

    let hasOpened = false;
    let hasUnopened = false;

    // 1. Zeichne die Liste der bereits geöffneten Nachrichten
    secretsData.forEach((secret, index) => {
      if (openedIndices.includes(index)) {
        hasOpened = true;
        const item = document.createElement('div');
        item.className = 'opened-item';
        item.innerHTML = `<div style="text-align: center; font-size: 1.5rem;">💌</div>`; 
        item.addEventListener('click', () => openSecret(index));
        openedList.appendChild(item);
      } else {
        hasUnopened = true;
      }
    });

    // 2. Zeichne den Herzhaufen
    if (hasUnopened) {
      const pileBtn = document.createElement('button');
      pileBtn.className = 'heart-pile';
      
      // Generiere einen wilden Haufen aus 15 Herzen
      for (let i = 0; i < 15; i++) {
        const heart = document.createElement('span');
        heart.className = 'pile-heart';
        heart.innerHTML = '🩵'; // Emoji
        
        // Zufällige Position und Drehung für den chaotischen Look
        const randomX = (Math.random() * 80) - 40; // -40 bis 40 px
        const randomY = (Math.random() * 80) - 40; // -40 bis 40 px
        const randomRotate = (Math.random() * 60) - 30; // -30 bis 30 deg
        
        heart.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
        // Abwechselnde Farben (CSS macht den Rest, aber wir setzen es hier für den Haufen)
        if (i % 2 === 0) heart.style.color = '#a8d8ea'; // Babyblau
        else heart.style.color = '#f4b6c2'; // Rosa
        
        pileBtn.appendChild(heart);
      }

      pileBtn.addEventListener('click', () => {
        openRandomSecret();
      });

      heartsContainer.appendChild(pileBtn);
    }

    if (hasOpened) {
      openedSecretsSection.style.display = 'block';
    } else {
      openedSecretsSection.style.display = 'none';
    }
  }

  // Sucht sich ein zufälliges, noch ungeöffnetes Geheimnis
  function openRandomSecret() {
    const openedIndices = getOpenedSecrets();
    const unopenedIndices = [];

    secretsData.forEach((_, index) => {
      if (!openedIndices.includes(index)) {
        unopenedIndices.push(index);
      }
    });

    if (unopenedIndices.length === 0) return; // Nichts mehr übrig

    const randomIndex = unopenedIndices[Math.floor(Math.random() * unopenedIndices.length)];
    openSecret(randomIndex);
  }

  function openSecret(index) {
    if (!secretView) return;
    const secret = secretsData[index];
    
    secretBody.textContent = secret.body;
    secretMedia.innerHTML = '';
    
    if (secret.image) {
      const img = document.createElement('img');
      img.src = secret.image;
      secretMedia.appendChild(img);
    }

    saveOpenedSecret(index);
    secretView.classList.add('open');
    renderSecrets();
  }

  if (closeSecretBtn && secretView) {
    closeSecretBtn.addEventListener('click', () => secretView.classList.remove('open'));
    secretView.addEventListener('click', (e) => { if (e.target === secretView) secretView.classList.remove('open'); });
  }

  renderSecrets();
});