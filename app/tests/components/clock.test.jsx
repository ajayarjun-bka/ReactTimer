import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import Clock from 'Clock';

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });
});

describe('render clock', () => {
    it('should render clock to output', ()=>{
        var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}></Clock>);
        var element = $(ReactDOM.findDOMNode(clock));
        var  actualtext=element.find('.clock-text').text();
        console.log('====================================');
        console.log(actualtext);
        console.log('====================================');
        expect(actualtext).toBe('01:02');
    })
});

describe('formatSeconds', () => {
    it('should format seconds', () => {
        var clock = TestUtils.renderIntoDocument(<Clock/>);
        var seconds = 615;
        var expected = '10:15';
        var actual = clock.formatSeconds(seconds);

        expect(actual).toBe(expected);
    });

    it('should format seconds when min/sec are less than 10', () => {
        var clock = TestUtils.renderIntoDocument(<Clock/>);
        var seconds = 61;
        var expected = '01:01';
        var actual = clock.formatSeconds(seconds);

        expect(actual).toBe(expected);
    });
});
