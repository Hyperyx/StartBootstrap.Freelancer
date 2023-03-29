import React, { Component, ReactNode } from "react";
import Content from "../models/content.model";

class About extends Component<Content> {
  constructor(props: Content) {
    super(props);
  }
  onClick = (e: any) => {
    if (this.props.editMode) {
      e.preventDefault();
    }
  };
  render(): ReactNode {
    return (
      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          <h2
            className="page-section-heading text-center text-uppercase text-white"
            data-field-key={
              this.props.editMode ? this.props.about?.title?.key : null
            }
            dangerouslySetInnerHTML={{
              __html: this.props.about?.title?.value ?? "",
            }}
          ></h2>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row">
            {this.props.about?.columns?.map((column, i) => (
              <div
                key={i}
                className={"col-lg-4 " + (i === 0 ? "ms-auto" : "me-auto")}
              >
                <div
                  key={i}
                  className="lead"
                  data-field-key={
                    this.props.editMode ? column?.text?.key : null
                  }
                  dangerouslySetInnerHTML={{
                    __html: column?.text?.value ?? "",
                  }}
                ></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <a
              className="btn btn-xl btn-outline-light"
              href={void 0}
              onClick={this.onClick}
            >
              <i className="fas fa-comment me-2"></i>
              <span
                data-field-key={this.props.about?.callToAction?.key}
                dangerouslySetInnerHTML={{
                  __html: this.props.about?.callToAction?.value ?? "",
                }}
              ></span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
export default About;
