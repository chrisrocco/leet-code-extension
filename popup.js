function goToSubs(){
    chrome.tabs.update({
        url: "https://leetcode.com/submissions/"
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('a').addEventListener('click', goToSubs);
});