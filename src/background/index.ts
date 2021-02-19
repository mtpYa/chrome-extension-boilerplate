chrome.runtime.onInstalled.addListener(() => {
  console.log('on installed event');
})

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.scripting.executeScript({
    target: { tabId: activeInfo.tabId },
    files: ['test_script.js']
  }, (data) => console.log(data) );
})

export {};
