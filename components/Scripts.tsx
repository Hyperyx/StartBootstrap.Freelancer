import Script from "next/script";
import React from "react";

function Scripts() {
  return (
    <>
      <Script src="$transform-base()/assets/js/fontawesome.js" />
      <Script src="$transform-base()/assets/js/bootstrap.bundle.min.js" />
    </>
  );
}
export default Scripts;
