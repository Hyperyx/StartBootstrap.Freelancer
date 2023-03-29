import { Component, ReactNode } from "react";
import Content from "../models/content.model";

class Portfolio extends Component<Content> {
  constructor(props: Content) {
    super(props);
  }
  render(): ReactNode {
    return (
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          <h2
            className="page-section-heading text-center text-uppercase text-secondary mb-0"
            data-field-key={
              this.props.editMode ? this.props.portfolio?.title?.key : null
            }
            dangerouslySetInnerHTML={{
              __html: this.props.portfolio?.title?.value ?? "",
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
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal1"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-arrow-up-right-from-square fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/cabin.png"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal2"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-arrow-up-right-from-square fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/cake.png"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal3"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-arrow-up-right-from-square fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/circus.png"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal4"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-arrow-up-right-from-square fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/game.png"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal5"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-arrow-up-right-from-square fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/safe.png"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal6"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-arrow-up-right-from-square fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/submarine.png"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
