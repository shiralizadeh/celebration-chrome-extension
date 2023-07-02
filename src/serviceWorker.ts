function initConfetti() {
  document.dispatchEvent(new Event("onCelebration"));
}

enum CelebrationType {
  Confetti = "confetti",
}

function celebrate(type: CelebrationType) {
  switch (type) {
    case CelebrationType.Confetti:
      initConfetti();
      break;
    default:
      break;
  }
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting
    .executeScript({
      target: { tabId: tab.id ? tab.id : -1 },
      func: initConfetti,
      args: [],
    })
    .then();
});
