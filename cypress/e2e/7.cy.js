///<reference types="cypress"/>
import { faker } from '@faker-js/faker';
import posts from '../fixtures/posts.json'


describe('7. Update non-existing entity. Verify HTTP response status code.', () => {
 it('Update non-existing entity. Verify HTTP response status code.', () => {
  
  let id3 = faker.number.int({ min: 1000000 })
  
  cy.request({
    method: 'PUT',
    url: `/posts/${id3}`, 
    body: posts,
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(404);
  })
}) 
}) 