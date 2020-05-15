import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./header.scss";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_open_profile: false,
    };
  }

  renderStoreName() {
    const { store_name } = this.props;
    if (!store_name) return undefined;
    const short_name = `${store_name}`
      .split(" ")
      .reduce((acc, cur) => `${acc}${cur[0]}`, "")
      .toUpperCase();
    return (
      <div className="co-h-store_name">
        <div className="co-h-short_store_name">{short_name}</div>
        <div className="co-h-full_store_name">{store_name}</div>
      </div>
    );
  }

  renderUser() {
    const { notifications, user } = this.props;
    const { is_open_profile } = this.state;
    if (!user) return undefined;
    const handleOnClickNotifications = () => console.log("Notifications");
    const handleOnClickUser = () => {
      this.setState((prevState) => ({ is_open_profile: !prevState.is_open_profile }));
    };
    return (
      <div className="co-h-user">
        <div
          className={classNames({
            "co-h-notifications": true,
            "co-h-notifications_indicator": notifications.length,
          })}
          onClick={handleOnClickNotifications}
        >
          <img src="images/header/notifications_icon.svg" alt="notifications_icon" />
        </div>
        <div className="co-h-vertical_line" />
        <div className="co-h-user_block" onClick={handleOnClickUser}>
          <div
            className={classNames({
              "co-h-user_name": true,
              "co-h-up_arrow": is_open_profile,
              "co-h-down_arrow": !is_open_profile,
            })}
          >
            {user.name}
          </div>
          <img className="co-h-user_avatar" src={user.avatar_src} alt="avatar" />
        </div>
      </div>
    );
  }

  render() {
    return (
      <section className="co-h-main_component">
        {this.renderStoreName()}
        {this.renderUser()}
      </section>
    );
  }
}

Header.defaultProps = {
  notifications: [],
};
Header.propTypes = {
  store_name: PropTypes.string,
  notifications: PropTypes.arrayOf(PropTypes.string),
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar_src: PropTypes.string,
  }),
};
