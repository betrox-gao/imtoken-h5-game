function createInnerAudioContext(url) {
  let AudioContext = uni.createInnerAudioContext();
  AudioContext.src = url;
  return AudioContext;
}
export let bgAudio = createInnerAudioContext(`${require("@/static/video/bg_music.wav")}`);

export let answerAudio = createInnerAudioContext(`${require("@/static/video/answering.mp3")}`);

export let blastAudio = createInnerAudioContext(`${require("@/static/video/blast.mp3")}`);

export let errorAudio = createInnerAudioContext(`${require("@/static/video/error.wav")}`);

export let correctAudio = createInnerAudioContext(`${require("@/static/video/correct.wav")}`);

// 预加载音频
function preload(audio) {
  const link = document.createElement('link')
  link.rel = "preload"
  link.as = "image"  // audio 值不太支持
  link.href = audio.src
  document.head.append(link)
}
preload(bgAudio)
preload(answerAudio)
preload(blastAudio)
preload(errorAudio)
preload(correctAudio)


// export function playGameOverAudio(isWin) {
//   const AudioContext = uni.createInnerAudioContext();
//   AudioContext.src = isWin ? require("@/static/video/victory.mp3") : require("@/static/video/defeat.mp3");
//   // AudioContext.src = `${CDN}/common/game/${isWin ? `victory` : `defeat`}.mp3`;
//   const play = () => AudioContext.play()

//   window.addEventListener("touchend", play, { once: true });
//   setTimeout(() => {
//     window.removeEventListener("touchend", play, { once: true })
//   }, 1500)
// }