
const Potion = require('../lib/Potion');

test('creates a random potion object', () => {
    const potion = new Potion();

    // name needed;  name length not null; valu any number
    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});

