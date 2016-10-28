function Agent( x=0, y=0){
  THREE.Object3D.call(this);
  this.position.x=x;
  this.position.y=y;
 }
 
 Agent.prototype = new THREE.Object3D();
 
 Agent.prototype.sense = function(enviroment){};
 Agent.prototype.plan = function(enviroment){};
 Agent.prototype.act = function(enviroment){};
 
 function Enviroment(){
  THREE.Scene.call(this);
  }
 
 Enviroment.prototype = new THREE.Scene();
 
 Enviroment.prototype.sense = function(){
  for ( var i = 0; i < this.children.length; i++){
    if(this.children[i].sense !== undefined)
      this.children[i].sense(this);
     }
    }
Enviroment.prototype.plan = function(){
  for( var i = 0; i < this.children.length; i++){
    if(this.children[i].plan !== undefined)
      this.children[i].plan(this);
     }
    }

 Enviroment.prototype.act = function(){
  for ( var i = 0; i < this.children.length; i++){
    if(this.children[i].act !== undefined)
      this.children[i].act(this);
     }
    }
      
  function Wall(size, x, y){
    THREE.Mesh.call(this, new THREE.BoxGeometry( size, size, size), new THREE.MeshNormalMaterial());
    this.size=size;
    this.position.x=x;
    this.position.y=y;
    }
    
  Wall.prototype= new THREE.Mesh();
  
  Enviroment.prototype.setMap = function(map){
    var __offset = Math.floor(map.length/2);
    
    for (var i=0; i < map.length; i++)
      for(var j=0; j< map.length; j++){
        if(map[i][j]==="x")
          this.add(new Wall(1, j-__offset,-(i-__offset)));
         else if(map[i][j]==="r")
          this.add(new Robot(0.5, j - __offset, -(i-__offset)));
          }
      }
 function Sensor(position,direction){
  THREE.Raycaster.call(this, position, direction);
  this.colision=false;
}
Sensor.prototype= new THREE.Raycaster();

function Robot(size, x, y){
  Agent.call(this,x,y);
  
  this.sensor= new Sensor();
  this.actuator = new THREE.Mesh(new THREE.BoxGeometry(size, size,size), new THREE.MeshBasicMaterial({color: '#aa0000'}));
  this.actuator.commands = [];
  this.add(this.actuator);
}
Robot.prototype = new Agent();

Robot.prototype.sense = function(enviroment){
  this.sensor.set( this.position, new THREE.Vector3(Math.cos(this.rotation.z),Math.sin(this.rotation.z),0));
  var obstaculo = this.sensor.intersectObjects(enviroment.children,true);
  
  if((obstaculo.length>0 && (obstaculo[0].distance <=1)))
  this.sensor.colision=true;
  else
  this.sensor.colision = false;
  
}

Robot.prototype.plan = function(enviroment){
  this.actuator.commands = [];
  
  if(this.sensor.colision == true)
  this.actuator.commands.push('rotateCCW');
  else
  this.actuator.commands.push('goStraight');
}

Robot.prototype.act = function(enviroment){
  var command = this.actuator.commands.pop();
  
  if(command === undefined)
  console.log('Undefined command');
  else if (command in this.operations)
  this.operations[command](this);
  else
  console.log('Unknown command');
}

Robot.prototype.operations = {};

Robot.prototype.operations.goStraight = function(robot, distance){
  if(distance === undefined)
  distance=.05;
  robot.position.x += distance*Math.cos(robot.rotation.z);
  robot.position.y += distance*Math.sin(robot.rotation.z);
}

Robot.prototype.operations.rotateCW = function(robot, angle){
  if( angle === undefined)
  angle = -Math.PI/2;
  robot.rotation.z +=angle;
}

Robot.prototype.operations.rotateCCW = function(robot, angle){
  if( angle === undefined)
  angle = Math.PI/2;
  robot.rotation.z +=angle;
}
      
 function setup(){
  var mapa = new Array();
  mapa[0]="xxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[1]="xr    r      r     xxxxx";
  mapa[2]="xxxxxr   r      xx xxxxx";
  mapa[3]="xxxxx    r         xxxxx";
  mapa[4]="xx r       r       xxxxx";
  mapa[5]="xxrxxr   xxxxxxxxxxxxxxx";
  mapa[6]="xx x         r     xxxxx";
  mapa[7]="xx    r         xxxxxxxx";
  mapa[8]="xxxxxxxxxx   r   r xxxxx";
  mapa[9]="xx            r     xxxx";
  mapa[10]="xxxxx r          xxxxxxx";
  mapa[11]="xxxxxx r         xxxxxxx";
  mapa[12]="xxxxxxx r        xxxxxxx";
  mapa[13]="xxxxxxxx r r     xxxxxxx";
  mapa[14]="xxxxxxxxxx r     xxxxxxx";
  mapa[15]="xxxxxxxxxxxxr    xxxxxxx";
  mapa[16]="xxxxxxxxxxxxx r  xxxxxxx";
  mapa[17]="xxxxxxxxxxxxxxr rxxxxxxx";
  mapa[18]="xxxxxxxxxxxxxxx  r  xxxx";
  mapa[19]="xx  r  r      r    rxxxx";
  mapa[20]="xxxxxxxxxxxxxxxxxxxxxxxx";
  
  enviroment = new Enviroment();
  
  enviroment.setMap(mapa);
  
  camera = new THREE.PerspectiveCamera();
  camera.position.z=30;
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth*.95, window.innerHeight*.95);
  document.body.appendChild( renderer.domElement );
  
  enviroment.add(camera);
  }
  function loop(){
    requestAnimationFrame(loop);
    enviroment.sense();
    enviroment.plan();
    enviroment.act();
    renderer.render( enviroment, camera);
    }
setup();
loop();
