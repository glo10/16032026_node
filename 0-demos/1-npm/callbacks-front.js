// exemple de callback en front

const btn = document.querySelector('button')
btn.addEventListener('click', () => {
  console.log('click sur le bouton')
})

const select = document.querySelector('select')
select.addEventListener('change', onChangeSelect)
function onChangeSelect() {
  console.log('option changed')
}