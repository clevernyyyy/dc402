import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

import NavLink from "../components/NavLink/NavLink";
import ComponentLink from "../components/ComponentLink/ComponentLink";
import { TYPES } from "../components/Icon/Icon";

import "./index.css";

export default class MainLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "tags/") {
      title = "Tags";
    } else if (currentPath === "categories/") {
      title = "Categories";
    } else if (currentPath === "about/") {
      title = "About";
    } else if (currentPath.includes("posts")) {
      title = "Article";
    } else if (currentPath.includes("tags/")) {
      const tag = currentPath
        .replace("tags/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.includes("categories/")) {
      const category = currentPath
        .replace("categories/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(category)}`;
    }
    return title;
  }
  render() {
    const { children } = this.props;
    return (
      <div className="app">
        <div className="headerRow">
          <div className="logoRow">
            <div className="ReactContainer">
              <div className="PrimaryLogoText">defc<div className="jollyRoger"></div>n</div>
              <div className="SecondaryLogoText">402</div>
            </div>

            <ul className="NavList">
              <NavLink to="/AboutUs" iconType={TYPES.ABOUTUS}>
                About Us
              </NavLink>
              <NavLink to="/FAQ" iconType={TYPES.FAQ}>
                FAQ
              </NavLink>
              <NavLink to="/ContactUs" iconType={TYPES.CONTACTUS}>
                Contact Us
              </NavLink>
              <NavLink href="https://github.com/DEFCON402/DEFCON402.github.io"
                iconType={TYPES.SOURCE}>
                Source
              </NavLink>
            </ul>
          </div>

          <div className="HighOrderComponentList">
            <ComponentLink to="/">
              Home
            </ComponentLink>
            <ComponentLink to="/Schedule">
              Upcoming Schedule
            </ComponentLink>
            <ComponentLink to="/Connect">
              Connect
            </ComponentLink>
          </div>
        </div>


        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children()}
      </div>
    );
  }
}
