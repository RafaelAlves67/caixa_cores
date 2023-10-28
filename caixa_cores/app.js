/* ----------------------------------------------------------------------------

Exercício: 010
Enunciado:
    Existem 4 áreas a cinza.
    Ao clicar numa das áreas a área clicada deve ficar com fundo
    amarelo e as restantes a vermelho.
---------------------------------------------------------------------------- */

const area1 = document.querySelector('#box1')
const area2 = document.querySelector('#box2')
const area3 = document.querySelector('#box3')
const area4 = document.querySelector('#box4')

        area1.addEventListener('click', () => {
            area1.style.backgroundColor = 'yellow'
            area2.style.backgroundColor = 'red'
            area3.style.backgroundColor = 'red'
            area4.style.backgroundColor = 'red'
        })


    
        area2.addEventListener('click', () => {
            area2.style.backgroundColor = 'yellow'
            area1.style.backgroundColor = 'red'
            area3.style.backgroundColor = 'red'
            area4.style.backgroundColor = 'red'
        })
   

   
        area3.addEventListener('click', () => {
            area3.style.backgroundColor = 'yellow'
            area2.style.backgroundColor = 'red'
            area1.style.backgroundColor = 'red'
            area4.style.backgroundColor = 'red'
        })
   

    
        area4.addEventListener('click', () => {
            area4.style.backgroundColor = 'yellow'
            area2.style.backgroundColor = 'red'
            area3.style.backgroundColor = 'red'
            area1.style.backgroundColor = 'red'
        })







        

