import React from 'react';
import {AppConst} from '../../constants/App.const';
import './Game.css';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            player1_score: AppConst.DEFAULT_SCORE,
            player2_score: AppConst.DEFAULT_SCORE
        }
    }

    render = () => {        
        return (
            <div className="game">
                <div className="player">
                    <h4>{AppConst.PLAYER_1}</h4>
                    <div className="score-container">{AppConst.SCORE} : <span className="score">{this.state.player1_score}</span></div>
                    <button>{AppConst.WIN_THE_BALL}</button>
                </div>
                <div className="player">
                    <h4>{AppConst.PLAYER_2}</h4>
                    <div className="score-container">{AppConst.SCORE} : <span className="score">{this.state.player2_score}</span></div>
                    <button>{AppConst.WIN_THE_BALL}</button>
                </div>
            </div>
        );
    }
}

export default Game;
