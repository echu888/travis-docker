/// <reference types="cypress" />

context('Basic test', () => {

  beforeEach(() => {
  })

  it('says hello world', () => {
    cy.request('127.0.0.1:3000').its('body').should('include', 'Hello World')
  })

})
