describe("Cart", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api-prova-frontend.solucoeslifeapps.com.br/products?_page=1&_per_page=8"
    ).as("getProdutos");
    cy.visit("http://localhost:3000");
  });
  
  it("Deve adicionar o produto ao carrinho no localStorage ao clicar no botão", () => {
    cy.get(".product").first().click();
    cy.get(".product-page").should("be.visible");

    cy.window().then((window) => {
      const cart = JSON.parse(
        window.localStorage.getItem("cart_shopping") || "[]"
      );
      expect(cart).to.have.length(0); // Confirma que o carrinho está vazio no início
    });

    cy.get(".add-to-cart", { timeout: 10000 }).should("be.visible").click();

    // Verifica se o item foi adicionado ao localStorage
    cy.window().then((window) => {
      const cart = JSON.parse(
        window.localStorage.getItem("cart_shopping") || "[]"
      );
      expect(cart).to.have.length.greaterThan(0);
      expect(cart[0]).to.have.property("id");
      expect(cart[0]).to.have.property("qtd", 1);
    });
  });

  it("Deve abrir o carrinho ao clicar no ícone de carrinho e finalizar o pedido", () => {
    cy.get(".product").first().click();
    cy.get(".product-page").should("be.visible");

    cy.get(".add-to-cart", { timeout: 10000 }).should("be.visible").click();

    cy.get(".cart").click();
    cy.get(".cart-page").should("be.visible");

    cy.get(".finish-order", { timeout: 10000 }).click();
    cy.get(".modal").should("be.visible").click();
  });
});
