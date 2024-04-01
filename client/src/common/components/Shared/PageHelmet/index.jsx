import React from "react";
import {Helmet} from "react-helmet-async";

const PageHelmet = ({title}) => {
  return (
    <Helmet>
      <title>P M | {title}</title>
      {/* <meta name="description" content="<Page_Description>" /> */}
    </Helmet>
  );
};

export default PageHelmet;
