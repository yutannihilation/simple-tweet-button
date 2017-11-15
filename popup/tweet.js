function openTwitter(tabs) {
  browser.windows.create({
    url: "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(tabs[0].title + " " + tabs[0].url),
    height: 300,
    width: 600,
    type: "popup"
  });
}

browser.tabs.query({ active: true, currentWindow: true })
  .then(openTwitter);

