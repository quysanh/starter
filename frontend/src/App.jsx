import './App.css';
import { apiConfig } from './config/api';

function App() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">Sprint 1 · Project Setup</p>
        <h1>Try-on Starter</h1>
        <p className="lede">
          Frontend scaffold (React + Vite) is ready. Backend API base is set to{' '}
          <span className="highlight">{apiConfig.baseUrl}</span>.
        </p>
        <div className="actions">
          <a className="button" href="https://vitejs.dev/guide/" target="_blank" rel="noreferrer">
            Vite Guide
          </a>
          <a className="button ghost" href="https://react.dev/" target="_blank" rel="noreferrer">
            React Docs
          </a>
        </div>
      </header>

      <section className="grid">
        <article className="card">
          <h2>Development</h2>
          <ul>
            <li>Run <code>npm run dev</code> in <code>frontend</code>.</li>
            <li>Ensure backend is live at <code>{apiConfig.baseUrl}</code>.</li>
            <li>Start building landing and auth screens in <code>src/pages</code>.</li>
          </ul>
        </article>
        <article className="card">
          <h2>Quality</h2>
          <ul>
            <li>Lint with <code>npm run lint</code>.</li>
            <li>Format with <code>npx prettier --write .</code>.</li>
            <li>Keep components small and reusable.</li>
          </ul>
        </article>
      </section>
    </main>
  );
}

export default App;
