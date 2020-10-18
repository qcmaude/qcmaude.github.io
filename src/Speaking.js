import React from 'react';
import { Layout } from './layout/Layout.js';

function Speaking() {
  return (
    <Layout>
      <div className="text-block-left small">
        <p>
          <span role="img" aria-label="megaphone">📣</span> I've spoken at a number of different conferences and events over the last few years, including:
        </p>
        <ul className="speaking">
          <li><a className="inlineLink" href="https://www.thestrangeloop.com/2019/better-integration-tests-for-performance-monitoring.html">Strange Loop</a> in St. Louis, MO (September 2019)</li>
          <li><a className="inlineLink" href="https://www.youtube.com/watch?v=34tLTZgvOxM&list=PLBzScQzZ83I8aBUZtZXNWZkWKEgWRffH6&index=12&t=0s&app=desktop">Lead Dev</a> in Austin, TX (December 2018)</li>
          <li><a className="inlineLink" href="https://conferences.oreilly.com/velocity/vl-ny/public/schedule/speaker/305220.html">O'Reilly Velocity Conf</a> in New York, NY (October 2018)</li>
          <li><a className="inlineLink" href="https://www.youtube.com/watch?v=mjK2ivi3_34">Women Techmakers Montreal</a> in Montréal, QC (March 2018)</li>
          <li><a className="inlineLink" href="https://www.youtube.com/watch?v=7_zTFWcXX5k">PHP World</a> in Washington, D.C. (November 2017)</li>
          <li><a className="inlineLink" href="https://slideslive.com/38902625/say-yes-to-premature-optimizations?locale=en">Web Expo</a> in Prague, CZ (September 2017)</li>
        </ul>
      </div>
    </Layout>
  );
}

export default Speaking;
