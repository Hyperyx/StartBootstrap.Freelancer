import React, { Component, ReactNode } from "react";
import Content from "../models/content.model";

class Masthead extends Component<Content> {
  constructor(props: Content) {
    super(props);
  }

  render(): ReactNode {
    return (
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <img
            className="masthead-avatar mb-5"
            src="$transform-base()/assets/img/avataaars.svg"
            alt="..."
          />
          <h1
            className="masthead-heading text-uppercase mb-0"
            data-field-key={
              this.props.editMode ? this.props.mast?.title?.key : null
            }
            dangerouslySetInnerHTML={{
              __html: this.props.mast?.title?.value ?? "",
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
            {this.props.mast?.professions?.map((profession, i) => (
              <>
                <span
                  data-field-key={
                    this.props.editMode ? profession?.title?.key : null
                  }
                  dangerouslySetInnerHTML={{
                    __html: profession?.title?.value ?? "",
                  }}
                ></span>
                {i + 1 < this.props.mast!.professions!.length ? (
                  <span> - </span>
                ) : null}
              </>
            ))}
          </p>
        </div>
      </header>
    );
  }
}

export default Masthead;
