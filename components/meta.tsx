import Head from "next/head";
import MetaFireflyProps from "./meta.props";
import React from "react";

function Meta(props: MetaFireflyProps) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <title>{props.content?.title?.value}</title>
    </Head>
  );
}
export default Meta;
