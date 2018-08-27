import React, { Component } from "react";
import { connect } from "react-redux";
import { getPics } from "./PicApp.actions";
import "./PicApp.css";
import Header from "../../components/Header";
import CircularProgress from "@material-ui/core/CircularProgress";

class PicApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getPics();
  }
  render() {
    const randomNumber = [];
    for (let i = 0; i < 10; i++) {
      randomNumber.push(Math.floor(Math.random() * 5000) + 1);
    }
    return (
      <div style={{ width: "100%" }}>
        <Header refresh={this.props.getPics} />
        {this.props.isFetching &&
          !this.props.isError && (
            <CircularProgress style={{ textAlign: "center" }} />
          )}
        {!this.props.isFetching &&
          !this.props.isError && (
            <div className="container">
              {randomNumber.map(id => {
                let image = this.props.images[id];
                return (
                  <img
                    className="image-item"
                    key={image.id}
                    src={image.thumbnailUrl}
                    alt={image.title}
                  />
                );
              })}
            </div>
          )}
        {this.props.isError && <h1>Error</h1>}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isFetching: state.picApp.isFetching,
    isError: state.picApp.isError,
    images: state.picApp.photos.entities.images,
    imageArray: state.picApp.photos.result
  };
};
export default connect(
  mapStateToProps,
  { getPics }
)(PicApp);
