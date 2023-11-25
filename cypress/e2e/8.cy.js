///<reference types="cypress"/>
import posts from '../fixtures/posts.json'
import posts2 from '../fixtures/posts2.json'

let newId

describe('8. Create post entity and update the created entity. Verify HTTP response status code and verify that the entity is updated.', () => {
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
      expect(response.statusText).to.eq('OK');
      expect(response.body.posts.id).to.eq(posts2.posts.id);
    })
  })

  it('Get and check a post. ', () => {
    cy.request({
      method: 'GET',
      url: `/posts/${newId}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.posts.id).to.eq(posts2.posts.id);
      expect(response.body.posts.title).to.eq(posts2.posts.title);
      expect(response.body.posts.author).to.eq(posts2.posts.author);
    })
  })
}) 