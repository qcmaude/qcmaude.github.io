import React from 'react';
import { Layout } from './layout/Layout.js';

function Newsletter() {
  return (
    <Layout>
      <div className="text-block-left small">
        <p><span role="img" aria-label="sparkles">✨</span> I'm kicking off something new – a newsletter!</p>
        <p><a className="inlineLink" href="https://buttondown.email/maudethecodetoad">Subscribe to my newsletter</a> to get periodic updates about what's been on my mind (mostly at work).</p>
        <p>Now that my book is out in the wild <span role="img" aria-label="tada">🎉</span>, I'm eager to keep writing but at a different cadence using a different medium. This newsletter will hopefully be a place where I can share some ideas that didn't make it into the final version of the book, more real-life examples of refactoring at scale, and (hopefully!) my thoughts about how to level-up.</p>
      </div>
    </Layout>
  );
}

export default Newsletter;
