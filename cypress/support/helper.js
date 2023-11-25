export function register(newUser){
    cy.request({
        method: 'POST',
        url: '/register',
        body: newUser,
      }).then((response) => {
        expect(response.status).to.eq(201);
        token1 = response.body.accessToken;
   
        return token1;
      })
}

export function loginUser(existingUser){
    cy.request({
        method: 'POST',
        url: '/login', 
        body: existingUser,
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.accessToken).to.be.a('string');
          expect(response.body.user).to.have.property('id');
          expect(response.body.user.email).to.eq(existingUser.email);
        return response.body.accessToken;
      });
}



