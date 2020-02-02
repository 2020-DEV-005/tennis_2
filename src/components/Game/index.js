import React from 'react';
import {AppConst} from '../../constants/App.const';
import './Game.css';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            player1_score: AppConst.POINTS[0],
            player2_score: AppConst.POINTS[0],
            winner: null,
            gameOver: false
        };
        this.player1_wins = 0;
        this.player2_wins = 0;
    }

    _updateScore = (ballWinner) => {
        let scoreObj = {};
        if(ballWinner === AppConst.PLAYER_1){
            if(!this._isPlayerWinTheBallThreeTimes(this.player1_wins)){
                scoreObj.player1_score =  AppConst.POINTS[++this.player1_wins];
            } else{
                scoreObj = {
                    winner: AppConst.PLAYER_1,
                    gameOver: true
                };
            }
        } else{
            if(!this._isPlayerWinTheBallThreeTimes(this.player2_wins)){
                scoreObj.player2_score =  AppConst.POINTS[++this.player2_wins];
            } else{
                scoreObj = {
                    winner: AppConst.PLAYER_2,
                    gameOver: true
                };
            }
        }
        this.setState(scoreObj);
    }
    
    _isPlayerWinTheBallThreeTimes = (numberOfWins) => {
        return numberOfWins >= AppConst.POINTS.length-1; 
    }

    render = () => {        
        return (
            <div>
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
                {this.state.gameOver && <div className="game-over">{this.state.winner} {AppConst.WON_THE_GAME}</div>}
            </div>
        );
    }
}

export default Game;
