///<reference types="cypress"/>

describe('4. Create a post. Verify HTTP response status code.', () => {
  
  it('Create a post. Verify HTTP response status code.', () => {
    cy.request({
      method: 'POST',
      url: `/664/posts`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);
    })
 }) 
}) 