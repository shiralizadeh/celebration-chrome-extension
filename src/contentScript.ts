import confetti from "canvas-confetti";

document.addEventListener("onCelebration", (e: any) => {
  if (e.confettiType === "0") {
    confetti({
      angle: Math.random() * 180,
    });
  } else {
    // Other types of confetti
  }
});
