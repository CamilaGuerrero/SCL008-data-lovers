global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('filter', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof filterData, 'function');
  });
 /* aca debo hacer un test que filtre y seria algo asi 
 it('deberia retornar xxx para xxx y xxxx', () =>{
   assert.equal(filterData(data que en este caso sería WORLDBANK, condition),resultado)
 })
 */
});

describe('sort', () => {

  it('debería ser una función', () => {
    assert.equal(typeof sortData, 'function');
  });
  /* aca debo hacer un test que ordene y seria algo asi 
 it('deberia retornar xxx para xxx, xxx y xxxx', () =>{
   assert.equal(sortData(data que en este caso sería WORLDBANK, sortBy,sortOrder),resultado)
 })
 */
});

describe('',()=>{
  it('debería ser una función', () => {
    assert.equal(typeof computeStats, 'function');
  });
   /* aca debo hacer un test que haga un calculo estadistico y seria algo asi 
 it('deberia retornar xxx para xxx que en este caso es la data', () =>{
   assert.equal(computeStats(data que en este caso sería WORLDBANK, no se si aqui irá el cálculo 
    que le inserto a data, esto lo debo preguntar),resultado)
 })
 */

});
