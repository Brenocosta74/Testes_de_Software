describe('Página inicial', () => {
  it('Deve renderizar h1 com o texto correto!', () => {
    beforeEach( () => {
      cy.visit('http://localhost:3000/')
    })
    cy.getByData('ttulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
    })
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })
})