import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Book from './components/Book';
import Todo from './components/Todo';
import Footer from './components/Footer';

function App() {
  const tabs = ['Book', 'Todo'];

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const handleCurrentTab = (e) => {
    setCurrentTab(e.target.innerText);
  };

  return (
    <div className="main-wrapper">
      <Header />
      <Nav tabs={tabs} handleCurrentTab={handleCurrentTab} />
      <main>
        {currentTab === 'Book' ? <Book /> : null}
        {currentTab === 'Todo' ? <Todo /> : null}
      </main>
      <Footer />
    </div>
  );
}

export default App;
