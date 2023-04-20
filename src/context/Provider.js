import { useState } from 'react';
import GlobalContext from '.';

const GlobalStateProvider = ({ children }) => {
  const [bars, setBars] = useState([
    {
      image:
        'https://img.freepik.com/free-vector/bar-interior-realistic-composition_1284-24320.jpg',
      name: 'Cartoon Bar',
      feedback: [],
    },
    {
      image:
        'https://images.squarespace-cdn.com/content/v1/5637a85de4b0f23440f3f7a7/1448560154661-310XF727NG6SCTJ4WQUT/oriole+jcmt+2V0A57251762015-Edit-2.jpg',
      name: 'Button Bar',
      feedback: [],
    },
    {
      image:
        'https://img.staticmb.com/mbcontent//images/uploads/2022/6/bar-counter-designs.jpg',
      name: 'Milk Bar',
      feedback: [],
    },
    {
      name: 'Shelf Bar',
      image:
        'https://www.travelandleisure.com/thmb/MwEJmJ62eYncsnXsDV8CHFp1ttM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/food-drink-cocktails-spirits-top-shelf-liquor-bar-cart-16b99072993340fe91291634f2ebe7fb.png',
      feedback: [],
    },
  ]);

  const addFeedback = (feedback, bar) => {
    const barIndex = bars.findIndex(({ name }) => name === bar.name);
    if (barIndex !== -1) {
      const targetBar = bars[barIndex];
      const updatedBar = {
        ...targetBar,
        feedback: [...targetBar.feedback, feedback],
      };

      const newBars = [...bars];
      newBars[barIndex] = updatedBar;
      setBars(newBars);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        bars,
        setBars,
        addFeedback,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStateProvider;
