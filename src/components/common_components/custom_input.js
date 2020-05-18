import React, { Component } from "react";
import PropTypes from "prop-types";
import "./common_components.scss";

export default class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, placeholder, name, onChange } = this.props;
    return (
      <div className="co-ci-main_container">
        <input
          value={value}
          placeholder={placeholder}
          name={name}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  }
}

CustomInput.defaultProps = {
  value: undefined,
  placeholder: "Input something...",
  onChange: () => console.log("On Change Select"),
};
CustomInput.propTypes = {
  value: PropTypes.any,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};
