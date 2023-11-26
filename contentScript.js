(() => {
    let tiktokDivShareFollowContainer;
    let currentUser = "";

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const {type, userId} = obj;

        if (type === "NEW") {
            currentUser = userId;
            newUserAccessed();
        }
    });

    const newUserAccessed = () => {
        const downloadBtnExists = document.getElementsByClassName("download-btn")[0];

        if (!downloadBtnExists) {
            const downloadBtn = document.createElement("img");

            downloadBtn.src = chrome.runtime.getUrl("assets/download.png");
            downloadBtn.className = "download-btn";
            downloadBtn.title = "Download all videos from this user";

            tiktokDivShareFollowContainer = document.getElementsByClassName("tiktok-1xwagd1-DivShareFollowContainer")[0];
            
            tiktokDivShareFollowContainer.appendChild(downloadBtn);
        }
    }

    newUserAccessed();
})();