module.exports = {
    'My first test case'(browser) {
        browser
            .url('https://mediation.labcavegames.com/login')            
            .setValue('input[type=text]', 'a.gonzalezdelajara@gmail.com' )
            .setValue('input[type=password]', 'Sunmedia.1' )
            .click('button[type=submit]', function(result) {
                this.assert.strictEqual(result.status, 0);
              }) 
              // PAUSE LOAD PAGE         
            .pause(2000)
            // OPEN MENU
            .click('div.application--wrap > div > nav > div > button > div > i')
            .click('div.application--wrap > div > aside > div.v-list.lateral-navigation__list.theme--light > div.white--text.lateral-navigation__item.js-navigation-apps > a > div.v-list__tile__content > div')
             // OPEN BUTTON NEW APP
            .click('button[class="btn-new-app white--text js-apps-newAppButton v-btn theme--light blue_01"')
            // WAIT THE WINDOW           
            .waitForElementVisible('#app > div.v-dialog__content.v-dialog__content--active > div')
            // CLICK "No,my app is not live yet"
            .click('div.v-dialog__content.v-dialog__content--active > div > div.v-card.v-sheet.theme--light > div.v-card__text.card-form-wrapper > div > div:nth-child(2) > div.flex.xs8.align-self-center > div > div > div > div > div > div > label:nth-child(3) > span')
            .waitForElementVisible('#app > div.v-dialog__content.v-dialog__content--active > div > div.v-card.v-sheet.theme--light > div.v-card__text.card-form-wrapper > div > div.flex.xs12')            
            // FORM NAME AND ID APP 
            .setValue('input[placeholder="App name"]','Prueba Alejandro')
            .setValue('input[placeholder="Store ID"]','101')
            //FORM IMAGES           
            .setValue('input.img-wrapper__input', require('path').resolve(__dirname + '/images/sunmedia.jpg'))
            //BUTTON CREATE
            .click('div.v-dialog__content.v-dialog__content--active > div > div.v-card.v-sheet.theme--light > div.v-card__actions')
            .click('div.v-dialog__content.v-dialog__content--active > div > div.v-card.v-sheet.theme--light > div.v-card__actions > button.white--text.js-apps-newAppCreateButton.v-btn.theme--light.buttonColor')
            .pause(3000)
            //SCREENSHOT WITH THE RESULTS
            .saveScreenshot('Captura/fileName.png');
            
           
        
    }
}