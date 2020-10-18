import React from 'react';
import book from './assets/book.jpeg';
import { Layout } from './layout/Layout.js';

function Book() {
  return (
    <Layout>
      <div className="text-block-left small">
        <h3 className="bookTitle">Refactoring at Scale</h3>
        <div className="subtitle">October 2020</div>
        <img className="bookImage" src={book} alt="Refactoring at Scale"/>
        <p><span role="img" aria-label="books">📚</span> Click <a className="inlineLink" href="https://www.oreilly.com/library/view/refactoring-at-scale/9781492075523/">here</a> to buy at O'Reilly.</p>
        <p>
        While there are a number of books about refactoring, most of them deal with the nitty-gritty of improving small bits of code one line at a time. I believe that the most difficult part of a refactor is usually not finding the precise way to improve the code at hand, but rather everything else that needs to happen around it. In fact, I might also go so far as to say that for any large software project, the little things rarely matter; coordinating complex changes is the biggest challenge of all.
        </p>
        <p>
        <em>Refactoring at Scale</em> is my attempt at helping you figure out those difficult pieces. It’s the culmination of many years of experience carrying out all sorts of refactoring projects of various scales. During my time at Slack, many of the projects I’ve led have allowed the company to scale dramatically; our product has gone from being able to support customers with 25,000 employees to those with a whopping 500,000.
        </p>
        <p>
        The strategies we developed to refactor effectively needed to tolerate explosive organizational growth, with our engineering team growing nearly sixfold during the same period. Successfully planning and executing on a project that affects both a significant portion of your codebase and an increasing number of engineers is no small feat.
        </p>
        <p>
        I hope this book gives you the tools and resources you need to do just that!
        </p>
      </div>
    </Layout>
  );
}

export default Book;
