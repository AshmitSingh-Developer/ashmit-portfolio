'use client';
import React, { useState, useEffect } from 'react';

const AIPage = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState("The AI's response will appear here.");

  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const onMouseMove = (e) => {
      cursor.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px;`);
    };
    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const handleSubmit = async () => {
    // API call will be handled here
    setResponse('Thinking...');
    // Simulate API call
    setTimeout(() => {
      setResponse(`This is a simulated response to: "${input}"`);
      setInput('');
    }, 2000);
  };

  return (
    <>
      <div className="container">
        <div className="cursor"></div>
        <div className="grain"></div>
        <header>
          <h1>AI Web App</h1>
        </header>
        <main>
          <div className="input-section">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            />
            <button onClick={handleSubmit}>➤</button>
          </div>
          <div className="response-section">
            <p>{response}</p>
          </div>
        </main>
        <footer>
          <p>
            Inspired by{' '}
            <a href="https://www.toukoum.fr/" target="_blank" rel="noopener noreferrer">
              toukoum.fr
            </a>
          </p>
        </footer>
      </div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

        body {
          cursor: none;
        }

        .container {
          background-color: #000;
          color: #fff;
          min-height: 100vh;
          font-family: 'Space Mono', monospace;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .grain {
          position: fixed;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background-image: url('https://www.transparenttextures.com/patterns/stardust.png');
          animation: grain 0.5s steps(1) infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          20% { transform: translate(-15%, 5%); }
          30% { transform: translate(7%, -25%); }
          40% { transform: translate(-5%, 25%); }
          50% { transform: translate(-15%, 10%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 15%); }
          80% { transform: translate(3%, 35%); }
          90% { transform: translate(-10%, 10%); }
        }

        .cursor {
          width: 20px;
          height: 20px;
          border: 2px solid #fff;
          border-radius: 50%;
          position: absolute;
          transition-duration: 200ms;
          transition-timing-function: ease-out;
          pointer-events: none;
          z-index: 999;
          transform: translate(-50%, -50%);
          mix-blend-mode: difference;
        }

        header, main, footer {
          position: relative;
          z-index: 1;
          padding: 2rem;
          text-align: center;
        }

        header h1 {
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-grow: 1;
        }

        .input-section {
          display: flex;
          width: 100%;
          max-width: 600px;
          margin-bottom: 2rem;
        }

        .input-section input {
          flex-grow: 1;
          background: transparent;
          border: 1px solid #fff;
          border-right: none;
          color: #fff;
          padding: 1rem;
          font-size: 1rem;
          font-family: 'Space Mono', monospace;
        }

        .input-section input:focus {
          outline: none;
          border-color: #f0f;
        }

        .input-section button {
          background: #fff;
          border: 1px solid #fff;
          color: #000;
          padding: 1rem;
          font-size: 1.5rem;
          cursor: none;
          transition: all 0.2s ease;
        }

        .input-section button:hover {
          background: #f0f;
          color: #fff;
          border-color: #f0f;
        }

        .response-section {
          width: 100%;
          max-width: 600px;
          min-height: 200px;
          border: 1px solid #555;
          padding: 1.5rem;
          text-align: left;
          background: rgba(255, 255, 255, 0.05);
        }

        footer {
          font-size: 0.8rem;
        }

        footer a {
          color: #f0f;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

export default AIPage;