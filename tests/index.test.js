const assert = require("assert");
const {cssUnit} = require("../index");

describe('index', function () {

    it('should convert css unit', function () {

        let res;
        res = cssUnit(10);
        // console.log(res);
        assert.deepStrictEqual(res, "10px");


        res = cssUnit();
        // console.log(res);
        assert.deepStrictEqual(res, "0px");


        res = cssUnit("123");
        // console.log(res);
        assert.deepStrictEqual(res, "123px");


        res = cssUnit("123vh");
        // console.log(res);
        assert.deepStrictEqual(res, "123vh");

        res = cssUnit("123%");
        // console.log(res);
        assert.deepStrictEqual(res, "123%");


        res = cssUnit("123rem");
        // console.log(res);
        assert.deepStrictEqual(res, "123rem");


        res = cssUnit("123px");
        // console.log(res);
        assert.deepStrictEqual(res, "123px");

        res = cssUnit(null);
        // console.log(res);
        assert.deepStrictEqual(res, "0px");


    });
});
