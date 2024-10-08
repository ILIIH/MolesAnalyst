import React, { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";


const AiModelComponent = () => {
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const modelPath = "./path/to/model/model.json";
        tf.loadLayersModel(modelPath).then((model) => {
          console.log("Model loaded successfully >> " + model);
          setModel(model);
        });
        const loadedModel = await tf.loadLayersModel(
          "../assets/ai-models/mole_recognison.weights.h5"
        );
        console.log("Model loaded successfully");
      } catch (error) {
        console.error("Error loading the model:", error);
      }
    };

    loadModel();
  }, []);

  const makePrediction = async (image) => {
    if (model) {
      // Example: make a prediction using dummy data
      const inputTensor = tf.tensor3d([image]); // Adjust the shape and values as per your model input
      const output = model.predict(inputTensor);
      setPrediction(output.dataSync());
    }
  };

  return (
    <div>
      <h1>TensorFlow.js Model</h1>
      <button onClick={makePrediction}>Make Prediction</button>
      {prediction && <p>Prediction: {prediction.toString()}</p>}
    </div>
  );
};

export default AiModelComponent;
