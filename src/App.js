import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import WeatherApp from './WeatherApp';

import Footer from './Footer';

export default function App() {
  return (
    <div className="App">
      <main className="main">
        <WeatherApp />
      </main>
      <Footer />
    </div>
  );
}
