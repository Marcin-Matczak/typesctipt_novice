const butonElement = document.querySelector("button");

const calculatePrice = (orginalPrice: number, hasDiscount: boolean) => {
  return hasDiscount ? orginalPrice * 0.8 : orginalPrice;
};

butonElement.addEventListener("click", () => {
  const orginalPrice: number = 50;
  const hasDiscount: boolean = new URLSearchParams(window.location.search).get(
    "discount") === "true";
 
  console.log(calculatePrice(orginalPrice, hasDiscount));
});