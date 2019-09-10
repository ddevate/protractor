var ShadowDOMPage = function() {

    this.get = async function() {
        await browser.driver.get('https://shop.polymer-project.org/');
    };

    this.shadowElement = function() {
        //return browser.executeScript('return document.querySelector("span#alttext")');
        return browser.driver.executeScript('return document.querySelector("shop-image").shadowRoot.innerHTML');
    };

    this.pierceShadowRoot = function(hostElement, rootSelector) {
        element = null;
        shadowRoot = null;

        shadowRoot = browser.driver.executeScript("return arguments[0].shadowRoot", hostSelector);
        element = shadowRoot.findElement(By.cssSelector(selector));

        return element;
    }

};
module.exports = new ShadowDOMPage();