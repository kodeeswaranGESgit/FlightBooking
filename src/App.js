import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';
import HoverCount from './Components/HoverCount';
import ParentRef from './Components/ParentRef';
import PortalComp from './Components/Portal';
import Error from './Components/Error';
import ErrorBoundary from './Components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <ParentRef />

        <PostForm />

        <PostList />

        <HoverCount />
        
        <PortalComp />

        {/* <ErrorBoundary>
            <Error heroName="kodee"/>
        </ErrorBoundary>
        <ErrorBoundary>
            <Error heroName="raja"/>
        </ErrorBoundary>
        <ErrorBoundary>
            <Error heroName="jegan"/>
        </ErrorBoundary> */}

        {/* <ErrorBoundary>
            <Error heroName="kodee"/>
            <Error heroName="raja"/>
            <Error heroName="jegan"/>
        </ErrorBoundary> */}

      </header>
    </div>
  );
}

export default App;
