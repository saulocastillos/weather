import React from 'react';

const api = {
  key: "78144cbaa0439c70d1ec3f8f95037759",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search...">

          </input>
        </div>
      </main>
    </div>
  );
}

export default App;
