import React from 'react';
import './App.css';

import Ribbon from './components/Ribbon';
import ExtraItem from './components/ExtraItem';
import StepCard from './components/StepCard';

import Avatar from './assets/avatar.png';
import Background from './assets/background.png';
import Pattern from './assets/pattern.svg';
import Background1 from './assets/back1.png';
import Background2 from './assets/back2.png';
import Background3 from './assets/back3.png';
import Background4 from './assets/back4.png';
import Background5 from './assets/back5.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <span className="back">Back</span>
        </div>
      </header>
      <main>
        <div className="container learning-path">
          <div className="path-panel">
            <div className="info-panel">
              <div className="author-info">
                <div className="author-avatar">
                  <img src={Avatar} alt="Avatar" />
                  <div className="information">
                    <span>Curated by</span>
                    <span>Dave Crenshaw</span>
                  </div>
                </div>
                <Ribbon text="LEARNING PATH" customStyle={{
                  background: '#E7F9F7',
                  borderRadius: '2px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  lineHeight: '18px',
                  color: '#29A399',
                  height: 'fit-content',
                }} />
              </div>
              <h1 className="title">
                The most valuable skill of the 21st century: Deep Work
              </h1>
              <h3 className="subtitle">
                Learn the productivity secrets of Bill Gates, J.K.Rowling, and Elon Musk.
              </h3>
              <div className="description">
                <p>Do you find yourself easily distracted, bouncing from one task to another, and achieving less than you wish you would? You should try deep work. Coined by computer scientist Cal Newport in his 2016 book of the same name, deep work is a way of working that teaches you to secure intense focus on a task over a long period of time.</p>
                <p>In this learning path, you’ll learn why deep work works so well, the skills needed to master it, and you’ll even set up your own deep work routine.</p>
                <p>Once you complete this path, you’ll double or even triple your ability to produce high quality work. Highly recommended for every 21st century professional.</p>
              </div>
              <div className="extra-info">
                <h2>Start this path if:</h2>
                <ExtraItem text="You aren`t sure that you`re focusing on the right tasks" />
                <ExtraItem text="You`re easily distracted while working" />
                <ExtraItem text="You feel like your work isn`t progressing fast enough" />
              </div>
            </div>
          </div>
        </div>
        <img className="background" src={Background} alt="background" />
        <div className="container goal-steps">
          <div className="step-container first">
            <div className="step-title">
              <div className="title-icon">
                <span>goal</span>
                <span>1</span>
                <img src={Pattern} alt="pattern" />
              </div>
              <h2>Introduction to Deep Work</h2>
            </div>
            <StepCard title="Name..." description="Are you ready to start your own deep work routine? This article explains everything you need to know.  If you use every technique in this article, you will double or even triple the amount of high..." background={Background1} />
            <StepCard title="Name..." description="Are you ready to start your own deep work routine? This article explains everything you need to know.  If you use every technique in this article, you will double or even triple the amount of high..." background={Background2} />
          </div>
          <div className="step-container">
            <div className="step-title">
              <div className="title-icon">
                <span>goal</span>
                <span>2</span>
                <img src={Pattern} alt="pattern" />
              </div>
              <h2>Learn about Deep Work from the person who wrote the book on it</h2>
            </div>
            <StepCard title="Name..." description="Are you ready to start your own deep work routine? This article explains everything you need to know.  If you use every technique in this article, you will double or even triple the amount of high..." background={Background3} />
          </div>
          <div className="step-container">
            <div className="step-title">
              <div className="title-icon">
                <span>goal</span>
                <span>3</span>
                <img src={Pattern} alt="pattern" />
              </div>
              <h2>Start a Deep Work routine for yourself</h2>
            </div>
            <StepCard title="Name..." description="Are you ready to start your own deep work routine? This article explains everything you need to know.  If you use every technique in this article, you will double or even triple the amount of high..." background={Background4} />
          </div>
          <div className="step-container last">
            <div className="step-title">
              <div className="title-icon">
                <span>goal</span>
                <span>4</span>
                <img src={Pattern} alt="pattern" />
              </div>
              <h2>Start a Deep Work routine for yourself</h2>
            </div>
            <StepCard title="Name..." description="Are you ready to start your own deep work routine? This article explains everything you need to know.  If you use every technique in this article, you will double or even triple the amount of high..." background={Background5} />
            <div className="border-element" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
