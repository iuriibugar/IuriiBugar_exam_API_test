///<reference types="cypress"/>
import user from '../fixtures/regDataUser.json'
import { faker } from '@faker-js/faker';
import { register, loginUser } from '../support/helper'


user.email = faker.internet.email({provider: 'fakeMail.com' });
user.password = faker.internet.password({lenth: 8});
user.firstname = faker.person.firstName();
user.lastname = faker.person.lastName();
user.age = faker.number.int(100);

let token1 

describe('5. Create post with adding access token in header. Verify HTTP response status code. Verify post is created.', () => {
  
 it('Create post with adding access token in header. Verify HTTP response status code. Verify post is created.', () => {
   const newUser = {
     email: user.email,
     password: user.password,
     firstname: user.firstName,
     lastname: user.lastName,
     age: user.age,
   };

   cy.request({
     method: 'POST',
     url: '/register',
     body: newUser,
   }).then((response) => {
     expect(response.status).to.eq(201);
     token1 = response.body.accessToken;
     return token1;
   }).then((token) => {
     cy.request({
       method: 'POST',
       url: '/664/posts',
       headers: {
         Authorization: `Bearer ${token}`,
       },
     }).then((response) => {
       expect(response.status).to.eq(201);
       expect(response.body).to.have.property('id');
       expect(response.statusText).to.eq('Created');
     })
   })
 })
}) 
