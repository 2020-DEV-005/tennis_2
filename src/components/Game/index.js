import React from 'react';
import {AppConst} from '../../constants/App.const';
import './Game.css';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            player1_score: AppConst.POINTS[0],
            player2_score: AppConst.POINTS[0]
        };
        this.player1_wins = 0;
        this.player2_wins = 0;
    }

    _updateScore = (ballWinner) => {
        let scoreObj = {};
        if(ballWinner === AppConst.PLAYER_1){
            scoreObj.player1_score =  AppConst.POINTS[++this.player1_wins];
        }else{
            scoreObj.player2_score =  AppConst.POINTS[++this.player2_wins];
        }
        this.setState(scoreObj);
    }

    render = () => {        
        return (
            <div className="game">
                <div className="player player-1">
                    <h4>{AppConst.PLAYER_1}</h4>
                    <div className="score-container">{AppConst.SCORE} : <span className="score">{this.state.player1_score}</span></div>
                    <button onClick={this._updateScore.bind(this, AppConst.PLAYER_1)}>{AppConst.WIN_THE_BALL}</button>
                </div>
                <div className="player player-2">
                    <h4>{AppConst.PLAYER_2}</h4>
                    <div className="score-container">{AppConst.SCORE} : <span className="score">{this.state.player2_score}</span></div>
                    <button onClick={this._updateScore.bind(this, AppConst.PLAYER_2)}>{AppConst.WIN_THE_BALL}</button>
                </div>
            </div>
        );
    }
}

export default Game;
