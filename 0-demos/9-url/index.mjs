import { URL } from 'node:url'
/**
 * Construction d'une URL à partir d'une instance de la classe URL
 * Toutes les propriétés href, pathname, search, hash, etc. accessibles depuis cet objet
 */
const url = new URL("https://www.google.com/imgres?q=callback%20hell&imgurl=https%3A%2F%2Fmiro.medium.com%2F1*sOy11ZsU1ijCSjZwx8ZzGQ.jpeg&imgrefurl=https%3A%2F%2Fmedium.com%2F%40jaybhoyar1997%2Favoiding-callback-hell-in-node-js-7c1c16ebd4d3&docid=h3oisGTutol2rM&tbnid=Dm4B4L-aTYf8kM&vet=12ahUKEwjf1PHr16STAxW1UKQEHaGEESQQnPAOegQIHxAB..i&w=1200&h=628&hcb=2&ved=2ahUKEwjf1PHr16STAxW1UKQEHaGEESQQnPAOegQIHxAB")
console.log('url', url)