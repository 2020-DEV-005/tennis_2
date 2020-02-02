import React from 'react';
import {AppConst} from '../../constants/App.const';
import './Game.css';

class Game extends React.Component {
    render = () => {
        return (
            <div className="game">
                <div className="player">
                    <h4>{AppConst.PLAYER_1}</h4>
                </div>
                <div className="player">
                    <h4>{AppConst.PLAYER_2}</h4>
                </div>
            </div>
        );
    }
}

export default Game;
