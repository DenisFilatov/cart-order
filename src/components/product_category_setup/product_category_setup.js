import React, { Component } from "react";
import SelectBox from "../common_components/select_box";
import InputBox from "../common_components/input_box";
import "./product_category_setup.scss";

export default class ProductCategorySetup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderForm() {
    const options = ["Category 1", "Category 2", "Category 3"].map((i) => ({ label: i, value: i }));
    return (
      <div className="co-pcs-form">
        <div className="co-pcs-selectbox_wrapper">
          <SelectBox options={options} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="co-pcs-main_component">
        <div className="co-pcs-header">Product Category Setup</div>
        {this.renderForm()}
      </div>
    );
  }
}

ProductCategorySetup.defaultProps = {};
ProductCategorySetup.propTypes = {};
