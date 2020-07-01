// we could place this url into cypress.json as "baseUrl"
const url = 'http://localhost:4200/';

export const navigateTo = () => cy.visit(url);

export const getGreeting = () => cy.get('app-root h1');
// export const getGreeting = () => cy.get('[data-test=title]');

export const getHello = () => cy.get('app-root div h1');
