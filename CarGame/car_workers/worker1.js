            var l=0,
            
            can=document.getElementById("can");
			ctx=can.getContext("2d");
            
            ctx.beginPath();
			ctx.lineWidth=20;
			ctx.strokeStyle="red";
			ctx.moveTo(475,l+0);
			ctx.lineTo(475,l+50);
			ctx.closePath();			
			ctx.stroke();
			
			l=l+1;