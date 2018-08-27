import React, { Component } from "react";
import { Button } from "@material-ui/core";

class Figures extends Component {
  render() {
    const { shape, color, previousProjectState } = this.props;

    let ShapeToRender;
    switch (shape) {
      case "circle":
        ShapeToRender = Circle;
        break;
      case "square":
        ShapeToRender = Square;
        break;
      default:
        return <div />;
    }
    return (
      <div>
        <ShapeToRender color={color} />
        <div style={{ marginTop: 20 }}>
          <PreviousColors previousColors={previousProjectState} />
        </div>
        <Button
          onClick={this.props.onSaveProject}
          style={{ margin: 5 }}
          variant="contained"
          color="secondary"
        >
          Save State
        </Button>
        <Button style={{ margin: 5 }} variant="contained" color="secondary">
          Load State
        </Button>
      </div>
    );
  }
}

export default Figures;

const Circle = ({ color }) => {
  return (
    <React.Fragment>
      <div
        style={{
          height: 150,
          width: 150,
          borderRadius: "50%",
          backgroundColor: color
        }}
      />
    </React.Fragment>
  );
};

const Square = ({ color }) => {
  console.log("color", color);
  return (
    <div
      style={{
        height: 150,
        width: 150,
        backgroundColor: color
      }}
    />
  );
};

const PreviousColors = ({ previousColors }) => {
  let lastThreeColors;
  if (previousColors.length > 3) {
    lastThreeColors = previousColors.slice(
      previousColors.length - 3,
      previousColors.length
    );
  } else {
    lastThreeColors = previousColors;
  }

  return lastThreeColors.map(({ color }) => {
    return (
      <div
        style={{
          width: 20,
          height: 20,
          backgroundColor: color,
          display: "inline-block",
          marginLeft: 10
        }}
      />
    );
  });
};
