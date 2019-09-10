var Homepage = function() {

    this.get = async function() {
        await browser.get('http://juliemr.github.io/protractor-demo/');
    };

    this.firstNumber = function() {
        return element(by.model('first'));
    };

    this.secondNumber = function() {
        return element(by.model('second'));
    };

    this.goButton = function() {
        return element(by.id('gobutton'));
    };

    this.latestResult = function() {
        return element(by.binding('latest'));
    };

};
module.exports = new Homepage();