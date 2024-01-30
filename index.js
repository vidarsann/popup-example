const popupButton = document.getElementById('pop-up-button')
const popup = document.getElementById('pop-up')

popupButton.addEventListener('click', () => {
    console.log('hello')
    popup.setAttribute('style', 'display: none')
})