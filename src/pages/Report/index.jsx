// Libraries
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { ReactMic } from "react-mic";

// Files
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import MicIcon from "../../assets/Icons/MicIcon";
import "./index.css";

// Functions
import { POST } from "../../client/http-functions";

const Report = (props) => {
  // Variables
  const { content } = props;
  const navigate = useNavigate();

  // State
  const [selectedLabels, setSelectedLabels] = useState([]);
  const [isValidSubmission, setIsValidSubmission] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [audioIsRecording, setAudioIsRecording] = useState(false);
  const [audioBlobURL, setAudioBlobURL] = useState("");
  // const [audioFile, setAudioFile] = useState(null);
  // const [audio, setAudio] = useState(null);

  const startRecording = () => {
    setAudioIsRecording(true);
  };

  const stopRecording = () => {
    setAudioIsRecording(false);
  };

  // const onData = (data) => {
  //   console.log(data);
  // };

  // const onStop = (blob) => {
  //   // let formData = new FormData(blob);
  //   // let blobWithProp = new Blob([blob["blob"]], blob["options"]);
  //   // formData.append("file", blobWithProp);
  //   // setAudioFile(formData);
  //   setAudioBlobURL(blob);
  // };

  const handleSelect = (item) => {
    if (audioIsRecording) {
      stopRecording();
    } else if (selectedLabels.includes(item)) {
      setSelectedLabels(
        selectedLabels.filter(function (e) {
          return e !== item;
        })
      );
    } else {
      if (item === "other") {
        startRecording();
      }
      setSelectedLabels([...selectedLabels, item]);
      setIsValidSubmission(true);
    }
  };

  const postLocation = async () => {
    setShowLoading(true);
    return new Promise(() => {
      navigator.geolocation.getCurrentPosition(
        // success
        async (pos) => {
          const coordinates = pos.coords;
          await POST({
            obstructions: selectedLabels,
            data: { audio: audioBlobURL },
            location: {
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
              accuracy: coordinates.accuracy,
            },
          });
          setShowLoading(false);
          navigate("/confirmation");
        },
        // error
        () => console.error("GEOLOCATION not supported"),
        // options
        {
          enableHighAccuracy: true,
          timeout: 60000,
          maximumAge: 0,
        }
      );
    });
  };

  const submit = (e) => {
    e.preventDefault();
    if (!audioIsRecording) {
      if (isValidSubmission) {
        postLocation();
      } else {
        alert("Incomplete Form");
      }
    }
  };

  const cancel = (e) => {
    e.preventDefault();
    if (!audioIsRecording) {
      navigate("/", { replace: true });
    }
  };

  return showLoading ? (
    <Loading />
  ) : (
    <div className="report-root">
      <Header title={content["header-title"]} />
      <div className="report-body">
        {content["label-options"].map((label) => (
          <button
            className={
              selectedLabels.includes(label)
                ? "report-label report-label-active"
                : "report-label"
            }
            onClick={() => handleSelect(label)}
            disabled={audioIsRecording}
            key={label}
          >
            <p style={{ margin: "0px" }}>{label}</p>
          </button>
        ))}
        <button
          className={
            audioIsRecording
              ? "report-label-other report-label"
              : selectedLabels.includes("other")
              ? "report-label-active report-label"
              : "report-label"
          }
          onClick={() => handleSelect("other")}
          key="Other"
        >
          <p style={{ margin: "0px" }}>Other</p>
          {/* <ReactMic
            record={audioIsRecording}
            className={
              audioIsRecording ? "report-react-mic-active" : "report-react-mic"
            }
            onStop={onStop}
            // onData={onData}
            mimeType="audio/mp3"
            strokeColor="#3e3aff"
            backgroundColor="white"
            visualSetting="frequencyBars"
          /> */}
          <div className="report-icon-container">
            <MicIcon
              className={
                audioIsRecording
                  ? "report-icon-pressed"
                  : selectedLabels.includes("other")
                  ? "report-icon-active"
                  : "report-icon"
              }
            />
          </div>
        </button>
      </div>
      <div className="report-footer">
        <Link
          className={
            audioIsRecording
              ? "report-secondary-button report-button-disabled"
              : "report-secondary-button"
          }
          onClick={cancel}
        >
          {content["cancel-button"]}
        </Link>
        <Link
          className={
            audioIsRecording
              ? "report-primary-button report-button-disabled"
              : "report-primary-button"
          }
          onClick={submit}
        >
          {content["submit-button"]}
        </Link>
      </div>
    </div>
  );
};

export default Report;
