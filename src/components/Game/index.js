import React from 'react';
import {AppConst} from '../../constants/App.const';
import './Game.css';

class Game extends React.Component {
    constructor(props){
        super(props);
        const defaultScore = AppConst.POINTS[0];
        this.state = {
            player1: {
                score: defaultScore,
                wins: 0
            },
            player2: {
                score: defaultScore,
                wins: 0
            },
            winner: null,
            gameOver: false
        };
    }

    _updateScore = (ballWinner, otherPlayer) => {
        let ballWinnerObj = this.state[ballWinner];
        let otherPlayerObj = this.state[otherPlayer];
        let otherProps = {};
        if(!this._isPlayerWinTheBallThreeTimes(ballWinnerObj.wins)) {
            ballWinnerObj.score = AppConst.POINTS[++ballWinnerObj.wins];
            if(this._checkForDeuce(ballWinnerObj.wins, otherPlayerObj.wins)){
                ballWinnerObj.score = otherPlayerObj.score = AppConst.DEUCE;
            }
        }
        else {
            if(ballWinnerObj.score === AppConst.DEUCE &&  otherPlayerObj.score === AppConst.DEUCE) {
                ballWinnerObj.score = AppConst.ADVANTAGE;
                otherPlayerObj.score = AppConst.POINTS[AppConst.POINTS.length-1];
            } else if(ballWinnerObj.score === AppConst.POINTS[AppConst.POINTS.length-1] && otherPlayerObj.score === AppConst.ADVANTAGE) {
                ballWinnerObj.score = otherPlayerObj.score = AppConst.DEUCE;
            } else {
                otherProps = {
                    winner: ballWinner === AppConst.PLAYER1 ? AppConst.PLAYER_1 : AppConst.PLAYER_2,
                    gameOver: true
                };
            }
        }

        this.setState({[ballWinner]: ballWinnerObj, [otherPlayer]: otherPlayerObj, ...otherProps});
    }
    
    _isPlayerWinTheBallThreeTimes = (numberOfWins) => {
        return numberOfWins >= AppConst.POINTS.length-1; 
    }
    
    _checkForDeuce = (currentBallWinnnerWins, otherPlayerWins) => {
        return currentBallWinnnerWins >2 && otherPlayerWins > 2;
    }

    render = () => {        
        return (
            <div>
                <div className="game">
                    <div className="player player-1">
                        <h4>{AppConst.PLAYER_1}</h4>
                        <div className="score-container">{AppConst.SCORE} : <span className="score">{this.state.player1.score}</span></div>
                        <button onClick={this._updateScore.bind(this, AppConst.PLAYER1, AppConst.PLAYER2)} disabled={this.state.gameOver}>{AppConst.WIN_THE_BALL}</button>
                    </div>
                    <div className="player player-2">
                        <h4>{AppConst.PLAYER_2}</h4>
                        <div className="score-container">{AppConst.SCORE} : <span className="score">{this.state.player2.score}</span></div>
                        <button onClick={this._updateScore.bind(this, AppConst.PLAYER2, AppConst.PLAYER1)} disabled={this.state.gameOver}>{AppConst.WIN_THE_BALL}</button>
                    </div>
                </div>
                {this.state.gameOver && <div className="game-over">{this.state.winner} {AppConst.WON_THE_GAME}</div>}
            </div>
        );
    }
}

export default Game;
