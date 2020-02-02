import React from 'react';
import {shallow} from 'enzyme';
import Game from './';
import {AppConst} from '../../constants/App.const';

describe("<Game /> component", () => {
    let wrapper = shallow(<Game />);
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
    
});