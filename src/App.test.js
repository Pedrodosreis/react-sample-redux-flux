import request from './reducers/sample';
import sample from './reducers/index';

describe('sample test', () => {
    it('has a default state', () => {
        expect(request(1, 2)).toEqual(3);
    })
});

describe('Request Reducer', () => {
    it('testing an empty reducer', () => {
        expect(sample(undefined, '')).toEqual({"tasks": []});
    })

    it('adding a task to reducer', () => {
        expect(sample(undefined, {
            type: 'ADD_TASK',
            payload: 'Texto'
        })).toEqual({"tasks": ["Texto"]});
    })
});
