// <script type = "text/javascript">
  var canvas = document.querySelector("canvas");//.getBoundingClientRect();
	var col = null , rad = null;
	var time =null;
	var count = 0;
  
  

	const Ball = function(x, y, radius) {
	  	
	    this.color = col;
	    this.direction = Math.random() * Math.PI * 2;
	    this.radius = radius;
	    this.speed = Math.random() * 0.3 + 1.7;
	    this.x = x;
	    this.y = y;
	    this.shape = Math.random();

	  };



	Ball.prototype = {

        updatePosition:function(width, height, index) {

          this.x += Math.cos(this.direction) * this.speed;
          this.y += Math.sin(this.direction) * this.speed;

          if(this.x - this.radius < 0) {
          	//if (index== 9){	console.log(this.x);}
          	this.x = this.radius;

	        this.direction = Math.random() * 2.792 + 4.887; //range from (14.pi/9 to 22.pi/9)
      
            //this.direction = Math.atan2(Math.sin(this.direction), Math.cos(this.direction) * -1);

          } else if (this.x + this.radius > width) {
          	//if (index == 9){	console.log(this.x);}
            this.x = width - this.radius;
            
            //this.direction = Math.atan2(Math.sin(this.direction), Math.cos(this.direction) * -1);
	        this.direction = Math.random() * 2.793 + 1.745; //range from (5.pi/9 to 13.pi/9)

          }

          if(this.y - this.radius < 0) {
          	//if (index == 9){	console.log(this.y);}
            this.y = this.radius;

            //this.direction = Math.atan2(Math.sin(this.direction) * -1, Math.cos(this.direction));
	        this.direction = Math.random() *2.792 + 0.175; //range from (pi/18 to 17.pi/18)
          } 
          else if (this.y + this.radius > height) {
          	//if (index == 9){	console.log(this.y);}
            this.y = height - this.radius;

            //this.direction = Math.atan2(Math.sin(this.direction) * -1, Math.cos(this.direction));
	        this.direction = Math.random() * 2.793 + 3.316; //range from (19.pi/18 to 35.pi/18)
          } 
	        
          }
         
    };



      function startAll(){
      	count = 0;
      	createBalls();//make balls and all///////////////////////////
      	loop();  //start animation loop
      	myInterval = setInterval(positionCheck, 100); //start checking position of mouse
      	timeout();

      }

      function stopAll(){
        
        clearTimeout(time);
        clearInterval(myInterval);           //stop the pos check interval
      	window.cancelAnimationFrame(reqid);  //stop the animation loop

      }

      function timeout(){
      	time = setTimeout(function(){  
          document.getElementById("can").style.display="none";
          var l2=document.getElementById("b2");
          document.getElementById("b2").style.display="block"; 
          document.getElementById("b1").disabled=true;
          document.getElementById("b2").disabled=false;
          stopAll();
          console.log(count);
          //document.getElementById("demo1").innerHTML = count; ////prints points after timeout
        },15000)

      }

      //-------------------------------------------------------------------
        function getRandomColor() {
          var letters = '0123456789ABCDEF';
          var color = '#';
          for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
          } 
          //return "#DCDCDC";
          return color;
        }    

      //-----------START BUTTON CODE-----------
      $(document).ready(function(){
        document.querySelector("#b1").addEventListener("click",function(){
            	
        var g=document.getElementById("can");
        g.style.display="block";
        g.scrollIntoView();
        var l=document.getElementById("b3");
        l.style.display="block";
        var l1=document.getElementById("b1");
        l1.style.display="none";
        var l2=document.getElementById("b2");
        l2.style.display="none";
        $("canvas").css("background-color",getRandomColor());

        startAll();
      })
      })

      //-----------RELOAD BUTTON CODE-----------
      $(document).ready(function(){
        document.querySelector("#b3").addEventListener("click",function(){
         // var RGB = [Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 232)];
         
         stopAll();
               
        var g=document.getElementById("can");
        g.style.display="block";
        g.scrollIntoView();
        var l2=document.getElementById("b2");
        l2.style.display="none";
        $("canvas").css("background-color",getRandomColor());

        startAll();
        
      })
      })

      

    
        function positionCheck(){
        	if(canvas.addEventListener){
      		// console.log("inside pos chech");

        	canvas.addEventListener("mousemove",myfunction, false);
      		//console.log("Activated event listener");

        	function myfunction(evt){
        	var bounds = canvas.getBoundingClientRect();
        	//console.log("INside event listener");
        	cx = Math.floor(balls[balls.length-1].x);
        	cy = Math.floor(balls[balls.length-1].y);
        	x = evt.clientX - bounds.left; 
        	y = evt.clientY - bounds.top;
        	// console.log(cx+' '+cy)
        	xdist = x-cx;
        	ydist = y-cy;
        	if(rad*rad > xdist*xdist + ydist*ydist){
        		//console.log("inside inc condition");
        	//if(x>cx-rad && x<cx+rad && y>cy-rad && y<cy+rad){
        	//document.getElementById("demo").innerHTML = x + ', '+y+ ", "+ cx+", "+cy+ ', '+rad
        	//console.log(count++)
        	document.getElementById("demo").innerHTML = count++;  //not this guy's fault :/
        	//document.getElementById("demo").innerHTML = x + ', '+y+ ", "+ cx+", "+cy+ ', '+rad+'   '+bounds.top
        	//count++;
        	}
        	
        	canvas.removeEventListener("mousemove",myfunction);
        	}
        	
          }
        } 	

    

      var context = document.querySelector("canvas").getContext("2d");
      var reqid = undefined;
      var myInterval =  undefined;
      var balls = new Array();

      
      function createBalls(){
      	   let x = context.canvas.width * 0.5;
      	   let y = context.canvas.height * 0.5;
           console.log(x,y);

      	  balls.length = 0; //clearing the existing balls for each reload
      	  //var RGB = [105,105,105];
	      var RGB = [Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 232)];
	      for(let index = 0; index < 10; index ++) {
	        col = "rgb(" + RGB[0] + "," + RGB[1] + "," + RGB[2]+ ")";
	        balls.push(new Ball(x, y, Math.floor(Math.random() * 7 + 38)));
	        RGB[2] += 3;
      		}
      	//col = "rgb(256,256,256)"
	     col = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256)+")";
	     balls.push(new Ball(x, y, Math.floor(Math.random() * 7 + 38)));

	     rad = balls[balls.length-1].radius;
      
      }

      function loop() {

        reqid = window.requestAnimationFrame(loop);
        // let height = document.documentElement.clientHeight;
        // let width  = document.documentElement.clientWidth;

        let height = context.canvas.height;
        let width = context.canvas.width;
        context.canvas.height = height;
        context.canvas.width = width;

       // console.log("hello");
        for(let index = 0; index < balls.length; index ++) {

          let ball = balls[index];
          context.fillStyle = ball.color;
          context.beginPath();
          if (ball.shape > 0.65)
          context.rect(ball.x-ball.radius,ball.y-ball.radius,2*ball.radius,2*ball.radius);
          else
          context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
          context.fill();
          context.lineWidth = 1;
          context.strokeStyle = "black";
          context.stroke();

          ball.updatePosition(width, height, index);

        
        }

      }

      // loop();
      // console.log("checkpoint 1");
      // setInterval(positionCheck, 100);

    // </script>