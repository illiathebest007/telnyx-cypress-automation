class BasePage {
    visit(url = '/') {
        cy.visit(url, { failOnStatusCode: false })
    }
    acceptCookies() {
    // Выключаем стандартный лог Cypress, чтобы не мусорить, и проверяем наличие
    cy.get('body').then(($body) => {
        if ($body.find('#onetrust-accept-btn-handler').length > 0) {
            cy.get('#onetrust-accept-btn-handler').click();
        } else {
            cy.log('Cookie banner not found, skipping...');
        }
    });
}
}
export default new BasePage() 