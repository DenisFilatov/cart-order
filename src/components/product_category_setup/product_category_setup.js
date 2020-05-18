import React, { Component } from "react";
import CustomSelector from "../common_components/custom_selector";
import CustomInput from "../common_components/custom_input";
import CustomButton from "../common_components/custom_button";
import "./product_category_setup.scss";

export default class ProductCategorySetup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderForm() {
    const categoryOptions = ["Category 1", "Category 2", "Category 3"].map((i) => ({ label: i, value: i }));
    const subcategoryOptions = ["Subcategory 1", "Subcategory 2", "Subcategory 3"].map((i) => ({
      label: i,
      value: i,
    }));
    return (
      <div className="co-pcs-form">
        <div className="co-pcs-form_row">
          <div className="co-pcs-selector_wrapper">
            <CustomSelector options={categoryOptions} placeholder="Category" />
          </div>
          <div className="co-pcs-selector_wrapper">
            <CustomSelector options={subcategoryOptions} placeholder="Sub Category" />
          </div>
        </div>
        <div className="co-pcs-form_row">
          <div className="co-pcs-input_wrapper">
            <CustomInput placeholder="New Category" />
          </div>
        </div>
        <div className="co-pcs-form_row">
          <div className="co-pcs-input_wrapper">
            <CustomInput placeholder="Product Name" />
          </div>
          <div className="co-pcs-menu_block">
            <div className="co-pcs-button_wrapper">
              <CustomButton title="Save" />
            </div>
          </div>
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
