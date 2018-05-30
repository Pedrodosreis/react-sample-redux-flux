import request from '../../src/reducers/sample'

describe('Request Reducer', () => {
    it('has a default state', () => {
        expect(request(1, 2)).toEqual(3);
    })
});