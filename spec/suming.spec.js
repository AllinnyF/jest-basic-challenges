
describe('Given x and y', () => {
    let x = 0;
    let y = 0;
    let result;
 
    describe('When i sum them', () => {
        beforeEach(() => { result = x + y; });
 
        describe('And x is 3 and y is 3', () => {
            beforeEach(() => { result = 3 + 3 });
            it('Then result is 6', () => {
                expect(result).toEqual(6);
            });
        });

        describe('And x is 2 and y is 3', () => {
            beforeEach(() => { result = 2 + 3 });
            it('Then result is 5', () => {
                expect(result).toEqual(5);
            });
        });
 
        describe('And x is 2 and y is 2', () => {
            beforeEach(() => { result = 2 + 2 });
            it('Then result is 4', () => {
                expect(result).toEqual(4);
            });
        });
    });
});