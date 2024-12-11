import CounterComp from "./components/CounterComp";
//! 1. Buat komponen memiliki hasil penambahan masing masing
//! 2. Buat dan gunakan Higher Order Component (HOC)

function App() {
  return (
    <>
      <CounterComp counter={1} />
      <CounterComp counter={2} />
    </>
  );
}

export default App;
