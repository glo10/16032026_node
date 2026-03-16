// callback = fonction de retour exécuté à la suite d'un événement qui s'est produit
// exemples de callback en front, attention ce code ne fonctionne pas sur Node
const btn = document.querySelector('button')
// callback anonyme (fonction non nommée)
btn.addEventListener('click', () => {
  console.log('click sur le bouton')
})

const select = document.querySelector('select')
// callback avec une fonction nommée
select.addEventListener('change', onChangeSelect)
function onChangeSelect(e) {
  console.log('option changed', e.target.value)
}