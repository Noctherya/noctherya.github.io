const letters = [
  {
    title: "you first open this app",
    body: "hey baby,\n\nif you're reading this, you just opened our little app for the first time. i built it for you – with love, a little bit of chaos, and a whole lot of me in it. I thought if you could do it, why not me? Soo this is what I came up with randomly at work and I personally love that idea.\n\nlook around. there are letters here for you. for every moment you need me. Bare with me but I'm really trying my best over here. Just overlook any bugs you might find throughout this whole thing - upsi.\n\ni love you.",
    media: []
  },
  {
    title: "when you can't sleep",
    body: "hey baby,\n\nif you're reading this, it means the night is too long and your head is too loud. i wish i could be there right now. i would wrap my arms around you, pull you close, and just hold you until you fall asleep.\n\nsince i can't do that right now, i want you to close your eyes for a second. imagine i'm right there next to you. imagine my hand on your chest, feeling your heartbeat slow down. imagine me whispering that everything is going to be okay, because it is. you are safe. you are loved. \n\nstop thinking about tomorrow. just breathe. i'm right here, even if it's just in my thoughts. i love you. sleep well, my love.",
    media: []
  },
  {
    title: "you need a laugh",
    body: "okay, here's your official \"please laugh now\" letter:\n\nwhy can't programmers have relationships?\nbecause they always ask for a \"commit\" but never say \"yes\" (tot unlustig tu einfach so als hättest du gelacht).\n\nand if that didn't work: just think about my face when i am concentrating on something or you successfully ragebait me.  that's funny enough.\n\ni love you, you Mr. Ragebaiter (like seriously I love you).",
    media: [{ type: "sticker", url: "cd919016dd9c92801ea180bd6e67a4c1.jpg" }]
  },
  {
    title: "when you feel like you're not enough",
    body: "hey you,\n\ni know you have days where you doubt yourself. where you think you're not doing enough, not being enough. i see it in the way you get quiet sometimes. but i need you to read this very carefully:\n\nyou are more than enough. exactly as you are.\n\ni see how hard you try. i see how you fight for us, how you try to be a better person for me. i see your patience with me, even when i'm difficult. do you have any idea how rare that is?\n\nyou are not a burden. you are not too much. you are my safe place, my calm in the chaos. i am so incredibly proud to call you mine. never doubt that for a second. you are everything i ever wished for, and i'm not going anywhere. i love you, all of you.",
    media: []
  },
  {
    title: "you need a smile",
    body: "remember that day we first met? i think about it a lot. Actually I think about YOU 24/7 so don't you DARE say I'm not obsessed with you - because I am. Entirely. Your fault for being everything I ever wished for.\n\nand about the way how nervous we both were like the whole time, now I feel the safest and calmest when I'm with you. You're my safe place in human form and I couldn't be any happier.\n\ni hope this letter put a little smile on your face. you deserve to smile, always. Because you love my smile and I love yours so we're even.",
    media: [{ type: "polaroid", url: "IMG_20261119_063230.jpg" }]
  },
  {
    title: "when you're overthinking",
    body: "hey darling,\n\nis your head spinning right now? are you stuck in a loop of 'what ifs' and 'maybes'? i know that feeling. and i know how exhausting it is.\n\nlet me take some of that weight off your shoulders. whatever you are worrying about right now, we will figure it out. we always do. you don't have to have all the answers today.\n\nwhen my head gets too loud, i think of you. i think about how calm i feel when you hold me. try to do the same. think of my hand in yours. breathe in for 4 seconds, hold it, and breathe out. i am here. i'm not going anywhere. we are okay.",
    media: []
  },
  {
    title: "when you need a reminder",
    body: "hey you,\n\ni just wanted to remind you of a few things. \n\nfirst: you are the best thing that happened to me. second: you make me so incredibly happy, even from miles away. third: i think about you literally all the time, even when i'm doing boring things like grocery shopping.\n\nwe haven't known each other for years, but i already know that you are my person. you are the one i want to tell everything to. the good, the bad, the weird. i feel so safe with you, and i hope you know that you can be your completely true, unfiltered self with me too.\n\ni love you. always.",
    media: []
  },
  {
    title: "when you're proud of me",
    body: "hey my love,\n\nif you are reading this, it means i did something and you are proud of me. (Or maybe you're just reading this because you're curious - either way, hiiiii!).\n\ni know i can be a lot sometimes. i know i have my ups and downs, and sometimes i get insecure or overwhelmed. but you never make me feel like i'm too much. you just hold my hand and tell me you're proud of me, and honestly? that means more to me than you will ever know.\n\nthank you for being my biggest supporter. for believing in me even when i don't believe in myself. i hope i make you as proud as you make me. i love you so much.",
    media: []
  },
  {
    title: "u miss ur little Pelzball",
    body: "hey baby,\n\ni know how much you miss Loui. i know there are days where the house feels too quiet and you would give anything to just hear those little paws on the floor again.\n\njust remember: he's not alone up there. he's playing with my babies. they are running around together, chasing each other, and probably causing a little bit of chaos. they are keeping each other company until we can see them again.\n\nhe knew how much you loved him. he still knows. and i'm sure he's looking down at you, wagging his tail, so proud of the person you are. i'm here for you, always. i love you.(hab geheult als ich das geschrieben hab)",
    media: []
  },
  {
    title: "u just need to hear this",
    body: "hey you,\n\nif you're reading this, i need you to stop whatever you're doing for a second and just listen. \n\ni love you. not because you're perfect, not because you always do everything right, but because you're you. because you make me feel safe. because you make me laugh. because you are the person i want to talk to at the end of every day.\n\nyou are doing so much better than you think you are. you are enough, exactly as you are right now in this moment. and i am so incredibly lucky to call you mine. \n\nnow take a deep breath. and remember that i'm thinking of you.",
    media: []
  },
  {
    title: "u're thinking about us",
    body: "hey my love,\n\ndo you ever think about how crazy this all is? how we found each other in this huge, chaotic world? i do. all the time. \n\ni think about how lucky i am that you are patient with me. i think about how safe i feel when you tell me you love me. i think about the way you make me feel seen, even through a screen. \n\ni know the distance is hard. i know there are days where it feels like too much. but when i think about us, i don't see the distance. i see our future. i see us laughing together, cooking together, falling asleep in each other's arms. \n\nyou are worth every single mile. i love you more than words can say.",
    media: []
  },
  {
    title: "you miss me",
    body: "i miss you too. a lot.\n\nsometimes the distance is hard, but you know what? you're with me in every moment. in my thoughts, in my heart, in the song i'm listening to right now, like literally every song is somehow connected to you.\n\nthis letter is my little way of telling you: i'm here. even when i'm not physically with you.\n\ni'm counting the days until i see you again. You know that. and until then: open this letter as often as you want. it stays here for you. That's why I did this whole thing. Reread it as many times as you need to. Or call me. Or text me. Idc - I'll always answer if it's you, no matter what situation I'm in.\n\ni love you so so so much Darling.",
    media: []
  },
  {
    title: "when you had a bad day",
    body: "hey baby,\n\ni'm so sorry today was shit. i wish i could be there right now to just hold you and make it better. i know sometimes the world is just too loud and everything feels like too much.\n\nbut listen to me: you don't have to carry this alone. you don't have to be strong all the time. it's okay to be overwhelmed. it's okay to just exist today.\n\ntake a deep breath. drink some water. and remember that i am so incredibly proud of you, no matter what happened today. tomorrow is a new day, and i'll be right by your side. i love you more than anything.",
    media: []
  }
];

const myDayData = [
  {
    date: "November 19, 2026",
    entries: [
      { image: "IMG_20261119_063216.jpg", text: "outfit of the day, aber kennst du ja schon. ☕️" },
      { image: "IMG_20261119_140747.jpg", text: "it's raining the whole time, thinking about how cozy it would be, the both of us cuddled up watching a movie while it's raining. 🌧️" },
      { image: "IMG_20261119_161413.jpg", text: "Neueröffnung dm, hab soo viel schönes gesehen. ich hab die ganze zeit gedacht, wie sehr du das geliebt hättest. ich wünschte wirklich, du wärst dabei gewesen. 🛍️" },
      { image: "IMG_20261119_161527.jpg", text: "Smelled soooo good, I just know you'd agree." },
      { image: "IMG_20261119_162212.jpg", text: "Neueröffnung REWE, es gab einfach Popcorn aber leider nicht vegan 🥹." },
      { image: "IMG_20261119_164511.jpg", text: "Stood in checkout line for at least 15mins, bored af." }
    ]
  },
  {
    date: "November 20, 2026",
    entries: [
      { image: "IMG_20261120_071919.jpg", 
        text: "Helga im Urlaub, meaning I can work in the dark again hihi" 
      },
     {  image: "IMG_20261120_065149.jpg", 
        text: "OOTD 🍂🌰" 
      },
    ]
  }
];

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
  { body: "I worry that I'm not enough for you. not pretty enough, not as pretty as your ex-girlfriends. that I'm not smart or funny enough..just not enough.", image: "" },
{ body: "I was doing my hair this morning and suddenly you popped into my head. And I just smiled like an idiot.", image: "" },
{ body: "Sometimes I look at the pictures you send me and I just think about how lucky I am that you're mine.", image: "" },
{ body: "I  really miss your smell. It's such a specific, comforting thing that I can't explain, but I really miss it.", image: "" },
{ body: "I'm so used to texting you all day that when you're busy, my phone feels weirdly empty. I hate itttt.", image: "" },
{ body: "I  love that I can tell you literally anything, even the most random, stupid thoughts and you just listen like it's the most important thing u've ever heard.", image: "" },
{ body: "", image: "" },
];

const usData = [
  "Screenshot_2026-11-19-15-37-44-844_com.miui.gallery-edit.jpg", "Snapchat-191181880.jpg"
];

document.addEventListener('DOMContentLoaded', () => {
  
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
          <div class="seal">🐧</div>
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

    if (hasUnopened) {
      const pileBtn = document.createElement('button');
      pileBtn.className = 'heart-pile';
      for (let i = 0; i < 15; i++) {
        const heart = document.createElement('span');
        heart.className = 'pile-heart';
        heart.innerHTML = '🩵';
        const randomX = (Math.random() * 80) - 40;
        const randomY = (Math.random() * 80) - 40;
        const randomRotate = (Math.random() * 60) - 30;
        heart.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
        if (i % 2 === 0) heart.style.color = '#a8d8ea';
        else heart.style.color = '#f4b6c2';
        pileBtn.appendChild(heart);
      }
      pileBtn.addEventListener('click', openRandomSecret);
      heartsContainer.appendChild(pileBtn);
    }

    if (hasOpened) openedSecretsSection.style.display = 'block';
    else openedSecretsSection.style.display = 'none';
  }

  function openRandomSecret() {
    const openedIndices = getOpenedSecrets();
    const unopenedIndices = [];
    secretsData.forEach((_, index) => {
      if (!openedIndices.includes(index)) unopenedIndices.push(index);
    });
    if (unopenedIndices.length === 0) return;
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

  const pinboard = document.getElementById('pinboard');
  const imageView = document.getElementById('imageView');
  const enlargedImage = document.getElementById('enlargedImage');
  const closeImageBtn = document.getElementById('closeImageBtn');

  function renderPinboard() {
    if (!pinboard) return;
    pinboard.innerHTML = '';
    usData.forEach((imgSrc) => {
      const photo = document.createElement('div');
      photo.className = 'pinned-photo';
      const randomRotation = (Math.random() * 20) - 10; 
      photo.style.transform = `rotate(${randomRotation}deg)`;
      photo.innerHTML = `
        <div class="pin"></div>
        <img src="${imgSrc}" alt="Us">
      `;
      photo.addEventListener('click', () => {
        enlargedImage.src = imgSrc;
        imageView.classList.add('open');
      });
      pinboard.appendChild(photo);
    });
  }

  if (closeImageBtn && imageView) {
    closeImageBtn.addEventListener('click', () => imageView.classList.remove('open'));
    imageView.addEventListener('click', (e) => { if (e.target === imageView) imageView.classList.remove('open'); });
  }
  renderPinboard();
});