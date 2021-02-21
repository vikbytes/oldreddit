// Takes the URL and modifies it as to direct to old.reddit.com instead of www.reddit.com
function modifyURL(requestDetails) {
    let url = requestDetails.url;
    let redirectUrl = url.replace("www", "old");
    return {redirectUrl};
}
// Listens for URL match to www.reddit.com and calls modifyURL when match is found  
browser.webRequest.onBeforeRequest.addListener(
    modifyURL,
    {urls: ["*://www.reddit.com/*"]}, ["blocking"]
);
  