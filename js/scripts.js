const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector(".form button");

const qrCodeInput = container.querySelector(".form input");
const qrCodeImg = container.querySelector(".qr-code img");

// Gerar código
qrCodeBtn.addEventListener("click", () => {
  let qrCodeInputValue = qrInput.value;

  if (!qrValue) return;

  qrCodeBtn.innerText = "Gerando código...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "Código criado!";
  });
});

// Limpar área do código
qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR Code";
  }
});
