import { Component, ReactNode } from "react";
import CopyrightFireflyProps from "./copyright.props";
import React from "react";

class Copyright extends Component<CopyrightFireflyProps> {
  constructor(props: CopyrightFireflyProps) {
    super(props);
  }
  render(): ReactNode {
    return (
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small
            data-field-key={
              this.props.editMode ? this.props.content?.title?.key : null
            }
            dangerouslySetInnerHTML={{
              __html: this.props.content?.title?.value ?? "",
            }}
          ></small>
        </div>
      </div>
    );
  }
}
export default Copyright;
