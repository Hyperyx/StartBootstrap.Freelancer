import { Component, ReactNode } from "react";
import FooterFireflyProps from "./footer.props";
import React from "react";

class Footer extends Component<FooterFireflyProps> {
  constructor(props: FooterFireflyProps) {
    super(props);
  }
  render(): ReactNode {
    return (
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            {this.props.content!.columns?.map((column, i) => (
              <div
                key={i}
                className={
                  "col-lg-4 " +
                  (i !== this.props.content!.columns!.length - 1
                    ? "mb-5 mb-lg-0"
                    : "")
                }
              >
                <h4
                  className="text-uppercase mb-4"
                  data-field-key={
                    this.props.editMode ? column?.title?.key : null
                  }
                  dangerouslySetInnerHTML={{
                    __html: column?.title?.value ?? "",
                  }}
                ></h4>
                {column?.text ? (
                  <div
                    className="lead mb-0"
                    data-field-key={
                      this.props.editMode ? column?.text?.key : null
                    }
                    dangerouslySetInnerHTML={{
                      __html: column?.text?.value ?? "",
                    }}
                  ></div>
                ) : column?.actions && column?.actions.length > 0 ? (
                  column.actions.map((action, i) => (
                    <a
                      className="btn btn-outline-light btn-social mx-1"
                      href="#!"
                    >
                      <i className={"fab " + action?.social?.value}></i>
                    </a>
                  ))
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
