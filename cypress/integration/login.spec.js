/// <reference types="cypress" />
/* eslint-disable no-undef */

context('Login Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('User login screen functionality should work', () => {
        cy.get('.prufer').click('center')
        cy.get('#username').type('slow.typing@email.com')
            .should('have.value', 'slow.typing@email.com')
        cy.get('#password').type('password')
            .should('have.value', 'password')
        cy.get('[type="submit"]').click()
        cy.wait(1000)
        cy.get('.engine-status-container button')
            .first()
            .click()
        cy.get('h1')
            .contains('Details Page')
    })
})
