import React, { useState } from "react";
import "./Card.css";
import cn from "classnames";

const Card = (props) => {
  const [hover, setHover] = useState(false);

  const toggleSelecting = () => {
    !props.disabled && props.dispatch(props.setSelect(props.id));
    setHover(false);
  };

  const ModifStyles = (baseClass) => {
    switch (baseClass) {
      case "item":
        return {
          itemDefault: !props.Selected && !hover && !props.disabled,
          itemSelectedDefault: props.Selected && !hover && !props.disabled,
          itemDefaultHover: !props.Selected && hover && !props.disabled,
          itemSelectedHover: props.Selected && hover && !props.disabled,
          itemDisabled: props.disabled,
        };
      case "weight":
        return {
          weightDefault: !props.Selected && !hover && !props.disabled,
          weightSelectedDefault: props.Selected && !hover && !props.disabled,
          weightDefaultHover: !props.Selected && hover && !props.disabled,
          weightSelectedHover: props.Selected && hover && !props.disabled,
          weightDisabled: props.disabled,
        };
      case "buy":
        return {
          buyDefault: !props.Selected && !hover && !props.disabled,
          buyDefaultHover: !props.Selected && hover && !props.disabled,
        };
    }
  };

  const classList = (baseClass) => cn(baseClass, ModifStyles(baseClass));

  const classWithDisabled = (baseclass) =>
    cn(baseclass, { disabled: props.disabled });

  return (
    <div className="item-container">
      <div
        className={classList("item")}
        onClick={toggleSelecting}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="card">
          <div className="card-content">
            <div className={cn("wrapper", { blur: props.disabled })}>
              <div className="cardName">
                {hover && props.Selected && !props.disabled ? (
                  <div className="cardNameSelectedHover">Котэ не одобряет?</div>
                ) : (
                  <div className={classWithDisabled("")}>
                    Сказочное заморское яство
                  </div>
                )}
              </div>
              <div className={classWithDisabled("title")}>{props.title}</div>
              <div className={classWithDisabled("subtitle")}>
                {props.subtitle}
              </div>
              <div className={classWithDisabled("description")}>
                {props.description.map((elem, index) => (
                  <div key={index}>{elem}</div>
                ))}
              </div>
              <div className={classList("weight")}>
                {props.weight}
                <div className="kg">кг</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="undercardText">
        {!props.disabled ? (
          !props.Selected ? (
            <div>
              Чего сидишь? Порадуй котэ,{" "}
              <span
                onClick={toggleSelecting}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={classList("buy")}
              >
                купи.
              </span>
            </div>
          ) : (
            <div>{props.textOfSelected}</div>
          )
        ) : (
          <div className="undercardTextdis">{`Печалька, ${props.subtitle} закончился.`}</div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Card);
