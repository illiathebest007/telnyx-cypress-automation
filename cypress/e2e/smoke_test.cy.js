/// <reference types="cypress" />
import BasePage from '../support/page_objects/BasePage'
import ContactPage from '../support/page_objects/ContactPage'
describe('telnyx smoke test cases', () => {
  beforeEach(() => {
    BasePage.visit();
    BasePage.acceptCookies();
  });
  it('page loading', () => {
    cy.title().should('include', 'Telnyx')
    cy.contains('Products').should('be.visible')
    cy.contains('Solutions').should('be.visible')
    cy.get('footer').scrollIntoView().should('be.visible')
  })
  it('clicking pricing -> voice AI', () => {
    cy.contains('Pricing').click({ force: true })
    cy.contains('VOICE AI', { matchCase: false }).click({ force: true })
    cy.contains('Voice AI Agents').should('be.visible')
  })
  it('full stack animation check', { scrollBehavior: 'top' }, () => {
    cy.contains('EXPLORE THE STACK', { matchCase: false }).click({ force: true })
    cy.contains('THE FULL STACK', { timeout: 25000 }).should('exist')
  })
  it('on "full stack" animation click "configure agent"', () => {
    cy.contains('EXPLORE THE STACK', { matchCase: false }).click({ force: true })
    cy.contains('CONFIGURE AGENT', { timeout: 15000, matchCase: false }).click()
    cy.contains('Configure the environment your agents run in', { matchCase: false }).should('be.visible')
  })
  it('on AI agent choose model "Kimi K2.5", send message "Hello"', () => {
    cy.contains('EXPLORE THE STACK', { matchCase: false }).click()
    cy.contains('CONFIGURE AGENT', { timeout: 15000, matchCase: false }).click()
    cy.contains('Kimi K2.5').click()
    cy.get('input[placeholder*="Type message here"]').should('be.visible').type('Hello')
    cy.contains('Send message', { matchCase: false }).click()
    cy.get('div.bg-transparent p', { timeout: 15000 }).should('not.be.empty').and('be.visible')
  })
  it('Scroll down to the footer menu and click "Terms and Conditions of Service"', () => {
    cy.get('footer').scrollIntoView()
    cy.contains('Terms and Conditions of Service', { matchCase: false }).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/terms-and-conditions-of-service')
  })
  it('clicking contact us', () => {
    cy.contains('Contact us', { matchCase: false }).click({ force: true })
    cy.contains('Talk to an expert').should('be.visible')
  })
  it.only ('on contact us page fill out the required fields and click submit', () => {
    BasePage.visit('/contact-us')
    BasePage.acceptCookies()
    const testUser = {
      reason: 'Support',
      firstName: 'Illia',
      lastName: 'Test',
      email: 'test@gmail.com',
      phoneExt: 'United States (+1)',
      phone: '5553434',
      website: 'test.test',
      info: 'test',
      source: 'test'
    }
    ContactPage.fillContactForm(testUser)
    cy.get('div.bg-transparent p', { timeout: 15000 }).should('be.visible').and('contain', 'Thank you')
  })
  it('on contact us page click submiting button without filling the fields', () => {
    BasePage.visit('/contact-us')
    BasePage.acceptCookies()

    ContactPage.submit()
    ContactPage.verifyErrorMessage('This field is required.')
  })
  it('LinkedIn link', () => {
    cy.get('footer').scrollIntoView()
    cy.get('footer a[href*="linkedin"]').should('have.attr', 'href', 'https://www.linkedin.com/company/telnyx')
  })

})