(() => {
    let tiktokControl;
    let currentUser = "";

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const {type, userId} = obj;

        if (type === "NEW") {
            currentUser = userId;
            newUserAccessed();
        }
    });

})();