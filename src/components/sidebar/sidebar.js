import React, { Component } from "react";
import PropTypes from "prop-types";
import "./sidebar.scss";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderMenuItems() {
    return this.props.menu_items.map((item, index) => (
      <div key={index} className="co-s-menu_item" onClick={item.onClickCallback}>
        <img src={item.image_src} alt={item.title} />
        <p>{item.title}</p>
      </div>
    ));
  }

  render() {
    return (
      <section className="co-s-main_container">
        <div className="co-s-header">{this.props.header_text}</div>
        <div className="co-s-body">{this.renderMenuItems()}</div>
      </section>
    );
  }
}

Sidebar.defaultProps = {
  header_text: "sidebar",
  menu_items: [],
};
Sidebar.propTypes = {
  header_text: PropTypes.string,
  menu_items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image_src: PropTypes.string,
      onClickCallback: PropTypes.func,
    })
  ),
};
