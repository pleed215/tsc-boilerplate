import {expect} from "chai"
import { getLength} from "./starter";

describe("getLength test", () => {
    it("getLength('example') should be 7",() => {
        expect(getLength('example')).to.equal(7)
    })
})