let nickname = '',
  lovePoint = {
    chammuh: 0,
    이름1: 0
  };

ctx.font = '22px Spoqa Han Sans'

confirm('이름이 뭐야?', 'nameInput', '홍길동', (id, reconfirm) => {
  nickname = document.getElementById(id).value
  if (nickname == '') {
    alertErr('이름을 입력해줘!')
  } else if (nickname === '참머') {
    alertErr('\'참머\' 는 사용할 수 없는 이름이야!')
  } else if (ctx.measureText(nickname).width > 150) {
    alertErr('조금 더 짧은 닉네임을 입력해줘! (한글 기준 최대 7자, 알파벳 기준 최대 12자)')
  }
})

fetch('./assets/list.txt')
  .then(async res => preloading('./assets/', (await res.text()).split(', ')))
  .then(() => show('클릭하여 시작...', 'title', false))
  
fetch('./scripts/script.json').then(async res => playScript(await res.json()))

document.body.addEventListener('selectstart', () => {
  return false
})