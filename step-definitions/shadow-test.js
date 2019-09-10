var shadowDOMPage = require('../page-objects/shadow-dom');
var commonFunctions = require('./../common-utilities/common-functions');
var EC = protractor.ExpectedConditions;

describe('Protractor Demo Test', function() {

    beforeEach(function() {

        shadowDOMPage.get();
    });

    it('should be able to validate shadow DOM', async function() {
        //browser.ignoreSynchronization = true;
        //expect(element(by.deepCss('span#alttext'))).toBe('audio_player');
        await browser.driver.sleep(5000);
        //expect(commonFunctions.findShadowDomElement('//img[contains(@alt, "audio_player")]', 'span#alttext').isDisplayed()).toBeTruthy();
        //await expect(shadowDOMPage.shadowElement()).toMatch("<style>");
        await commonFunctions.findShadowDomElement('[page=home]', 'style').then(async function(ele) {
            await console.log(ele.getText());
        });
    });
});