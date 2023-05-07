enum CelebrationType {
  Confetti = "confetti",
}

function celebrate(type: CelebrationType) {
  console.log(`Celebrating ${type}`);

  switch (type) {
    case CelebrationType.Confetti:
      break;
    default:
      break;
  }
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting
    .executeScript({
      target: { tabId: tab.id ? tab.id : -1 },
      func: celebrate,
      args: [CelebrationType.Confetti],
    })
    .then();
});
