import React from 'react';
import { Layout } from './layout/Layout.js';

function Home() {
  return (
    <Layout>
      <div className="text-block">
        <ul>
          <li className="computer">Staff Engineer at <a href="https://slack.com/careers">Slack Technologies, Inc.</a></li>
          <li className="book">Author of <a href="https://smile.amazon.com/Refactoring-Scale-Regaining-Control-Codebase/dp/1492075531">Refactoring at Scale</a></li>
          <li className="bread">Baking enthusiast</li>
        </ul>
      </div>
    </Layout>
  );
}

export default Home;
