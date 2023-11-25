///<reference types="cypress"/>

describe('2. Get only first 10 posts. Verify HTTP response status code. Verify that only first posts are returned.', () => {
  it('Get only first 10 posts. Verify HTTP response status code. Verify that only first posts are returned. ', () => {
    cy.request({
      method: 'GET',
      url: `posts?_start=0&_end=10`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.lengthOf.at.most(10);
    })
  })
})