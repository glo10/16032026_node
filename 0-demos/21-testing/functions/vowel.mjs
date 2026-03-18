export const deleteVowel = (str) => {
  return str.replace(/[a,e,i,u,y,o]/ig, '')
}