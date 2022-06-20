import React, { useReducer } from "react";
import style from "./App.module.css";
import Card from "./components/Card";
import { reducer, initialState, setSelect } from "./state";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={style.container}>
      <h1 className={style.title}>Ты сегодня покормил кота?</h1>
      <div className={style.cards}>
        {state.cards.map((card) => (
          <Card
            key={card.id}
            {...card}
            dispatch={dispatch}
            setSelect={setSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
