import React, { useState } from "react";

type propsCalculate = {
  counter: number;
};

type OriginalType = {
  handleNomor: () => void;
  nomor: number;
};

const Calculate = (OriginalComp: React.ComponentType<OriginalType> | any) => {
  return (props: propsCalculate) => {
    const [nomor, setNomor] = useState(0);

    const handleNomor = (): void => {
      setNomor(nomor + props.counter);
    };
    return <OriginalComp handleNomor={handleNomor} nomor={nomor} {...props} />;
  };
};

export default Calculate;
