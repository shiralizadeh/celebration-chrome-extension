export enum ConfettiType {
  Centri = "0",
  Topish = "1",
}

export type ConfettiEvent = CustomEvent & {
  confettiType: ConfettiType;
};

function initConfetti(confettiType: ConfettiType) {
  const event = new CustomEvent("onCelebration") as ConfettiEvent;

  event.confettiType = confettiType;

  document.dispatchEvent(event);
}

chrome.action.onClicked.addListener((tab) => {
  chrome.storage.sync.get("confettiType", function (data: any) {
    const confettiType = data.confettiType
      ? data.confettiType
      : ConfettiType.Centri;

    chrome.scripting
      .executeScript({
        target: { tabId: tab.id ? tab.id : -1 },
        func: initConfetti,
        args: [confettiType],
      })
      .then();
  });
});
