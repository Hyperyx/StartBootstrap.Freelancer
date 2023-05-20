import { Component, ReactNode } from "react";
import NavigationFireflyProps from "./navigation.props";
import Link from "next/link";
import React from "react";

class Navigation extends Component<NavigationFireflyProps> {
  constructor(props: NavigationFireflyProps) {
    super(props);
  }
  componentDidMount() {
    if (!this.props.editMode) {
      window.addEventListener("scroll", this.navbarShrink);
    }
  }
  navbarShrink() {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  }
  onClick = (e: any) => {
    if (this.props.editMode) {
      e.preventDefault();
    }
  };
  render(): ReactNode {
    return (
      <>
        <nav
          style={this.props.editMode ? { position: "inherit" } : {}}
          className={
            "navbar navbar-expand-lg bg-secondary text-uppercase" +
            (this.props.editMode ? "" : " fixed-top")
          }
          id="mainNav"
        >
          <div className="container">
            <a
              className="navbar-brand"
              href="#page-top"
              onClick={this.onClick}
              data-field-key={
                this.props.editMode ? this.props.content?.title?.key : null
              }
              dangerouslySetInnerHTML={{
                __html: this.props.content?.title?.value ?? "",
              }}
            ></a>
            <button
              className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
              type="button"
              data-bs-toggle={this.props.editMode ? null : "collapse"}
              data-bs-target={this.props.editMode ? null : "#navbarResponsive"}
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                data-field-key={
                  this.props.editMode
                    ? this.props.content?.menu?.title?.key
                    : null
                }
                dangerouslySetInnerHTML={{
                  __html: this.props.content?.menu?.title?.value ?? "",
                }}
              ></span>
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                {this.props.content?.menu?.items?.map((menuItem, i) => (
                  <li className="nav-item mx-0 mx-lg-1" key={i}>
                    <a></a>
                    <Link
                      className="nav-link py-3 px-0 px-lg-3 rounded"
                      href={menuItem?.url?.value ?? ""}
                      data-field-key={menuItem?.title?.key}
                      dangerouslySetInnerHTML={{
                        __html: menuItem?.title?.value ?? "",
                      }}
                    ></Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default Navigation;
