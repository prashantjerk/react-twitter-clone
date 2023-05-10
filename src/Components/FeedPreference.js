import React from "react";
import "./FeedPreference.css";
import Button from "@material-ui/core/Button";

function FeedPreference({ selected, text }) {
  return (
    <div className={`each_preference_option ${selected && "preferred_chosen"}`}>
      <Button variant="text">
        {text}
      </Button>
    </div>
  );
}

export default FeedPreference;
