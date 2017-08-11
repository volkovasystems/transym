
const assert = require( "assert" );
const transym = require( "./transym.js" );

assert.deepEqual( transym( { [ Symbol.for( "hello" ) ]: "test" }, { } ),
	{ [ Symbol.for( "hello" ) ]: "test" }, "should be equal to { [ Symbol.for( 'hello' ) ]: 'test' }" );

assert.deepEqual( transym( { [ Symbol.for( "hello" ) ]: "test" }, { [ Symbol.for( "hello" ) ]: "test" }, true ),
	{ }, "should be equal to { }" );

console.log( "ok" );
