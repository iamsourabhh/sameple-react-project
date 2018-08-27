import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  TextField,
  Button
} from "@material-ui/core";
import "../Shape.css";

const ShapeForm = props => {
  return (
    <div className="shape-form">
      <FormControl>
        <InputLabel htmlFor="age-native-simple">Shape</InputLabel>

        <Select value={props.shape} onChange={props.onShapeChange} native>
          <option value="" />
          <option value={"circle"}>Circle</option>
          <option value={"square"}>Square</option>
        </Select>
      </FormControl>
      <br />
      <TextField
        value={props.color}
        onChange={props.onChangeColor}
        id="color"
        label="color"
        margin="normal"
        placeholder="#125489"
      />
      <br />
      <Button
        style={{ marginTop: 10 }}
        variant="contained"
        color="primary"
        onClick={props.onColorUpdate}
      >
        Update Color
      </Button>
      <br />
      <Button
        style={{ marginTop: 10, marginRight: 10, padding: 15 }}
        variant="contained"
        color="secondary"
        onClick={props.onUndoClick}
      >
        Undo
      </Button>
      <Button
        style={{ marginTop: 10, padding: 15 }}
        variant="contained"
        color="secondary"
        onClick={props.onRedoClick}
      >
        Redo
      </Button>
    </div>
  );
};

export default ShapeForm;
