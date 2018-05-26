import React from "react";
import { Link } from "react-router";
import RaisedButton from "material-ui/RaisedButton";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import Toggle from "material-ui/Toggle";
import DatePicker from "material-ui/DatePicker";
import { grey400 } from "material-ui/styles/colors";
import Divider from "material-ui/Divider";
import PageBase from "../components/PageBase";

const AddFilePage = () => {
  const styles = {
    buttons: {
      marginTop: 30,
      float: "right"
    },
    saveButton: {
      marginLeft: 5
    },
    button: {
      margin: 12
    },
    exampleImageInput: {
      cursor: "pointer",
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      width: "100%",
      opacity: 0
    }
  };

  return (
    <PageBase title="Add a new file" navigation="Application / Add a File">
      <form>
        <RaisedButton
          label="Choose a File"
          labelPosition="before"
          style={styles.button}
          containerElement="label"
        >
          <input
            type="file"
            accept={`
            application/pdf,application/vnd.ms-powerpoint,
            application/vnd.openxmlformats-officedocument.
            presentationml.slideshow,
            application/vnd.openxmlformats-officedocument
            .presentationml.presentation`}
            style={styles.exampleImageInput}
          />
        </RaisedButton>

        <Divider />

        <div style={styles.buttons}>
          <Link to="/">
            <RaisedButton label="Cancel" />
          </Link>

          <RaisedButton
            label="Save"
            style={styles.saveButton}
            type="submit"
            primary={true}
          />
        </div>
      </form>
    </PageBase>
  );
};

export default AddFilePage;
