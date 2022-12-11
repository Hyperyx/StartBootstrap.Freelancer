import Head from "next/head";
import React from "react";
import Content from "../models/content.model";

function Meta(props: Content) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <title>{props.meta?.title?.value}</title>
    </Head>
  );
}
export default Meta;
