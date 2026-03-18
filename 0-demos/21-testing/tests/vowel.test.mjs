import { describe, it, expect } from 'vitest'
import { deleteVowel } from '../functions/vowel.mjs'
// describe = regroupement d'une série de test
describe('Testing deleteVoyelle()', () => {
  // it() et test() sont des alias
  it('Should have gld when name equals glodie', () => {
    // AAA
    // Arrange = préparer l'environnement pour tester (les données nécessaires)
    const data = 'glodie'
    // Act = appel de la fonction à tester
    const result = deleteVowel(data)
    // Assert = vérifier que le résultat attendu = résultat obtenu
    expect(result).toEqual('gld')
  })

  it('Should have pmdlr when name equals pmdlr', () => {
    const data = 'pmdlr'
    const result = deleteVowel(data)
    expect(result).toEqual('pmdlr')
  })

    it('Should have GLD when name equals GLODIE', () => {
    const data = 'GLODIE'
    const result = deleteVowel(data)
    expect(result).toEqual('GLD')
  })
})