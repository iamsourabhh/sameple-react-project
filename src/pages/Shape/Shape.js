import React, { Component } from "react";
import BottomNavigation from "./BottomNavigation/BottomNavigation";
import { connect } from "react-redux";
import "./Shape.css";
import { saveAs } from "file-saver/FileSaver";

import Header from "../../components/Header";
import Figures from "./Figures/Figures";
import {
  updateShape,
  changeShape,
  changeColor,
  changeProject,
  undo,
  redo
} from "./Shape.action";
import ShapeForm from "./ShapeForm/ShapeForm";

class Shape extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSaveProject = () => {
    var blob = new Blob([JSON.stringify(this.props)], {
      type: "application/json;charset=utf-8"
    });
    saveAs(blob, `${this.props.activeProject}.txt`);
  };
  onUndoClick = () => {
    this.props.undo();
  };
  onRedoClick = () => {
    this.props.redo();
  };
  onChangeColor = event => {
    this.props.changeColor(event.target.value);
  };

  onShapeChange = event => {
    this.props.changeShape(event.target.value);
  };
  onTabChange = (event, value) => {
    this.props.changeProject(value);
  };
  onColorUpdate = () => {
    const { shape, color } = this.props;
    this.props.updateShape(shape, color);
  };
  render() {
    return (
      <div className="shape-container">
        <Header />
        <div className="shape-flex-container">
          <ShapeForm
            color={this.props.color}
            shape={this.props.shape}
            onShapeChange={this.onShapeChange}
            onChangeColor={this.onChangeColor}
            onColorUpdate={this.onColorUpdate}
            onUndoClick={this.onUndoClick}
            onRedoClick={this.onRedoClick}
          />
          <div className="figure-form">
            <Figures
              shape={this.props.shape}
              color={this.props.color}
              previousProjectState={this.props.previousProjectState}
              onSaveProject={this.onSaveProject}
            />
          </div>
        </div>
        <BottomNavigation
          activeProject={this.props.activeProject}
          onTabChange={this.onTabChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const activeProjectState =
    state.shapeApp.projectState[state.shapeApp.activeProject];
  return {
    activeProject: state.shapeApp.activeProject,
    color: activeProjectState === undefined ? "" : activeProjectState.color,
    shape: activeProjectState === undefined ? "" : activeProjectState.shape,
    previousProjectState: state.shapeApp.undoStack[state.shapeApp.activeProject]
  };
};
export default connect(
  mapStateToProps,
  { updateShape, changeShape, changeColor, changeProject, undo, redo }
)(Shape);
