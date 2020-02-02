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
});
