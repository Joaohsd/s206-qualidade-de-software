// Adding intellisense for cypress commands
/// <reference types="cypress"/> 

function createUser(){
  let hours = new Date().getHours().toString()
  let minutes = new Date().getMinutes().toString()
  let seconds = new Date().getSeconds().toString()

  let user = hours + minutes + seconds + 'id'
  let password = hours + minutes + seconds + 'pwd'

  const userInfo = [user, password]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login') 

  cy.get('.btn-link').click()

  cy.get('#firstName').type(user)

  cy.get('#Text1').type(user)

  cy.get('#username').type(user)

  cy.get('#password').type(password)

  cy.get('.btn-primary').click()

  cy.get('.ng-binding').should('contain.text', 'Registration successful')

  return userInfo
}

describe('Creating test scenario for globalsqa site', () => {
  
  it.skip('Test case: Registering an user successfully', () => {

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login') 

    cy.get('.btn-link').click()

    cy.get('#firstName').type('Teste')

    cy.get('#Text1').type('Login')

    cy.get('#username').type('teste')

    cy.get('#password').type('teste')

    cy.get('.btn-primary').click()

    cy.get('.ng-binding').should('contain.text', 'Registration successful')

  })

  it.skip('Test case: Registering an user with failed situation without password filling.', () => {

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register')
    
    cy.get('#firstName').type('Teste')

    cy.get('#Text1').type('Login')

    cy.get('#username').type('teste')

    cy.get('#password').type('teste')
    
    cy.get('#password').clear()

    cy.get('.has-error > .help-block').should('have.text', 'Password is required')
    cy.get('.btn-primary').should('be.disabled')

  })

  it('Test case: Log in successfully', () => {
    const userInfo = createUser()
    
    cy.get('#username').type(userInfo[0])
    cy.get('#password').type(userInfo[1])
    cy.get('.btn-primary').click()
    
    cy.get('h1.ng-binding').should('contain.text', userInfo[0])
  })

})