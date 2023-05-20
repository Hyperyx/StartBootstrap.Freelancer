import { Component, ReactNode } from "react";
import MastFireflyProps from "./masthead.props";
import React from "react";

class Masthead extends Component<MastFireflyProps> {
  constructor(props: MastFireflyProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <img
            className="masthead-avatar mb-5"
            src={this.props?.content?.avatar?.value}
            alt="..."
          />
          <h1
            className="masthead-heading text-uppercase mb-0"
            data-field-key={
              this.props.editMode ? this.props.content?.title?.key : null
            }
            dangerouslySetInnerHTML={{
              __html: this.props.content?.title?.value ?? "",
            }}
          ></h1>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <p className="masthead-subheading font-weight-light mb-0">
            {this.props.content?.professions?.map((profession, i) => (
              <span key={i}>
                <span
                  data-field-key={
                    this.props.editMode ? profession?.title?.key : null
                  }
                  dangerouslySetInnerHTML={{
                    __html: profession?.title?.value ?? "",
                  }}
                ></span>
                {i + 1 < this.props.content!.professions!.length ? (
                  <span> - </span>
                ) : null}
              </span>
            ))}
          </p>
        </div>
      </header>
    );
  }
}

export default Masthead;
