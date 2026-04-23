Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('telnyx smoke test cases', () => {
  it('page loading', () => {
    cy.visit('/')
    cy.title().should('include', 'Telnyx')
    cy.contains('Products').should('be.visible')
    cy.contains('Solutions').should('be.visible')
    cy.get('footer').scrollIntoView().should('be.visible')
  })
  it('clicking pricing -> voice AI', () => {
    cy.visit('/')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.contains('Pricing').click({ force: true })
    cy.contains('VOICE AI', { matchCase: false }).click({ force: true })
    cy.contains('Voice AI Agents').should('be.visible')
  })
  it('full stack animation check', { scrollBehavior: 'top' }, () => {
    cy.visit('/')
    cy.contains('EXPLORE THE STACK', { matchCase: false }).click({force:true})
    cy.contains('THE FULL STACK', { timeout: 25000}).should('exist')
  })
  it('on "full stack" animation click "configure agent"', () => {
    cy.visit('/')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.contains('EXPLORE THE STACK', { matchCase: false }).click({force:true})
    cy.contains('CONFIGURE AGENT', { timeout: 15000, matchCase: false }).click()
    cy.contains('Configure the environment your agents run in', { matchCase: false }).should('be.visible')
  })
  it('on AI agent choose model "Kimi K2.5", send message "Hello"', () => {
    cy.visit('/')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.contains('EXPLORE THE STACK', { matchCase: false }).click()
    cy.contains('CONFIGURE AGENT', { timeout: 15000, matchCase: false }).click()
    cy.contains('Kimi K2.5').click()
    cy.get('input[placeholder*="Type message here"]').should('be.visible').type('Hello')
    cy.contains('Send message', { matchCase: false }).click()
    cy.get('div.bg-transparent p', { timeout: 15000 }).should('not.be.empty').and('be.visible')
  })
  it('Scroll down to the footer menu and click "Terms and Conditions of Service"', () => {
    cy.visit('/')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('footer').scrollIntoView()
    cy.contains('Terms and Conditions of Service', { matchCase: false }).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/terms-and-conditions-of-service')
  })
  it('clicking contact us', () => {
    cy.visit('/')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.contains('Contact us', { matchCase: false }).click({ force: true })
    cy.contains('Talk to an expert').should('be.visible')
  })
  it('on contact us page fill out the required fields and click submit', () => {
    cy.visit('/contact-us', {timout:12000})
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('#Reason_for_Contact__c').select('Support')
    cy.get('#FirstName').type('Illia')
    cy.get('#LastName').type('Test')
    cy.get('#Email').type('test@gmail.com')
    cy.get('#Phone_Number_Extension__c').select('United States (+1)')
    cy.get('#Phone_Number_Base__c').type('5553434')
    cy.get('#Website').type('test.test')
    cy.get('#Form_Additional_Information__c').type('test')
    cy.get('#How_did_you_hear_about_Telnyx_Open__c').type('test')
    cy.get('button[type="submit"]').click()
    cy.get('div.bg-transparent p', { timeout: 15000 }).should('be.visible').and('contain', 'Thank you')
  })
  it('on contact us page click submiting button without filling the fields', () => {
    cy.visit('/contact-us')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('button[type="submit"]').click()
    cy.get('.mktoErrorMsg').should('be.visible').and('contain', 'This field is required.')
  })
  it('LinkedIn link', () => {
    cy.visit('/')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('footer').scrollIntoView()
    cy.get('footer a[href*="linkedin"]').should('have.attr', 'href', 'https://www.linkedin.com/company/telnyx')
  })

})