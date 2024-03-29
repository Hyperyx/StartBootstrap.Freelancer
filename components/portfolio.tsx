import { Component, ReactNode } from "react";
import PortfolioFireflyProps from "./portfolio.props";
import React from "react";

class Portfolio extends Component<PortfolioFireflyProps> {
  constructor(props: PortfolioFireflyProps) {
    super(props);
  }
  render(): ReactNode {
    return (
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          <h2
            className="page-section-heading text-center text-uppercase text-secondary mb-0"
            data-field-key={
              this.props.editMode ? this.props.content?.title?.key : null
            }
            dangerouslySetInnerHTML={{
              __html: this.props.content?.title?.value ?? "",
            }}
          ></h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row justify-content-center">
            {this.props.content?.gallery?.value?.map((url, i) => (
              <div className="col-md-6 col-lg-4 mb-5" key={i}>
                <div className="portfolio-item mx-auto">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-arrow-up-right-from-square fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={url} alt="..." />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
