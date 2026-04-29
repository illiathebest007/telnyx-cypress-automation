class BasePage {
    visit(url = '/') {
        cy.visit(url)
    }
    acceptCookies() {
        cy.get('#onetrust-accept-btn-handler').click()
    }
}
export default new BasePage() 