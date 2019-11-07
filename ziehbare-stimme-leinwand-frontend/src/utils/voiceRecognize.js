import * as tf from "@tensorflow/tfjs";
import * as speechCommands from "@tensorflow-models/speech-commands";
export async function voiceRecognize() {
  // When calling `create()`, you must provide the type of the audio input.
  // The two available options are `BROWSER_FFT` and `SOFT_FFT`.
  // - BROWSER_FFT uses the browser's native Fourier transform.
  // - SOFT_FFT uses JavaScript implementations of Fourier transform
  //   (not implemented yet).
  const recognizer = speechCommands.create("BROWSER_FFT");

  // Make sure that the underlying model and metadata are loaded via HTTPS
  // requests.
  await recognizer.ensureModelLoaded();

  // See the array of words that the recognizer is trained to recognize.
  const labels = recognizer.wordLabels();

  // `listen()` takes two arguments:
  // 1. A callback function that is invoked anytime a word is recognized.
  // 2. A configuration object with adjustable fields such a
  //    - includeSpectrogram
  //    - probabilityThreshold
  //    - includeEmbedding
  recognizer.listen(
    result => {
      let i = result.scores.indexOf(Math.max(...result.scores));

      if (Math.max(...result.scores) > 0.95) {
        console.log(result.spectrogram);
        this.setState({ text: labels[i] });
      } else {
        this.setState({ text: this.state.text });
      }
      // - result.scores contains the probability scores that correspond to
      //   recognizer.wordLabels().
      // - result.spectrogram contains the spectrogram of the recognized word.
    },
    {
      includeSpectrogram: true,
      probabilityThreshold: 0.75
    }
  );

  // Stop the recognition in 10 seconds.
  // setTimeout(() => recognizer.stopListening(), 10e3);
}
