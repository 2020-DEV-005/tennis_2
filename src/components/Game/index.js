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
        if(ballWinnerObj.wins < AppConst.POINTS.length-1) {
            ballWinnerObj.score = AppConst.POINTS[++ballWinnerObj.wins];
        }
        else {
            otherProps = {
                winner: ballWinner === AppConst.PLAYER1 ? AppConst.PLAYER_1 : AppConst.PLAYER_2,
                gameOver: true
            };
        }

        this.setState({[ballWinner]: ballWinnerObj, ...otherProps});
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
