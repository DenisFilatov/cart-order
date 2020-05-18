import React, { Component } from "react";
import PropTypes from "prop-types";
import "./common_components.scss";

export default class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, onClick } = this.props;
    return (
      <div className="co-cb-button" onClick={onClick}>
        {title}
      </div>
    );
  }
}

CustomButton.defaultProps = {
  title: "Button",
  onClick: () => console.log("On Click Button"),
};
CustomButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};
