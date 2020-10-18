import React from 'react';
import { Layout } from './layout/Layout.js';

function About() {
  return (
    <Layout>
      <div className="text-block-left small">
        <p>
          I grew up in St-Nicéphore, QC <span role="img" aria-label="flag-ca">🇨🇦</span>, where I played in the sand pit behind our house with my little brother and wholeheartedly believed everyone in the world spoke French. (After all, why wouldn't everyone in the world speak the same language? <span role="img" aria-label="shrug-woman">🤷🏻‍♀️</span>)
        </p>
        <p>
          Then my dad decided to leave his teaching position and get a job as a programmer just north of Boston. So we moved just across the state line to New Hampshire <span role="img" aria-label="flag-us">🇺🇸</span>.
        </p>
        <p>
          I later returned to Québec to attend university at <a href="www.mcgill.ca">McGill</a>. After a false start studying microbiology, I landed in the School of Computer Science <span role="img" aria-label="woman-computer">👩🏻‍💻</span>. I graduated with a degree in Honours Software Engineering (and a minor in Hispanic Linguistics <span role="img" aria-label="flag-es">🇪🇸</span>).
        </p>
        <p>
          After graduation, I moved to Brooklyn and started worked as a frontend engineer at <a href="www.renttherunway.com">Rent the Runway</a>. A little over year later, I left the Statue of Liberty <span role="img" aria-label="statue-liberty">🗽</span> behind and moved to San Francisco <span role="img" aria-label="golden-gate">🌉</span>.
        </p>
        <p>
        I joined Slack in October 2016 as a backend product engineer. Before I knew it, I was helping our team solve performance problems for our growing customers, knee-deep in refactoring projects.
        </p>
        <p>
          A few years later, I moved to our infrastructure team <span role="img" aria-label="construction">🚧</span>, continuing to refactor, but shifting my focus to building tools for fellow developers. These days, I'm spending time figuring out new ways track potential performance regressions before they hit production. 
        </p>
      </div>
    </Layout>
  );
}

export default About;
