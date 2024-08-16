describe('template spec', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })
})