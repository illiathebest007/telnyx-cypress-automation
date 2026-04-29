class ContactPage {
    fillContactForm(userData) {
        cy.get('#Reason_for_Contact__c').select(userData.reason)
        cy.get('#FirstName').type(userData.firstName)
        cy.get('#LastName').type(userData.lastName)
        cy.get('#Email').type(userData.email)
        cy.get('#Phone_Number_Extension__c').select(userData.phoneExt)
        cy.get('#Phone_Number_Base__c').type(userData.phone)
        cy.get('#Website').type(userData.website)
        cy.get('#Form_Additional_Information__c').type(userData.info)
        cy.get('#How_did_you_hear_about_Telnyx_Open__c').type(userData.source)
        cy.get('button[type="submit"]').click()
    }
    submit() {
        cy.get('button[type="submit"]').click()
    }

    verifyErrorMessage(message) {
        cy.get('.mktoErrorMsg')
            .should('be.visible')
            .and('contain', message)
    }
}
export default new ContactPage()