/// <reference types="cypress" />

context('Basic test', () => {

  beforeEach(() => {
  })

  it('says hello world', () => {
    cy.visit('').contains('Hello World')
  })

})
