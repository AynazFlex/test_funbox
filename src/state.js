const SET_SELECT = "SET_SELECT";

export const setSelect = (id) => ({
  type: SET_SELECT,
  id,
});

export const initialState = {
  cards: [
    {
      id: 1,
      title: "Нямушка",
      subtitle: "с фуа-гра",
      description: ["10 порций", "мышь в подарок"],
      weight: '0,5',
      disabled: false,
      Selected: false,
      textOfSelected: 'Печень утки разварная с артишоками.',
    },
    {
      id: 2,
      title: "Нямушка",
      subtitle: "с рыбой",
      description: ["40 порций", "2 мыши в подарок"],
      weight: '2',
      disabled: false,
      Selected: true,
      textOfSelected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    },
    {
      id: 3,
      title: "Нямушка",
      subtitle: "с курой",
      description: ["100 порций", "5 мышей в подарок", "заказчик доволен"],
      weight: '5',
      disabled: true,
      Selected: false,
      textOfSelected: 'Филе из цыплят с трюфелями в бульоне.',
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_SELECT:
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (action.id === card.id) {
            return {
              ...card,
              Selected: !card.Selected,
            };
          }
          return card;
        }),
      };
    default:
      return { ...state };
  }
};
