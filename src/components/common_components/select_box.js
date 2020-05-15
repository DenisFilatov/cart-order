import React, { Component } from "react";
import PropTypes from "prop-types";
import "./common_components.scss";

export default class SelectBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderOptions() {
    return this.props.options.map((item, index) => (
      <option key={index} value={item.value}>
        {item.label}
      </option>
    ));
  }

  render() {
    const { value, placeholder, name, onChange } = this.props;
    return (
      <div className="co-sb-main_container">
        <select value={value} name={name} onChange={(e) => onChange(e.target.value)}>
          <option value={undefined} hidden>
            {placeholder}
          </option>
          {this.renderOptions()}
        </select>
      </div>
    );
  }
}

SelectBox.defaultProps = {
  value: undefined,
  options: [],
  placeholder: "Select something...",
  onChange: () => console.log("On Change Select"),
};
SelectBox.propTypes = {
  value: PropTypes.any,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    })
  ),
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};
