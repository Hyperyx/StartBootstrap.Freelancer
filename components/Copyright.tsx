import React, { Component, ReactNode } from "react";
import Content from "../models/content.model";

class Copyright extends Component<Content> {
  constructor(props: Content) {
    super(props);
  }
  render(): ReactNode {
    return (
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small
            data-field-key={
              this.props.editMode ? this.props.copyright?.title?.key : null
            }
            dangerouslySetInnerHTML={{
              __html: this.props.copyright?.title?.value ?? "",
            }}
          ></small>
        </div>
      </div>
    );
  }
}
export default Copyright;
