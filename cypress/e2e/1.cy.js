///<reference types="cypress"/>

describe('1. Get all posts. Verify HTTP response status code and content type', () => {
  
  it('Get all posts. Verify HTTP response status code and content type', () => {
    cy.request({
      method: 'GET',
      url: `/posts`, 
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers['content-type']).to.include('application/json');
    })
  })
}) 