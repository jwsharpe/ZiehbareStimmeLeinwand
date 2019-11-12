import * as tf from "@tensorflow/tfjs";
import * as speechCommands from "@tensorflow-models/speech-commands";
import anime from "animejs/lib/anime.es.js";
export async function voiceRecognize() {
  const recognizer = speechCommands.create("BROWSER_FFT");

  await recognizer.ensureModelLoaded();

  const labels = recognizer.wordLabels();

  recognizer.listen(
    result => {
      let i = result.scores.indexOf(Math.max(...result.scores));
      if (!this.state.loaded && labels[i] === "go") {
        this.setState({ loaded: true });
        this.didLoad();
      }

      if (Math.max(...result.scores) > 0.55) {
        this.setState({ resultText: labels[i] });
      } else {
        this.setState({ resultText: this.state.text });
      }

      // if (this.state.loaded && this.state.resultText === "go") {
      //   function randomValues() {
      //     anime({
      //       targets: ".App",
      //       translateY: function() {
      //         return anime.random(0, 270);
      //       },
      //       easing: "easeInOutQuad",
      //       duration: 750,
      //       complete: randomValues
      //     });
      //   }
      //   randomValues();
      // }

      if (this.state.resultText === "up") {
        this.setState(
          prev => ({ scale: +prev.scale + 0.1 }),
          () => {
            anime({
              targets: ".App",
              duration: 1000,
              scale: this.state.scale
            });
          }
        );
      }
      if (this.state.resultText === "down") {
        this.setState(
          prev => ({ scale: +prev.scale - 0.1 }),
          () => {
            anime({
              targets: ".App",
              duration: 1000,
              scale: this.state.scale
            });
          }
        );
      }
      if (this.state.resultText === "left") {
        this.setState(
          prev => ({ left: +prev.left - 50 }),
          () => {
            anime({
              targets: ".App",
              duration: 500,
              translateX: this.state.left
            });
          }
        );
      }
      if (this.state.resultText === "right") {
        this.setState(
          prev => ({ left: +prev.left + 50 }),
          () => {
            anime({
              targets: ".App",
              duration: 500,
              translateX: this.state.left
            });
          }
        );
      }
    },
    {
      probabilityThreshold: 0.75
    }
  );
}
