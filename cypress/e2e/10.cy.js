///<reference types="cypress"/>
import posts from '../fixtures/posts.json'
import posts2 from '../fixtures/posts2.json'

let newId 

describe('10. Create post entity, update the created entity, and delete the entity. Verify HTTP response status code and verify that the entity is deleted.', () => {
it('Create a post.', () => {
  cy.request({
    method: 'POST',
    url: `/posts`, 
    body: posts,
  }).then((response) => {
    expect(response.status).to.eq(201);
    newId = response.body.id
  })
})

it('Update a post. ', () => {
  cy.request({
    method: 'PUT',
    url: `/posts/${newId}`, 
    body: posts2,
  }).then((response) => {
    expect(response.status).to.eq(200);
  })
})

it('Delete a post ', () => {
    cy.request({
      method: 'DELETE',
      url: `/posts/${newId}`
    }).then((response) => {
      expect(response.status).to.eq(200);
    })
  })

  
  it('Check deleted post', () => {
    cy.request({
      method: 'GET',
      url: `/posts/${newId}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    })
 }) 
}) 


