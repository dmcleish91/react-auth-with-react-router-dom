# Getting Started with React Router

Install the dependancy

```
pnpm install react-router-dom
```

Open you main.tsx and wrap your app in BrowserRouter

```js
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

In your App.tsx create the following

```js
function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/about' element={<About />} />
    </Routes>
  );
}
```
