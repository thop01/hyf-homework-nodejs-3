describe('Root endpoint', () => {

  it('Should answer with "Hello World!"', () => {

    cy.request('/').its('body').should('eq', "Hello World!");

  });

});

describe('user endpoint', ()=>{
  it('should give me username',()=>{
    cy.request('/user').its('body').should('eq', JSON.stringify({name: 'Pascal', age: 18}));
  })
})