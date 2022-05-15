const helper = require('../src/helper')

describe('Given is a helper method', () => {
  describe('When sum is called', () => {
    it('Then 5 plus 7 sum results are returned 12', () => {
      expect(helper.sum(5, 7)).toEqual(12);
    })
  })

  describe('And randomAbove3 method is called', () => {
    it('Then must be return number greater than 5', () => {
      const x = 3;

      expect(helper.randomAbove3()).toBeGreaterThan(x);
    })

    it('Then must be not return number less than 5', () => {
      const x = 3;

      expect(helper.randomAbove3()).not.toBeLessThan(x);
    })
  })

  describe('And returnTrue method is called', () => {
    it('Then return true', () => {
      expect(helper.returnTrue()).toBeTruthy();
    })

    it('Then not return false', () => {
      expect(helper.returnTrue()).not.toBeFalsy();
    })
  })

  describe('And returnFalse method is called', () => {
    it('Then return false', () => {
      expect(helper.returnFalse()).toBeFalsy();
    })

    it('Then not return true', () => {
      expect(helper.returnFalse()).not.toBeTruthy();
    })
  })

  describe('And returnUndefined method is called', () => {
    it('Then return undefined', () => {
      expect(helper.returnUndefined()).toBeUndefined();
    })

    it('Then not return defined', () => {
      expect(helper.returnUndefined()).not.toBeDefined();
    })
  })

  describe('And builder method is called', () => {
    it('Then return infos of person', () => {
      expect(helper.builder()).toEqual({
        name: 'Joao',
        surname: 'Silva',
        birth: '01-01-1980',
      });
    })
  })

  describe('And merger method is called', () => {
    const mockPersonObj = {
      name: 'Allinny',
      surname: 'Fernandes',
      birth: '25-05-1990',
    }

    it('Then merger return mockPersonObj', () => {
      expect(helper.merger(mockPersonObj)).toEqual(expect.objectContaining(mockPersonObj));
    });
  })

  describe('And concatRandomString method is called', () => {
    const mockText = 'bla'
    it('Then return string with text and a random number', () => {
      expect(helper.concatRandomString(mockText)).toMatch(/bla\d+/)
    });
  })

  describe('And concatRandomArray method is called', () => {
    const mockArray = ['tan', 'nan', 'nan'];

    it('Then return array', () => {
      expect(helper.concatRandomArray(mockArray)).toEqual(expect.arrayContaining(mockArray));
    });
  })

  describe('And thrower method is called', () => {
    it('Then throw exception are be returned', () => {
      expect(helper.thrower).toThrow(Error)
    })
  })

  describe('And thrower2 method is called', () => {
    const errorMessage = 'EITA'
    it('Then throw errorMessage are be returned', () => {
      expect(() => helper.thrower2(new TypeError(errorMessage))).toThrow('EITA');
    })
  })
})