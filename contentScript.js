(() => {
    let currentUser = "";

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const currentUser = obj.userId;
        buttonPressed();
    });

    const buttonPressed = () => {
        
        const results = [];
        var urls = document.getElementsByTagName('a');
        for (urlIndex in urls) {
            const url = urls[urlIndex]
            if(url.href && url.href.includes(currentUser) && url.href.indexOf('://')!==-1) {
                results.push(url.href) // url.rel
            }
        }
        console.log(results);
    }

    pageLoaded();
})();