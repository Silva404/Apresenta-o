const modal = document
    .querySelector('.modal-overlay')
const cards = document
    .querySelectorAll('.card')


// item de fechar
document
    .querySelector('.close-modal')
    .addEventListener('click', () => {
        modal.classList.add('hide')
        modal.querySelector('iframe').src= ''
    })


for (let card of cards) {
    card.addEventListener('click', () => {
        const videoId = card.getAttribute('id')
        
        window.location.href = `/video?id=${videoId}`
    })
}

// https://youtube.com/embed/Ab33948mbW8