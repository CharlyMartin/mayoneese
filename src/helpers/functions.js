function textEllipsis(str, limit = 110) {
  if (str.length > limit) return `${str.substring(0, limit - 1).trim()}...`
  return str
}

function inlineStyle(object) {
  const array = Object.entries(object)
  return array.map(i => i.join(': ')).join('; ')
}

function capWord(str) {
  if (str[0] === undefined) return ''
  return str[0].toUpperCase() + str.substring(1)
}

function capitalise(string) {
  const words = string.split(' ')
  return words.map(word => capWord(word)).join(' ')
}

export { textEllipsis, inlineStyle, capitalise }
