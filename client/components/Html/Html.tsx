import * as React from 'react';

const Html: React.FC = (props): JSX.Element => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <title>React Repositories Task</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="/static/client.css"/>
    </head>
    <body>
      <div id="root">{props.children}</div>
      <script type="text/javascript" src="/static/client.js"></script>
    </body>
  </html>
);

export default Html;
