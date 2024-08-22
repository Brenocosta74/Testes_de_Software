it.only('Não deve permitir um e-mail inválido!', () => {
    cy.visit('/')
    
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('neilton@alura')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()
    //* clicamos no botão login e inserimos os dados de login para testar o cenário triste, onde o email está inválido */
    cy.getByData('mensagem-erro').should('exist').and('have-text', 'o email digitado é inválido')
})
