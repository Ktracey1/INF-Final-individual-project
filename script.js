const video_playlist = document.querySelector('.video-playlist .videos');
const audio_player = document.querySelector('.audio-player');
const spotify_embed = document.querySelector('.spotify-embed');

let data = [
  { id: 'a1',
  title: 'Le miel',
  name: 'le miel.mp3', 
  artist: 'Tayc', 
  duration: '3:59',
  url:"https://open.spotify.com/embed/track/1lQGfiIqrzHj9YF2vH94Ec?utm_source=generator" 
  },
  
  { id: 'a2',
  title: 'MMS',
  name: 'MMS.mp3', 
  artist: 'Asake & Wizkid', 
  duration: '3:40',
  url: 'https://open.spotify.com/embed/track/13VXuHw3O8Yt7VwRIDqSo4?utm_source=generator' 
 },
 
  { id: 'a3',
   title: 'Olé',
   name: 'Olé.mp3', 
   artist: 'Sarina',
   duration: '3:18',
  url: 'https://open.spotify.com/embed/track/0OCa9zbLOHYQ4P2Jc97xm5?utm_source=generator' 
  },
  
  { id: 'a4', 
  title: 'Ginger', 
  name: 'Ginger.mp3', 
  artist: 'Burna Boy & Wizkid', 
  duration: '3:16',
  url: 'https://open.spotify.com/embed/track/51mLQ3w7yR7vjdSTFLWaY5?utm_source=generator' 
  },
  
  { id: 'a5',
  title: 'King',
  name: 'King.mp3',
  artist: 'Fireboy DML',
  duration: '2:45', 
  url: 'https://open.spotify.com/embed/track/1IARNA3zsu39Kul2ov9n3J?utm_source=generator' 
  },
  
  { id: 'a6',
  title: 'Enjoy', 
  name: 'Enjoy.mp3', 
  artist: 'Tekno',
  duration: '2:17',
  url: 'https://open.spotify.com/embed/track/2S81GqH8jtb6ZUM0wrux4v?utm_source=generator' 
  },
  { id: 'a7',
  title: 'Back 2 Me',
  name: 'Back2Me.mp3',
  artist: 'Keys the prince',
  duration: '2:37',
  url: 'https://open.spotify.com/embed/track/4mzFHiHuyFT7ypL3zmEHXe?utm_source=generator' 
  },
  
  { id: 'a8',
  title: 'La Pluie',
  name: 'La Pluie.mp3',
  artist: 'Franglish', 
  duration: '3:56',
  url: 'https://open.spotify.com/embed/track/6iHRvE6NMx3cAuJMNnsfo5?utm_source=generator' 
  },
  
  { id: 'a9',
  title: 'Hm Hm Hm',
  name: 'Hm Hm Hm.mp3',
  artist: 'Youka',
  duration: '2:12',
  url: 'https://open.spotify.com/embed/track/1FEh2VLXCzHr4DhMLufrs5?utm_source=generator' 
  },
  
  {
    id: 'a10',
    title: 'La vue d’un.../Ma Préférée',
    name: 'Ma Préférée.mp3',
    artist: 'Dadju & Tayc',
    duration: '4:46',
    url: 'https://open.spotify.com/embed/track/3IedXlFglIwo754rxOID4x?utm_source=generator' 
  }
];

data.forEach((track, i) => {
  let html = `
    <div class="video" data-id="${track.id}">
      <p>${i + 1 < 10 ? '0' + (i + 1) : i + 1}.</p>
      <h3 class="title">${track.title}</h3>
      <h3 class="artist">${track.artist}</h3>
      <p class="time">${track.duration}</p>
    </div>
  `;
  video_playlist.innerHTML += html;
});

let videos = document.querySelectorAll('.video');

videos[0].classList.add('active');
audio_player.src = 'audio/' + data[0].name;

videos.forEach(videoEl => {
  videoEl.onclick = () => {

    let track = data.find(t => t.id === videoEl.dataset.id);

    if (track.url) {
      audio_player.pause();
      audio_player.style.display = 'none';
      spotify_embed.innerHTML = `<iframe style="border-radius:12px" src="${track.url}" width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
    } else {
      spotify_embed.innerHTML = '';
      audio_player.style.display = 'block';
      audio_player.src = 'audio/' + track.name;
      audio_player.play();
    }
  };
});
