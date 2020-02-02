import React from 'react';
import {shallow} from 'enzyme';
import Game from './';
import {AppConst} from '../../constants/App.const';

describe("<Game /> component", () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Game />);
    });

    it("Should have label for each player", () => {
        let playerList = wrapper.find("div.player h4");
        expect(playerList.length).toEqual(2);
        expect(playerList.at(0).text()).toEqual(AppConst.PLAYER_1);
        expect(playerList.at(1).text()).toEqual(AppConst.PLAYER_2);
    });

    it("The default score should be 0 for both the players", () => {
        let scoreList = wrapper.find("div.player .score");
        expect(scoreList.at(0).text()).toEqual("0");
        expect(scoreList.at(1).text()).toEqual("0");
    });

    it("Should have 'Win the ball' button for each player", () => {
        let buttons = wrapper.find("div.player button");
        expect(buttons.length).toEqual(2);
        expect(buttons.at(0).text()).toEqual(AppConst.WIN_THE_BALL);
    });

    it("The score should be updated from 0 to 15 for the player, clicking upon Win the ball button", () => {
        let player1WinButton = wrapper.find("div.player-1 button");
        player1WinButton.simulate("click");
        expect(wrapper.find(".player-1 .score").text()).toEqual(AppConst.POINTS[1].toString());

        let player2WinButton = wrapper.find("div.player-2 button");
        player2WinButton.simulate("click");
        expect(wrapper.find(".player-2 .score").text()).toEqual(AppConst.POINTS[1].toString());

    });
    
    it("The player score should be 30, if the player Win the ball twice", () => {
        let player1WinButton = wrapper.find("div.player-1 button");
        player1WinButton.simulate("click");
        player1WinButton.simulate("click");
        expect(wrapper.find(".player-1 .score").text()).toEqual(AppConst.POINTS[2].toString());
    });

    it("The player score should be 40, if the player Win the ball thrice", () => {
        let player1WinButton = wrapper.find("div.player-1 button");
        player1WinButton.simulate("click");
        player1WinButton.simulate("click");
        player1WinButton.simulate("click");
        expect(wrapper.find(".player-1 .score").text()).toEqual(AppConst.POINTS[3].toString());
    });

    it("Player should win if his score is 40 and win the ball", () => {
        let player1WinButton = wrapper.find("div.player-1 button");
        player1WinButton.simulate("click");
        player1WinButton.simulate("click");
        player1WinButton.simulate("click");
        player1WinButton.simulate("click");
        expect(wrapper.find(".game-over").text()).toEqual(AppConst.PLAYER_1 + " " + AppConst.WON_THE_GAME);
    });

    it("Win the ball buttons should be disabled after the game is over", () => {
        let player1WinButton = wrapper.find("div.player-1 button");
        player1WinButton.simulate("click");
        player1WinButton.simulate("click");
        player1WinButton.simulate("click");
        player1WinButton.simulate("click");
        
        let buttons = wrapper.find("div.player button");
        expect(buttons.at(0).is('[disabled]')).toBeTruthy();
        expect(buttons.at(1).is('[disabled]')).toBeTruthy();
    });

});