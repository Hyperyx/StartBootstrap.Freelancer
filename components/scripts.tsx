import Script from "next/script";
import React from "react";

function Scripts() {
  return (
    <>
      <Script src="/assets/js/fontawesome.js" />
      <Script src="/assets/js/bootstrap.bundle.min.js" />
      <Script src="/assets/js/purify.min.js" />
      <Script src="/assets/js/fast-json-patch.min.js" />
      <Script src="/assets/js/edit.js" />
    </>
  );
}
export default Scripts;
