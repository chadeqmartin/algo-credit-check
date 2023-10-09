const cc = require("./creditCheck.js");

describe("tests creditCheck to be valid", () => {
    test("creditCheck('5541808923795240') === 'The number is valid!'", () => {
        expect(cc.creditCheck('5541808923795240')).toBe("The number is valid!"); 
    });
    test("creditCheck('5541808923795240') === 'The number is valid!'", () => {
        expect(cc.creditCheck("4024007136512380")).toBe("The number is valid!");
    });
    test("creditCheck('6011797668867828') === 'The number is valid!'", () => {
        expect(cc.creditCheck("6011797668867828")).toBe("The number is valid!")
    });

});

describe("test creditCheck to be invalid", () => {
    test("creditCheck('5541801923795240') === 'The number is invalid!'", () => {
        expect(cc.creditCheck("5541801923795240")).toBe("The number is invalid!");
    });
    test("creditCheck('4024007106512380') === 'The number is invalid!'", () => {
        expect(cc.creditCheck('4024007106512380')).toBe('The number is invalid!');
    });
    test("creditCheck('6011797668868728') === 'The number is invalid!'", () => {
        expect(cc.creditCheck('601179766886')).toBe('The number is invalid!');
    });
});


//console.log(cc.creditCheck('5541808923795240') === "The number is valid!");
//console.log(cc.creditCheck("4024007136512380") === "The number is valid!");
//console.log(cc.creditCheck("6011797668867828") === "The number is valid!");

//console.log(cc.creditCheck("5541801923795240") === "The number is invalid!");
//console.log(cc.creditCheck('4024007106512380') === 'The number is invalid!');
//console.log(cc.creditCheck('6011797668868728') === 'The number is invalid!');
