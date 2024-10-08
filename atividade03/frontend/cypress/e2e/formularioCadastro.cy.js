describe('Formulário cadastro', () => {
    it('Usuário deve conseguir se cadastrar com sucesso', () => {
    cy.visit('/')
    
    
    cy.getByData('botao-cadastro').click() //* testaremos agora o botão 'cadastrar' *//
    cy.getByData('nome-input').type('Jose da Silva')
    cy.getByData('email-input').type('ze@email.com')
    cy.getByData('senha-input').type('456789')
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')
    })
})

