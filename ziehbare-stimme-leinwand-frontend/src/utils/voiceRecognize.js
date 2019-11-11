import * as tf from "@tensorflow/tfjs";
import * as speechCommands from "@tensorflow-models/speech-commands";
export async function voiceRecognize() {
  const recognizer = speechCommands.create("BROWSER_FFT");

  await recognizer.ensureModelLoaded();

  const labels = recognizer.wordLabels();

  recognizer.listen(
    result => {
      let i = result.scores.indexOf(Math.max(...result.scores));

      if (Math.max(...result.scores) > 0.95) {
        this.setState({ text: labels[i] });
      } else {
        this.setState({ text: this.state.text });
      }
    },
    {
      probabilityThreshold: 0.75
    }
  );
}
