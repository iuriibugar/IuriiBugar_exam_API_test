///<reference types="cypress"/>

const id1 = 55;
const id2 = 60;

describe('3. Get posts with id = 55 and id = 60. Verify HTTP response status code. Verify id values of returned records', () => {
  
  it('Get posts with id = 55 and id = 60. Verify HTTP response status code. Verify id values of returned records', () => {
    cy.request({
      method: 'GET',
      url: `/posts/?id=${id1}&id=${id2}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body[0].id).to.eq(id1);
      expect(response.body[1].id).to.eq(id2);
    })
  })  
}) 