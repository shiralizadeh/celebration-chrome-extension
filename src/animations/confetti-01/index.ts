const confettiStyles = `
.confetti {
    display: flex;
    pointer-events: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1000;
  }
  
  .confetti-piece {
    position: absolute;
    width: 10px;
    height: 30px;
    background: #ffd300;
    top: 0;
    opacity: 0;
  }
  
  .confetti-piece:nth-child(1) {
    left: 7%;
    transform: rotate(-40deg);
    animation: makeItRain 1000ms infinite ease-out;
    animation-delay: 182ms;
    animation-duration: 1116ms;
  }
  
  .confetti-piece:nth-child(2) {
    left: 14%;
    transform: rotate(4deg);
    animation: makeItRain 1000ms infinite ease-out;
    animation-delay: 161ms;
    animation-duration: 1076ms;
  }
  
  .confetti-piece:nth-child(3) {
    left: 21%;
    transform: rotate(-51deg);
    animation: makeItRain 1000ms infinite ease-out;
    animation-delay: 481ms;
    animation-duration: 1103ms;
  }
  
  .confetti-piece:nth-child(4) {
    left: 28%;
    transform: rotate(61deg);
    animation: makeItRain 1000ms infinite ease-out;
    animation-delay: 334ms;
    animation-duration: 708ms;
  }
  
  .confetti-piece:nth-child(5) {
    left: 35%;
    transform: rotate(-52deg);
    animation: makeItRain 1000ms infinite ease-out;
    animation-delay: 302ms;
    animation-duration: 776ms;
  }
  
  .confetti-piece:nth-child(6) {
    left: 42%;
    transform: rotate(38deg);
    animation: makeItRain 1000ms infinite ease-out;
    animation-delay: 180ms;
    animation-duration: 1168ms;
  }
  
  .confetti-piece:nth-child(7) {
    left: 49%;
    transform: rotate(11deg);
    animation: makeItRain 1000ms infinite ease-out;
    animation-delay: 395ms;
    animation-duration: 1200ms;
  }
  
  .confetti-piece:nth-child(8) {
    left: 56%;
    transform: rotate(49deg);
    animation: makeItRain 1000ms infinite ease-out;
    animation-delay: 14ms;
    animation-duration: 887ms;
  }
  
  .confetti-piece:nth-child(9) {
    left: 63%;
    transform: rotate(-72deg);
    animation: makeItRain 1000ms infinite ease-out;
    animation-delay: 149ms;
    animation-duration: 805ms;
  }
  
  .confetti-piece:nth-child(10) {
    left: 70%;
    transform: rotate(10deg);
    animation: makeItRain 1000ms infinite ease-out;
    animation-delay: 351ms;
    animation-duration: 1059ms;
  }
  
  .confetti-piece:nth-child(11) {
    left: 77%;
    transform: rotate(4deg);
    animation: makeItRain 1000ms infinite ease-out;
    animation-delay: 307ms;
    animation-duration: 1132ms;
  }
  
  .confetti-piece:nth-child(12) {
    left: 84%;
    transform: rotate(42deg);
    animation: makeItRain 1000ms infinite ease-out;
    animation-delay: 464ms;
    animation-duration: 776ms;
  }
  
  .confetti-piece:nth-child(13) {
    left: 91%;
    transform: rotate(-72deg);
    animation: makeItRain 1000ms infinite ease-out;
    animation-delay: 429ms;
    animation-duration: 818ms;
  }
  
  .confetti-piece:nth-child(odd) {
    background: #7431e8;
  }
  
  .confetti-piece:nth-child(even) {
    z-index: 1;
  }
  
  .confetti-piece:nth-child(4n) {
    width: 5px;
    height: 12px;
    animation-duration: 2000ms;
  }
  
  .confetti-piece:nth-child(3n) {
    width: 3px;
    height: 10px;
    animation-duration: 2500ms;
    animation-delay: 1000ms;
  }
  
  .confetti-piece:nth-child(4n-7) {
    background: red;
  }
  
  @keyframes makeItRain {
    from {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    to {
      transform: translateY(350px);
    }
  }  
`;

export function initConfetti() {
  console.log("initConfetti");

  const styleTag = document.createElement("style");
  const styleText = document.createTextNode(confettiStyles);

  styleTag.type = "text/css";

  styleTag.appendChild(styleText);
  document.body.appendChild(styleTag);

  console.log({
    document,
    styleTag,
  });
}
