var commonFunctions = function() {

    this.findShadowDomElement = async function(shadowHostSelector, shadowElementSelector) {
        let shadowHost = await browser.driver.findElement(by.css(shadowHostSelector));
        await shadowHost.getCssValue().then(function(value) {
            console.log(value);
        });
        console.log(shadowHost.getText());
        let shadowRoot = await browser.driver.executeScript("return arguments[0].shadowRoot", shadowHost);
        return shadowRoot.findElement(by.css(shadowElementSelector));
    }
}
module.exports = new commonFunctions();