import React from "react";


class HeadComponent extends React.Component {
  render() {
    return (
      <div>
        <title>Widaa Shop</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Widaa Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" 
          rel="stylesheet" 
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" 
          crossOrigin="anonymous"/>
        <link rel="stylesheet" type="text/css" href="/static/styles/main_styles.css" />
        <link rel="stylesheet" type="text/css" href="/static/styles/responsive.css" />
        </div>
    );
  }
}

export default HeadComponent;
