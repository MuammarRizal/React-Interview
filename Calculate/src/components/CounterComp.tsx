import Calculate from "./Calculate";

type CounterProps = {
  counter: number;
  nomor: number;
  handleNomor: () => void;
};

const CounterComp = ({ counter, nomor, handleNomor }: CounterProps) => {
  return (
    <>
      <div>
        <h1>X + {counter}</h1>
        <p>Hasil : {nomor}</p>
        <button onClick={handleNomor}>tambah</button>
      </div>
    </>
  );
};

export default Calculate(CounterComp);
