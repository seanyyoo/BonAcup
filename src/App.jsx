function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <header className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-slate-800 tracking-tight">
          Welcome to BonAcup
        </h1>
        <p className="mt-4 text-slate-600 text-lg">
          A React + Tailwind CSS template. Edit <code className="px-2 py-1 bg-slate-200 rounded text-sm font-mono">src/App.jsx</code> to get started.
        </p>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
