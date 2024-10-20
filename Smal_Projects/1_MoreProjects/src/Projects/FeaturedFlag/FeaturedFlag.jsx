import React from 'react';
import LightDark from '../LightAndDarkMode/LightDark';
import TicTacToe from '../TicTacToe/TicTacToe';
import ModalPopUp from '../ModalPopUp/ModalPopUp';
import { FeaturedFlagContext } from './context';

const FeaturedFlag = () => {
  const { loading, enableFlag } = React.useContext(FeaturedFlagContext);
  const componentsRendered = [
    {
      key: 'showLigthAndDarkMode',
      component: <LightDark />,
    },
    {
      key: 'showTicTacToeBoard',
      component: <TicTacToe />,
    },
    {
      key: 'showModalPopUp',
      component: <ModalPopUp />,
    },
  ];

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>Featured Flag</h1>
      {componentsRendered.map((component) =>
        enableFlag[component.key] ? component.component : null
      )}
    </div>
  );
};

export default FeaturedFlag;
