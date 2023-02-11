const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      const startX = canvas.width / 2;
      const startY = canvas.height - 20;
      const startLength = 100;
      const startAngle = -Math.PI / 2;
      const branchRatio = 0.7;
      const branchAngle = Math.PI / 6;
      
      function drawBranch(x, y, length, angle) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(
          x + length * Math.cos(angle),
          y + length * Math.sin(angle)
        );
        ctx.stroke();
        
        if (length < 4) {
          return;
        }
        
        drawBranch(
          x + length * Math.cos(angle),
          y + length * Math.sin(angle),
          length * branchRatio,
          angle + branchAngle
        );
        drawBranch(
          x + length * Math.cos(angle),
          y + length * Math.sin(angle),
          length * branchRatio,
          angle - branchAngle
        );
      }
      
      ctx.lineWidth = 2;
      drawBranch(startX, startY, startLength, startAngle);