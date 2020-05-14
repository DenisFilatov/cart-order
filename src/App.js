import React, { Component } from "react";
import Sidebar from "./components/sidebar/sidebar";
import "./App.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderSidebar() {
    const menu_items = [
      {
        title: "Dashboard",
        image_src: "images/sidebar/dashboard_icon.svg",
        onClickCallback: () => console.log("Dashboard"),
      },
      {
        title: "Inventory",
        image_src: "images/sidebar/inventory_icon.svg",
        onClickCallback: () => console.log("Inventory"),
      },
      {
        title: "Open Order",
        image_src: "images/sidebar/openorder_icon.svg",
        onClickCallback: () => console.log("Open Order"),
      },
      {
        title: "Order History",
        image_src: "images/sidebar/orderhistory_icon.svg",
        onClickCallback: () => console.log("Order History"),
      },
    ];
    return (
      <div className="co-app-sidebar_wrapper">
        <Sidebar header_text="cart&order" menu_items={menu_items} />
      </div>
    );
  }

  render() {
    return <div className="co-app-main_component">{this.renderSidebar()}</div>;
  }
}
