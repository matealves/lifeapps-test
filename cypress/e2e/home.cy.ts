describe("Home Page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api-prova-frontend.solucoeslifeapps.com.br/products?_page=1&_per_page=8"
    ).as("getProdutos");
    cy.visit("http://localhost:3000");
  });

  it("Deve carregar a página inicial corretamente", () => {
    cy.get("header").should("be.visible");
    cy.get("body").should("not.have.class", "loading");
    cy.get('input[type="text"]').should("be.visible");
    cy.get("footer").should("be.visible");
  });
});
