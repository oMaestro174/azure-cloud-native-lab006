const { calculateAcceleration, calculateDeceleration, calculateBounce } = require('../src/js/physics');

describe('Physics Functions', () => {
    test('calculateAcceleration should return correct acceleration', () => {
        const initialVelocity = 0;
        const finalVelocity = 10;
        const time = 2;
        const expectedAcceleration = 5; // a = (v - u) / t
        expect(calculateAcceleration(initialVelocity, finalVelocity, time)).toBe(expectedAcceleration);
    });

    test('calculateDeceleration should return correct deceleration', () => {
        const initialVelocity = 10;
        const finalVelocity = 0;
        const time = 2;
        const expectedDeceleration = 5; // a = (v - u) / t
        expect(calculateDeceleration(initialVelocity, finalVelocity, time)).toBe(expectedDeceleration);
    });

    test('calculateBounce should return correct new velocity after bounce', () => {
        const initialVelocity = 10;
        const coefficientOfRestitution = 0.8;
        const expectedVelocityAfterBounce = initialVelocity * coefficientOfRestitution;
        expect(calculateBounce(initialVelocity, coefficientOfRestitution)).toBe(expectedVelocityAfterBounce);
    });
});