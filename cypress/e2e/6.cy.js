///<reference types="cypress"/>
import posts from '../fixtures/posts.json'


describe('6. Create post entity and verify that the entity is created. Verify HTTP response status code. Use JSON in body.', () => {
  
  it('Create post entity and verify that the entity is created. Verify HTTP response status code. Use JSON in body.', () => {
    cy.request({
      method: 'POST',
      url: `/posts`,
      body: posts
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.statusText).to.eq('Created');
    })
 }) 
}) 
