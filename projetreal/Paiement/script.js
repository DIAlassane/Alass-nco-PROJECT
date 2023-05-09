const productsSelect = document.getElementById("products");
const quantityInput = document.getElementById("quantity");
const totalPriceDisplay = document.getElementById("total-price");

// Mettre à jour le prix total lorsqu'une entrée est modifiée
productsSelect.addEventListener("input", updateTotalPrice);
quantityInput.addEventListener("input", updateTotalPrice);

function updateTotalPrice() {
  const productPrice = parseFloat(productsSelect.value);
  const quantity = parseFloat(quantityInput.value);
  const totalPrice = productPrice * quantity;
  totalPriceDisplay.textContent = totalPrice.toFixed(2);
}

const form = document.getElementById("payment-form");

// Envoyer une demande POST au serveur lors de la soumission du formulaire
form.addEventListener("submit", submitPaymentForm);

async function submitPaymentForm(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const response = await fetch("/process-payment", {
    method: "POST",
    body: formData,
  });
  const result = await response.json();
  if (result.success) {
    alert("Paiement réussi !");
  } else {
    alert("Erreur lors du paiement : " + result.error);
  }
}

