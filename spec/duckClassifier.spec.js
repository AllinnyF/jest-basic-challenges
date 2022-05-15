const duckClassifier = require('../src/duckClassifier');

describe('Given is a duck method', () => {
  describe('When isDuck method is called', () => {
    describe('And all characteristics are true for a duck', () => {
      it('Then return animal is a duck', () => {
        const duck = duckClassifier(true, true, true)

        expect(duck).toBeTruthy();
      });
    })

    describe('And all characteristics are false for a duck', () => {
      it('Then return animal is not a duck when fly is false', () => {
        const duck = duckClassifier(false, true, true)

        expect(duck).toBeFalsy();
      });

      it('Then return animal is not a duck when walk is false', () => {
        const duck = duckClassifier(true, false, true)

        expect(duck).toBeFalsy();
      });

      it('Then return animal is not a duck when swim is false', () => {
        const duck = duckClassifier(true, true, false)

        expect(duck).toBeFalsy();
      });
    })
  })
});