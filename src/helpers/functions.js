function sample(arr, number) {
  // Shuffling array
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  
  // Return the x first items
  return arr.slice(0, number);
}


function textEllipsis(str, limit = 110) {
  if (str.length > limit) return (`${str.substring(0, limit - 1).trim()}...`);
  return str
}


function prefixLocale(locale, path) {
  return `${locale}${path}`;
}

export { sample, textEllipsis, prefixLocale }