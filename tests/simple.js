/*module.exports={
    "Hello":function(browser)
    {
        browser.url("https://tutorials.actionqa.com/yt/nw/locator-01.html");
        browser.pause(3000);
       // browser.click("#fun-link");
        //browser.pause(2000);

        const cssselector='#text-input'
        const xpathselector='//*[@id="text-input"]'
        //browser.useXpath()
        browser.setValue(xpathselector,"This is xpath");
        browser.pause(2000);
        browser.end();aaa
    },


    "world":function(browser)
    {
        browser.url("https://tutorials.actionqa.com/yt/nw/locator-01.html");
        browser.pause(3000);
       // browser.click("#fun-link");
        //browser.pause(2000);

        const cssselector='#text-input'
        const xpathselector='//*[@id="text-input"]'
        browser.useCss()
        browser.setValue(cssselector,"This is xpath");
        browser.pause(2000);
    }
};*/
module.exports=
{
    /*"navigate":function(browser)
    {
        browser.url("https://tutorials.actionqa.com/yt/nw/locator-01.html");
        browser.pause(10000);
        browser.setValue('//*[@id="text-input"]',"Nightwatch");
        browser.pause(5000);
        browser.clearValue('//*[@id="text-input"]');
        browser.pause(2000);
        browser.end() 
    },*/

    "using keys":function(browser)
    {
        browser.url("https://tutorials.actionqa.com/yt/nw/locator-01.html");
        browser.pause(10000);
        browser.click('//*[@id="text-input"]');
        browser.keys.perform("Nightwatch");
        browser.pause();
        browser.end();
    }
}