function desenharQuadrado(ctx, x, y, tamanho, cor) {
  ctx.fillStyle = cor;
  ctx.fillRect(x, y, tamanho, tamanho);
}

function desenharLinha(ctx, x1, y1, x2, y2, cor, largura = 1) {
  ctx.strokeStyle = cor;
  ctx.lineWidth = largura;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function desenharArco(ctx, x, y, raio, inicio, fim, cor, preenchido = true) {
  ctx.beginPath();
  ctx.arc(x, y, raio, inicio, fim);
  if (preenchido) {
    ctx.fillStyle = cor;
    ctx.fill();
  } else {
    ctx.strokeStyle = cor;
    ctx.stroke();
  }
}

function escrever(ctx, texto, x, y, cor = "black", fonte = "20px Arial") {
  ctx.fillStyle = cor;
  ctx.font = fonte;
  ctx.fillText(texto, x, y);
}

// === Desenho Abstrato ===
function arteAbstrata(ctx) {
  desenharQuadrado(ctx, 0, 0, 50, "blue");
  desenharQuadrado(ctx, 250, 0, 50, "red");
  desenharQuadrado(ctx, 0, 250, 50, "yellow");
  desenharQuadrado(ctx, 250, 250, 50, "black");
  desenharQuadrado(ctx, 125, 125, 50, "red");
  desenharQuadrado(ctx, 50, 100, 25, "cyan");
  desenharQuadrado(ctx, 225, 100, 25, "cyan");

  desenharLinha(ctx, 0, 0, 150, 150, "blue");
  desenharLinha(ctx, 300, 0, 150, 150, "red");
  desenharLinha(ctx, 150, 0, 150, 300, "black");
  desenharLinha(ctx, 0, 150, 300, 150, "black");

  desenharArco(ctx, 150, 150, 20, 0, Math.PI * 2, "cyan");
  desenharArco(ctx, 75, 225, 10, 0, Math.PI * 2, "yellow");
  desenharArco(ctx, 225, 225, 10, 0, Math.PI * 2, "yellow");
  desenharArco(ctx, 150, 300, 50, Math.PI, Math.PI * 2, "cyan");

  
}

// === Desenho Casa + Árvores ===
function cenarioCasa(ctx) {
  ctx.fillStyle = "#a8f7f0"; // céu
  ctx.fillRect(0, 0, 300, 300);

  desenharArco(ctx, 250, 50, 30, 0, Math.PI * 2, "yellow"); // sol
  desenharQuadrado(ctx, 0, 200, 300, "gray"); // chão

  // lago (forma simples)
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.moveTo(0, 300);
  ctx.lineTo(0, 250);
  ctx.quadraticCurveTo(50, 230, 80, 260);
  ctx.lineTo(80, 300);
  ctx.fill();

  // casa
  desenharQuadrado(ctx, 110, 150, 80, "saddlebrown"); // base
  ctx.fillStyle = "orangered"; // telhado
  ctx.beginPath();
  ctx.moveTo(110, 150);
  ctx.lineTo(150, 110);
  ctx.lineTo(190, 150);
  ctx.closePath();
  ctx.fill();

  // janelas
  desenharQuadrado(ctx, 120, 160, 20, "lightblue");
  desenharQuadrado(ctx, 160, 160, 20, "lightblue");

  // árvores
  desenharArco(ctx, 60, 180, 20, 0, Math.PI * 2, "green");
  desenharQuadrado(ctx, 55, 200, 10, "saddlebrown");

  desenharArco(ctx, 240, 180, 20, 0, Math.PI * 2, "green");
  desenharQuadrado(ctx, 235, 200, 10, "saddlebrown");
}

// === Inicializar ===
window.onload = () => {
  const ctx1 = document.getElementById("canvas1").getContext("2d");
  const ctx2 = document.getElementById("canvas2").getContext("2d");

  arteAbstrata(ctx1);
  cenarioCasa(ctx2);
};
