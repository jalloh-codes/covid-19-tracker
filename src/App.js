import React from 'react';
import './App.scss';
import Index from './App/Screen/index';
import Footer from './App/components/footer'
import {Container} from 'reactstrap'
function App() {
  return (
   <div className="App">
      <Index />
      <Footer />
    </div>
  );
}

export default App;
