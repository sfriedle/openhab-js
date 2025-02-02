const { QuantityType } = require('./openhab.mock');
const { BigDecimal } = require('./java.mock');
const { Unit } = require('./javax-measure.mock');
const Quantity = require('../quantity');
const { _stringOrNumberOrQtyToQtyType, _stringOrQtyToQtyType } = require('../quantity');

describe('quantity.js', () => {
  const quantityTypeSpy = new QuantityType();
  QuantityType.valueOf.mockImplementation(() => quantityTypeSpy);
  const unitSpy = new Unit();
  quantityTypeSpy.getUnit.mockImplementation(() => unitSpy);

  describe('constructor', () => {
    it('accepts string', () => {
      expect(() => Quantity('5m')).not.toThrowError(TypeError);
    });
    it('accepts itself (Quantity)', () => {
      expect(() => Quantity(Quantity('5m'))).not.toThrowError(TypeError);
    });
    it('accepts Java QuantityType', () => {
      expect(() => Quantity(quantityTypeSpy)).not.toThrowError(TypeError);
    });
    it('throws TypeError else', () => {
      expect(() => Quantity(5)).toThrowError(TypeError);
    });
  });

  describe('member', () => {
    it('dimension delegates', () => {
      quantityTypeSpy.getDimension.mockImplementation(() => '[L]');
      const dimension = Quantity('5 m').dimension;
      expect(quantityTypeSpy.getDimension).toHaveBeenCalled();
      expect(dimension).toBe('[L]');
    });

    it('unit delegates', () => {
      unitSpy.getName.mockImplementation(() => 'Metres');
      const unit = Quantity('5 m').unit;
      expect(quantityTypeSpy.getUnit).toHaveBeenCalled();
      expect(unitSpy.getName).toHaveBeenCalled();
      expect(unit).toBe('Metres');
    });

    it('symbol delegates', () => {
      unitSpy.getSymbol.mockImplementation(() => 'm');
      const symbol = Quantity('5 m').symbol;
      expect(quantityTypeSpy.getUnit).toHaveBeenCalled();
      expect(unitSpy.getSymbol).toHaveBeenCalled();
      expect(symbol).toBe('m');
    });

    it('float delegates', () => {
      quantityTypeSpy.doubleValue.mockImplementation(() => 1.5);
      const float = Quantity('1.5 m').float;
      expect(quantityTypeSpy.doubleValue).toHaveBeenCalled();
      expect(float).toBe(1.5);
    });

    it('int delegates', () => {
      quantityTypeSpy.longValue.mockImplementation(() => 5);
      const int = Quantity('5 m').int;
      expect(quantityTypeSpy.longValue).toHaveBeenCalled();
      expect(int).toBe(5);
    });
  });

  describe('method', () => {
    it('add delegates', () => {
      Quantity('5 m').add('5 m');
      expect(quantityTypeSpy.add).toHaveBeenCalled();
    });
    it('divide delegates', () => {
      Quantity('5 m').divide(2);
      expect(quantityTypeSpy.divide).toHaveBeenCalled();
    });
    it('multiply delegates', () => {
      Quantity('5 m').multiply(2);
      expect(quantityTypeSpy.multiply).toHaveBeenCalled();
    });
    it('subtract delegates', () => {
      Quantity('5 m').subtract('2 m');
      expect(quantityTypeSpy.subtract).toHaveBeenCalled();
    });
    it('toUnit delegates', () => {
      const unit = 'cm';
      Quantity('5 m').toUnit(unit);
      expect(quantityTypeSpy.toUnit).toHaveBeenCalledWith(unit);
    });
    // method name | compareTo returns for true | compareTo returns for false
    it.each([
      ['equal', 0, 1],
      ['largerThan', 1, 0],
      ['largerThanOrEqual', 0, -1],
      ['smallerThan', -1, 0],
      ['smallerThanOrEqual', 0, 1]
    ])('%s delegates and compares', (name, mock1, mock2) => {
      quantityTypeSpy.compareTo.mockImplementation(() => mock1);
      let equals = Quantity('5 m')[name]('500 cm');
      expect(equals).toBe(true);

      quantityTypeSpy.compareTo.mockImplementation(() => mock2);
      equals = Quantity('5 m')[name]('500 cm');
      expect(equals).toBe(false);

      expect(quantityTypeSpy.compareTo).toHaveBeenCalledTimes(2);
    });
    it('toString delegates', () => {
      Quantity('5 m').toString();
      expect(quantityTypeSpy.toString).toHaveBeenCalled();
    });
  });

  describe('private method', () => {
    describe('_stringOrNumberOrQtyToQtyType', () => {
      it('parses number', () => {
        const value = _stringOrNumberOrQtyToQtyType(10);
        expect(BigDecimal.valueOf).toHaveBeenCalledWith(10);
        expect(value).toBeInstanceOf(BigDecimal);
      });
      it('parses string to QuantityType', () => {
        const value = _stringOrNumberOrQtyToQtyType('10 m');
        expect(QuantityType.valueOf).toHaveBeenCalledWith('10 m');
        expect(value).toBeInstanceOf(QuantityType);
      });
      it('parses Quantity', () => {
        const value = _stringOrNumberOrQtyToQtyType(Quantity('10 m'));
        expect(value).toBeInstanceOf(QuantityType);
      });
      it('else throws TypeError', () => {
        expect(() => _stringOrNumberOrQtyToQtyType(true)).toThrowError(TypeError);
      });
    });
    describe('_stringOrQtyToQtyType', () => {
      it('parses string to QuantityType', () => {
        const value = _stringOrQtyToQtyType('10 m');
        expect(QuantityType.valueOf).toHaveBeenCalledWith('10 m');
        expect(value).toBeInstanceOf(QuantityType);
      });
      it('parses Quantity', () => {
        const value = _stringOrQtyToQtyType(Quantity('10 m'));
        expect(value).toBeInstanceOf(QuantityType);
      });
      it('else throws TypeError', () => {
        expect(() => _stringOrQtyToQtyType(10)).toThrowError(TypeError);
      });
    });
  });
});
