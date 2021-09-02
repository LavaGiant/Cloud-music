export const getCount = count => {
  if (count < 0) return
  if (count < 10000) {
    return count
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return Math.floor(count / 100000000) + '亿'
  }
}

export const getSizeImage = (url, size = 140) => `${url}?param=${size}x${size}`

// 时间戳格式化
export const formatDate = (time, fmt) => {
  const date = new Date(time)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

const padLeftZero = (str) => ('00' + str).substr(str.length);

export const getSongSource = id => `https://music.163.com/song/media/outer/url?id=${id}.mp3`


// 解析歌词  [00:21.75]数完星星数小羊1357一阵风吹散
export const parseLyric = lyricString => {
  const lineString = lyricString.split('\n')
  lineString.pop()
  const parseExp = /\[(\d{2}):(\d{2}).(\d{2,3})\]/
  return lineString.map(item => {
    //eslint-disable-next-line
    const [_, m, s, ms] = parseExp.exec(item)
    const content = item.replace(parseExp, '').trim()
    return {
      time: m * 60 * 1000 + s * 1000 + (ms.length === 3 ? Number(ms) : ms * 10),
      content
    }
  })
}

// 获取歌手字母类别
const generateSingerAlpha = () => {
  const alphabets = ["-1"];
  const start = 'A'.charCodeAt(0);
  const last = 'Z'.charCodeAt(0);
  for (let i = start; i <= last; ++i) {
    alphabets.push(String.fromCharCode(i));
  }

  alphabets.push("0");

  return alphabets;
}

export const singerAlphas = generateSingerAlpha();
