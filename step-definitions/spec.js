var homePage = require('../page-objects/home-page');

describe('Protractor Demo App', function() {

    beforeEach(function() {
        homePage.get();
    });

    it('should have a title', async function() {
        await expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', async function() {
        await homePage.firstNumber().sendKeys(1);
        await homePage.secondNumber().sendKeys(2);
        await homePage.goButton().click();
        await expect(homePage.latestResult().getText()).toEqual('3');
    });

    it('should add four and six', async function() {
        await homePage.firstNumber().sendKeys(4);
        await homePage.secondNumber().sendKeys(6);
        await homePage.goButton().click();
        await expect(homePage.latestResult().getText()).toEqual('10');
    });

    it('should read the value from an input', async function() {
        await homePage.firstNumber().sendKeys(1);
        await expect(homePage.firstNumber().getAttribute('value')).toEqual('1');
    });
});