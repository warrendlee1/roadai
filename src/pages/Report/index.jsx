// Libraries
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import MicRecorder from "mic-recorder-to-mp3";
import { ReactMic } from "react-mic";

// Files
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import "./index.css";
import MicIcon from "../../assets/Icons/MicIcon";

// Functions
import { POST } from "../../client/http-functions";

const Report = (props) => {
  // Variables
  const { content } = props;
  const navigate = useNavigate();
  // const Mp3Recorder = new MicRecorder({ bitRate: 128 });

  // State
  const [selectedLabels, setSelectedLabels] = useState([]);
  const [isValidSubmission, setIsValidSubmission] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [audioIsRecording, setAudioIsRecording] = useState(false);
  // const [audioBlobURL, setAudioBlobURL] = useState("");
  // const [audioBlocked, setAudioBlocked] = useState(false);

  // const startAudioRecording = () => {
  //   if (audioBlocked) {
  //     console.log("Permission Denied");
  //   } else {
  //     Mp3Recorder.start()
  //       .then(() => {
  //         setAudioIsRecording(true);
  //       })
  //       .catch((e) => console.error(e));
  //   }
  // };

  // const stopAudioRecording = () => {
  //   Mp3Recorder.stop()
  //     .getMp3()
  //     .then(([buffer, blob]) => {
  //       const blobURL = URL.createObjectURL(blob);
  //       setAudioBlobURL(blobURL);
  //       setAudioIsRecording(false);
  //     })
  //     .catch((e) => console.log(e));
  // };

  // const handleRecording = () => {
  //   handleSelect("other");
  //   if (audioIsRecording) {
  //     console.log("hi");
  //     stopAudioRecording();
  //   } else {
  //     navigator.getUserMedia(
  //       { audio: true },
  //       () => {
  //         console.log("Permission Granted");
  //         setAudioBlocked(false);
  //       },
  //       () => {
  //         console.log("Permission Denied");
  //         setAudioBlocked(true);
  //       }
  //     );
  //     startAudioRecording();
  //   }
  // };

  const startRecording = () => {
    setAudioIsRecording(true);
  };

  const stopRecording = () => {
    setAudioIsRecording(false);
  };

  const handleRecording = () => {
    handleSelect("other");
    if (audioIsRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
  };

  const onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
  };

  const handleSelect = (item) => {
    if (selectedLabels.includes(item)) {
      setSelectedLabels(
        selectedLabels.filter(function (e) {
          return e !== item;
        })
      );
      setIsValidSubmission(false);
    } else {
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
            selectedLabels.includes("other")
              ? "report-label-other report-label"
              : "report-label"
          }
          onClick={handleRecording}
          // disabled={audioIsRecording}
          key="Other"
        >
          <p style={{ margin: "0px" }}>Other</p>
          <div className="report-icon-container">
            <MicIcon className="report-icon" />
            <ReactMic
              record={audioIsRecording}
              className="report-react-mic"
              onStop={onStop}
              onData={onData}
              strokeColor="#000000"
              backgroundColor="#FF4081"
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
