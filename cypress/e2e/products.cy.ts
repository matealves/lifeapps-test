describe("Products", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api-prova-frontend.solucoeslifeapps.com.br/products?_page=1&_per_page=8"
    ).as("getProdutos");
    cy.visit("http://localhost:3000");
  });

  it("Deve exibir a lista de produtos", () => {
    cy.wait("@getProdutos");
    cy.get(".products", { timeout: 10000 }).should(
      "have.length.greaterThan",
      0
    );
  });

  it("Deve abrir a página do produto individual ao clicar nele", () => {
    cy.get(".product").first().click();
    cy.get(".product-page").should("be.visible");
  });
});
