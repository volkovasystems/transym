
const assert = require( "assert" );
const transym = require( "./transym.js" );

assert.deepEqual( transym( { [ Symbol.for( "hello" ) ]: "test" }, { } ),
	{ [ Symbol.for( "hello" ) ]: "test" }, "should be deeply equal" );

assert.deepEqual( transym( { [ Symbol.for( "hello" ) ]: "test" }, { [ Symbol.for( "hello" ) ]: "test" }, true ),
	{ }, "should be deeply equal" );

console.log( "ok" );
