// function startGame() {
//     const targetDiv = document.getElementById('game');
//     const newHTML = `
//         <h2>Dynamically Rendered Content</h2>
//         <p>This content is added after the button click.</p>
//       `;
//       targetDiv.innerHTML = newHTML;
//   }

function startGame() {
    const canvas = document.getElementById('game');
    const ctx = canvas.getContext('2d');
    // Draw a rectangle
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, 480, 270);

    // Draw a circle
    ctx.beginPath();
    ctx.arc(100, 50, 30, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();

    // Draw text
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Hello, Canvas!', 20, 90);
  }