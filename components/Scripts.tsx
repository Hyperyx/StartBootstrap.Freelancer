import Script from "next/script";
import React from "react";

function Scripts() {
  return (
    <>
      <Script src="{{ basePath }}/assets/js/fontawesome.js" />
      <Script src="{{ basePath }}/assets/js/bootstrap.bundle.min.js" />
    </>
  );
}
export default Scripts;
