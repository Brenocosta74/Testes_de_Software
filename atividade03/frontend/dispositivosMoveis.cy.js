describe('Testando dispositivos móveis', () => {
    it('Deve existir um menu burguer', () => {
        cy.visit('/')
        
        cy.viewport(550, 750) /* Configura o tamanho da janela para 550px x 750px */
		cy.viewport('iphone-6') /* Configura o tamanho da janela para 375px x 667px */

        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        
        cy.location('pathname').should('eq','/home')

        cy.getByData('menu-burguer').click()
        cy.getByData('menu-lateral').find('a').eq(3).click()			

        cy.location('pathname').should('eq','/home/investimentos')
    })
})

describe('Menu de navegação', () => {
		  context('Resolução de 720p', () => {
			beforeEach(() => {
			  /* Roda os testes como se fossem em um monitor de 720p de resolução */
			  cy.viewport(1280, 720)
			})

			cy.viewport(1140, 640)
			
		  })
			})
            context('Resolução do macbook-11 ', () => {
                beforeEach(() => {

			cy.viewport(1280, 720),
            cy.viewport('macbook-11')
			
		  })
		})

        describe('Menu de navegação', () => {
            context('Resolução de 720p', () => {
              beforeEach(() => {
                /* Roda os testes como se fossem em um monitor de 720p de resolução */
                cy.viewport(1280, 720)
              })
  
              /* seu teste aqui */
              
            })
  
            context('Resolução do iphone-5 ', () => {
              beforeEach(() => {
                /* roda os testes como se fossem em um dispositivo com a resolução de um iphone-5 */
                cy.viewport('iphone-5')
              })
  
              /* seu teste aqui */
              
            })
          })