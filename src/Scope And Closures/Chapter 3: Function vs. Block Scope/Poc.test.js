let assert = require('chai').assert;

describe("Proof of concepts - Chapter 3", () => {

    it('a way to declare private', () => {
        function doSomething(a){
            /*doSomethingElse is a private function that be inside of doSomething scope*/
            function doSomethingElse(a){
                return a * 2;
            }

            return (a + doSomethingElse(a));
        }

        assert(doSomething(2), 15);
    })

});