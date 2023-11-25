///<reference types="cypress"/>
import { faker } from '@faker-js/faker';


describe('9. Create a post. Verify HTTP response status code.', () => {

  it('Create a post. Verify HTTP response status code.', () => {

    let id4 = faker.number.int({ min: 1000000 })

    cy.request({
      method: 'DELETE',
      url: `/posts/${id4}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    })
  })
}) 