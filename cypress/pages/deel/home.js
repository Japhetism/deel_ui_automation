/// <reference types="cypress" />

class Home {

    // get login text
    getLoginText() {
        return cy.get(".navbar-item__button-text").contains("Log In");
    }

    // click on login text button
    clickLoginText() {
        this.getLoginText().click();
        cy.wait(10000);
    }

    // redirect to login screeen
    redirectToLoginPage() {
        var self = this;
        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
              setTimeout(function () { doc.location.reload() }, 50)
            })
            self.clickLoginText();
          })
    }
}

export default Home;