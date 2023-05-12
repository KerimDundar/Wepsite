import React from 'react';
import Header from './components/Header/Header';
import MainSlider from './components/sliders/MainSlider';
import AboutUs from './components/sliders/Hakkimda';

function App() {
  return (
    <div>
      <Header />
      <MainSlider />
      <main>
        <AboutUs />
      </main>
    </div>
  );
}

export default App;
