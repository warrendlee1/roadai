const content = {
  Home: {
    "header-title": "Driver Tools",
    "primary-button": "Create Report",
    "footer-text": "by Road AI",
  },
  FAQ: {
    "header-title": "FAQ",
    "body-content": [
      {
        question: "What is RoadAI?",
        answer: "RoadAI is an API for labeled data on hard-to-navigate roads.",
      },
      {
        question: "How does Driver Tools work?",
        answer:
          "Whenever you see a road obstruction or driving conditions that are hard to navigate, press 'Create Report'. Choose from the road obstruction choices, or record a description of the obstruction using the 'Other' selection. When you're done, click 'Submit' and our team will review your submission.",
      },
    ],
  },
  Report: {
    "header-title": "Select Label",
    "label-options": [
      "Pothole",
      "Traffic Sign",
      "Narrow Road",
      "Obstructed Lane",
    ],
    "submit-button": "Submit",
    "cancel-button": "Cancel",
  },
  Loading: {},
  Confirmation: {
    "primary-message": "Thank You!",
    "secondary-message": "Your report is being reviewed.",
    "submit-button": "Done",
  },
};

export default content;
