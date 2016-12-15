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
	 this.turno=0;
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
 function Sensor(position,direction){
  THREE.Raycaster.call(this, position, direction);
  this.colision=false;
}
Sensor.prototype= new THREE.Raycaster();

function Pieza(equipo,x, y){
	Agent.call(this,x,y);
	this.team=equipo;}
Pieza.prototype = new Agent();
	
 
var keyboard = new THREEx.KeyboardState();
var TEXTURA = new Object();
////////////////////////////////////////////////////////////////////////////////////
function Torrem(material){
  var figura = new THREE.Shape();
  var figura1 = new THREE.Shape();
var figura2 = new THREE.Shape();
var figura3 = new THREE.Shape();
var troncoForma = new THREE.CylinderGeometry(10, 20, 40);
var basee = new THREE.CylinderGeometry(24,24,8);
basee.translate(0,-20,0);
var esferaForma = new THREE.BoxGeometry( 35, 35, 35);
esferaForma.translate(0,40,0);
var baseabajo = new THREE.CylinderGeometry(32,32,8);
baseabajo.translate(0,-24,0);
figura.moveTo(0, 0);
figura.lineTo(2, 0);
figura.lineTo(2, 2);
figura.lineTo(0, 2);
figura.lineTo(0, 0);
figura1.moveTo(20, 20);
figura1.lineTo(20, 22);
figura1.lineTo(22, 22);
figura1.lineTo(22, 20);
figura1.lineTo(20, 20);
figura2.moveTo(0, 20);
figura2.lineTo(0, 22);
figura2.lineTo(2, 22);
figura2.lineTo(2, 20);
figura2.lineTo(0, 20);
figura3.moveTo(20, 0);
figura3.lineTo(20, 2);
figura3.lineTo(22, 2);
figura3.lineTo(22, 0);
figura3.lineTo(20, 0);
var forma1 = new THREE.ExtrudeGeometry(figura, {amount: 1} );
var forma2 = new THREE.ExtrudeGeometry(figura1, {amount: 1} );
var forma3 = new THREE.ExtrudeGeometry(figura2, {amount: 1} );
var forma4 = new THREE.ExtrudeGeometry(figura3, {amount: 1} );
forma1.rotateX( Math.PI/2 );
forma2.rotateX( Math.PI/2 );
forma3.rotateX( Math.PI/2 );
forma4.rotateX( Math.PI/2 );
forma1.translate(-11,60,-13);
forma2.translate(-11,60,-13);
forma3.translate(-11,60,-13);
forma4.translate(-11,60,-13);
var malla = new THREE.Mesh(forma1);
var malla1 = new THREE.Mesh(forma2);
var malla2 = new THREE.Mesh(forma3);
var malla3 = new THREE.Mesh(forma4);
var baseeMalla = new THREE.Mesh(basee);
var baseAbajomalla = new THREE.Mesh(baseabajo);
var troncoMalla = new THREE.Mesh(troncoForma);
var esferaMalla = new THREE.Mesh(esferaForma);
var arbolForma = new THREE.Geometry();
arbolForma.merge(malla.geometry, malla.matrix);
arbolForma.merge(malla1.geometry, malla1.matrix);
arbolForma.merge(malla2.geometry, malla2.matrix);
arbolForma.merge(malla3.geometry, malla3.matrix);
arbolForma.merge(baseAbajomalla.geometry, baseAbajomalla.matrix);
arbolForma.merge(baseeMalla.geometry, baseeMalla.matrix);
arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);
THREE.Mesh.call(this, arbolForma, material);

}
////////////////////////////////////////////////////////////////////////
function Alfilm(material){
var troncoForma = new THREE.CylinderGeometry(10, 20, 50);
var basee = new THREE.CylinderGeometry(24,24,8);
basee.translate(0,-20,0);
var esferaForma = new THREE.SphereGeometry(20);
esferaForma.translate(0,50,0);
var baseabajo = new THREE.CylinderGeometry(32,32,8);
baseabajo.translate(0,-24,0);
var baseeMalla = new THREE.Mesh(basee);
var baseAbajomalla = new THREE.Mesh(baseabajo);
var troncoMalla = new THREE.Mesh(troncoForma);
var esferaMalla = new THREE.Mesh(esferaForma);
var arbolForma = new THREE.Geometry();
arbolForma.merge(baseAbajomalla.geometry, baseAbajomalla.matrix);
arbolForma.merge(baseeMalla.geometry, baseeMalla.matrix);
arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);
THREE.Mesh.call(this, arbolForma, material);
}
///////////////////////////////////////////////////////////////////////////////////////
function Reym(material){
var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
  puntos.push( new THREE.Vector2( 
            Math.sin( i * 0.2 ) * 15 + 50, ( i - 5 ) * 2 ) );
}
var forma = new THREE.LatheGeometry(puntos);
forma.scale(.25,.25,.25);
forma.translate(0,1,0);
var mallag = new THREE.Mesh( forma );
var baseabajo = new THREE.CylinderGeometry(32,32,8);
baseabajo.translate(0,-24,0);
var basee = new THREE.CylinderGeometry(24,24,8);
basee.translate(0,-20,0);
var troncoForma = new THREE.CylinderGeometry(10, 20, 40);
var baseeMalla = new THREE.Mesh(basee);
var baseAbajomalla = new THREE.Mesh(baseabajo);
var troncoMalla = new THREE.Mesh(troncoForma);
var figura = new THREE.Shape();
figura.moveTo(0, 0);
figura.lineTo(0, 10);
figura.lineTo(10, 10);
figura.lineTo(10, 0);
figura.lineTo(20, 0);
figura.lineTo(20, -10);
figura.lineTo(10, -10);
figura.lineTo(10, -20);
figura.lineTo(0, -20);
figura.lineTo(0, -10);
figura.lineTo(-10, -10);
figura.lineTo(-10, 0);
figura.lineTo(0, 0);
var forma = new THREE.ExtrudeGeometry( figura, {amount: 1} );
forma.scale(.4,.4,.4);
forma.translate(-2,35,-5);
forma.merge(mallag.geometry, mallag.matrix);
forma.merge(baseAbajomalla.geometry, baseAbajomalla.matrix);
forma.merge(baseeMalla.geometry, baseeMalla.matrix);
forma.merge(troncoMalla.geometry, troncoMalla.matrix);
THREE.Mesh.call(this, forma, material);
}
///////////////////////////////////////////////////////////////////////////////////////
function Reinam(material){
var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
  puntos.push( new THREE.Vector2( 
            Math.sin( i * 0.2 ) * 15 + 50, ( i - 5 ) * 2 ) );
}
var forma = new THREE.LatheGeometry(puntos);
forma.scale(.3,.3,.3);
forma.translate(0,1,0);
var mallag = new THREE.Mesh( forma );
var baseabajo = new THREE.CylinderGeometry(32,32,8);
baseabajo.translate(0,-24,0);
var basee = new THREE.CylinderGeometry(24,24,8);
basee.translate(0,-20,0);
var troncoForma = new THREE.CylinderGeometry(10, 20, 40);
var baseeMalla = new THREE.Mesh(basee);
var baseAbajomalla = new THREE.Mesh(baseabajo);
var troncoMalla = new THREE.Mesh(troncoForma);
forma.merge(mallag.geometry, mallag.matrix);
forma.merge(baseAbajomalla.geometry, baseAbajomalla.matrix);
forma.merge(baseeMalla.geometry, baseeMalla.matrix);
forma.merge(troncoMalla.geometry, troncoMalla.matrix);
THREE.Mesh.call(this, forma, material);
}
///////////////////////////////////////////////////////////////////////////////////////
function Caballom(material){
var baseabajo = new THREE.CylinderGeometry(32,32,8);
baseabajo.translate(0,-24,0);
var basee = new THREE.CylinderGeometry(24,24,8);
basee.translate(0,-20,0);
var baseeMalla = new THREE.Mesh(basee);
var baseAbajomalla = new THREE.Mesh(baseabajo);
var figura = new THREE.Shape();
figura.moveTo(0, 0);
figura.lineTo(-1, 2);
figura.lineTo(-1, 2);
figura.lineTo(-1, 5);
figura.lineTo(1, 8);
figura.lineTo(4, 10);
figura.lineTo(6, 11);
figura.lineTo(6, 12);
figura.lineTo(8, 10);
figura.lineTo(9, 9);
figura.lineTo(7, 7);
figura.lineTo(5, 6);
figura.lineTo(4, 6);
figura.lineTo(5, 4);
figura.lineTo(6, 2);
figura.lineTo(6, 0);
figura.lineTo(0, 0);
var forma = new THREE.ExtrudeGeometry( figura, {amount: 10} );
forma.translate(-3,-5,-5);
forma.scale(2,2,2);
forma.merge(baseAbajomalla.geometry, baseAbajomalla.matrix);
forma.merge(baseeMalla.geometry, baseeMalla.matrix);
THREE.Mesh.call(this, forma, material);
}
///////////////////////////////////////////////////////////////////////////////////////////////
function Peonm(material){
	var troncoForma = new THREE.CylinderGeometry(10, 20, 50);
var basee = new THREE.CylinderGeometry(24,24,8);
basee.translate(0,-20,0);
var esferaForma = new THREE.SphereGeometry(20);
esferaForma.translate(0,50,0);
var baseabajo = new THREE.CylinderGeometry(32,32,8);
baseabajo.translate(0,-24,0);
var baseeMalla = new THREE.Mesh(basee);
var baseAbajomalla = new THREE.Mesh(baseabajo);
var troncoMalla = new THREE.Mesh(troncoForma);
var esferaMalla = new THREE.Mesh(esferaForma);
var arbolForma = new THREE.Geometry();
arbolForma.merge(baseAbajomalla.geometry, baseAbajomalla.matrix);
arbolForma.merge(baseeMalla.geometry, baseeMalla.matrix);
arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);
THREE.Mesh.call(this, arbolForma, material);
this.scale.set(.7, .7, .7);
}
///////////////////////////////////////////////////////////////////////////////////////////////
function Casilla(material)
{
	cuadro = new THREE.BoxGeometry( 60, 1, 60);
	THREE.Mesh.call(this, cuadro, material);
}
function Tablero(material1, material2)
{
	THREE.Object3D(this);
	var tablero = new Array(); 
	for ( var XX = 0; XX < 8; XX ++ ){
	for ( var ZZ = 0; ZZ < 8; ZZ ++ ){
	if(((XX%2)&&(!(ZZ%2)))||((!(XX%2))&&(ZZ%2))){
	tablero[(XX*8)+ZZ]= new Casilla( TEXTURA.material1 );
	tablero[(XX*8)+ZZ].translateX(XX*60);
	tablero[(XX*8)+ZZ].translateZ(ZZ * 60);
	}
	else{
		tablero[(XX*8)+ZZ]= new Casilla(TEXTURA.material2 );
		tablero[(XX*8)+ZZ].translateX(XX*60);
		tablero[(XX*8)+ZZ].translateZ(ZZ * 60);
	}
	this.add(  tablero [(XX*8)+ZZ] );
}}
}
///////////////////////////////////////////////////////////////////////////////////////////////
Tablero.prototype = new THREE.Object3D();
Casilla.prototype = new THREE.Mesh();
Torrem.prototype = new THREE.Mesh();
Alfilm.prototype = new THREE.Mesh();
Peonm.prototype = new THREE.Mesh();
Reinam.prototype = new THREE.Mesh();
Reym.prototype = new THREE.Mesh();
Caballom.prototype = new THREE.Mesh();
function Torre(material1,material2,equipo, x, y){
  Pieza.call(this,equipo,x,y);
  this.der=0;
  this.izq=0;
  this.aba=0;
  this.arr=0;
  this.sensor= new Sensor();
  this.actuator = new Torrem(material1);
  this.phantom = new Torrem(material2);
  this.add(this.actuator);
  this.add(this.phantom);
	this.selec=0;
  this.banderaX=0;
  this.banderaZ=0;
}
Torre.prototype = new Pieza();
Torre.prototype.sense = function(enviroment){
  this.sensor.set( this.phantom.position, new THREE.Vector3(0,1,0));
	for(var i=0;i<enviroment.children.length;i++){
  var obstaculo = this.sensor.intersectObject(enviroment.children[i],true);
if((obstaculo.length>0 && (obstaculo[0].distance <=60))){
  this.sensor.colision=true;
this.oa=i;}
  else{
  this.sensor.colision = false;
	  this.oa=0;}
	}

}
Torre.prototype.plan = function(enviroment){
	  if(this.phantom.position.x!=this.actuator.position.x)
  this.phantom.position.z=this.actuator.position.z;
  else if (this.phantom.position.z!=this.actuator.position.z)
  this.phantom.position.x=this.actuator.position.x;
  if(this.sensor.colision == true){
	  this.cont=1;
	  if(this.oa>0)
		  if(this.phantom.position.x===this.actuator.position.x&&this.phantom.position.z===this.actuator.position.z)
			  enviroment.children[this.oa].visible=false;
	  
  }
if(this.cont>=1&&this.sensor.colision==false){
	this.phantom.position.x=this.actuator.position.x;
	  this.phantom.position.z=this.actuator.position.z;
	  this.cont=0;
}
  if(this.cont>1){
	this.phantom.position.x=this.actuator.position.x;
	  this.phantom.position.z=this.actuator.position.z;
	  this.cont=0;
}
	if(this.oa>0&&enviroment.children[oa].team==this.team){
	this.phantom.position.x=this.actuator.position.x;
	  this.phantom.position.z=this.actuator.position.z;
	  this.cont=0
	}
}
Torre.prototype.act = function(enviroment){
  

  
	 if(this.banderaZ==0&&this.banderaX==0&&this.selec==1){
	 if (keyboard.pressed("right")||keyboard.pressed("D")) {
		 if (this.der==0) {
this.phantom.translateX(60);
	this.der=1;
		 }
}
	else
	this.der=0;
     if (keyboard.pressed("left")||keyboard.pressed("A")) {
		 if (this.izq==0) {
this.phantom.translateX(-60);
	this.izq=1;
		 }
}
	 else
	this.izq=0;
     if (keyboard.pressed("up")||keyboard.pressed("W")) {
		 if (this.arr==0) {
this.phantom.translateZ(-60);
	this.arr=1;
		 }
}
	     else
	this.arr=0;
     if (keyboard.pressed("down")||keyboard.pressed("S")) {
		 if (this.aba==0) {
this.phantom.translateZ(60);
	this.aba=1;
		 }
}
	     else
	this.aba=0;	
	}
	if((this.phantom.position.x != this.actuator.position.x) && this.banderaX===1){
		this.velocidadx=-(this.actuator.position.x-this.phantom.position.x)/Math.abs(this.actuator.position.x-this.phantom.position.x);
		this.actuator.translateX(this.velocidadx);
	}
	if((this.phantom.position.z != this.actuator.position.z)&&this.banderaZ===1){
		this.velocidadz=-(this.actuator.position.z-this.phantom.position.z)/Math.abs(this.actuator.position.z-this.phantom.position.z);
		this.actuator.translateZ(this.velocidadz);
	}
	if(keyboard.pressed("space")){
		this.banderaX=1;
		this.banderaZ=1;
		this.selec=0;
		enviroment.turno=enviroment.turno+1;
		
	}
	if((this.phantom.position.x === this.actuator.position.x))
		this.banderaX=0;
	if((this.phantom.position.z === this.actuator.position.z))
		this.banderaZ=0; 
  }


function Alfil(material1,material2,equipo, x, y){
 Pieza.call(this,equipo,x,y);
  this.der=0;
  this.izq=0;
  this.aba=0;
  this.arr=0;
  this.sensor= new Sensor();
  this.actuator = new Alfilm(material1);
  this.phantom = new Alfilm(material2);
  this.add(this.actuator);
  this.add(this.phantom);
  this.selec=0;
  this.banderaX=0;
  this.banderaZ=0;
}

Alfil.prototype = new Pieza();

Alfil.prototype.sense = function(enviroment){
  this.sensor.set( this.phantom.position, new THREE.Vector3(0,1,0));
	for(var i=0;i<enviroment.children.length;i++){
  var obstaculo = this.sensor.intersectObject(enviroment.children[i],true);
if((obstaculo.length>0 && (obstaculo[0].distance <=60))){
  this.sensor.colision=true;
this.oa=i;}
  else{
  this.sensor.colision = false;
	  this.oa=0;}
	}

 
  
}

Alfil.prototype.plan = function(enviroment){
  if(Math.abs(this.phantom.position.x-this.actuator.position.x)!=Math.abs(this.phantom.position.z-this.actuator.position.z)){
  this.phantom.position.z=this.actuator.position.z;
  this.phantom.position.x=this.actuator.position.x;
  }
    if(this.sensor.colision == true){
	  this.cont=1;
	  if(this.oa>0)
		  if(this.phantom.position.x===this.actuator.position.x&&this.phantom.position.z===this.actuator.position.z)
			  enviroment.children[this.oa].visible=false;
	  
  }
if(this.cont>=1&&this.sensor.colision==false){
	this.phantom.position.x=this.actuator.position.x;
	  this.phantom.position.z=this.actuator.position.z;
	  this.cont=0;
}
  if(this.cont>1){
	this.phantom.position.x=this.actuator.position.x;
	  this.phantom.position.z=this.actuator.position.z;
	  this.cont=0;
}
	if(this.oa>0&&enviroment.children[oa].team==this.team){
	this.phantom.position.x=this.actuator.position.x;
	  this.phantom.position.z=this.actuator.position.z;
	  this.cont=0
	}
}

Alfil.prototype.act = function(enviroment){
		 if(this.banderaZ==0&&this.banderaX==0&&this.selec==1){
	 if (keyboard.pressed("right")||keyboard.pressed("D")) {
		 if (this.der==0) {
this.phantom.translateX(60);
this.phantom.translateZ(-60);
	this.der=1;
		 }
}
	else
	this.der=0;
     if (keyboard.pressed("left")||keyboard.pressed("A")) {
		 if (this.izq==0) {
this.phantom.translateX(-60);
this.phantom.translateZ(60);
	this.izq=1;
		 }
}
	 else
	this.izq=0;
     if (keyboard.pressed("up")||keyboard.pressed("W")) {
		 if (this.arr==0) {
this.phantom.translateX(-60);
this.phantom.translateZ(-60);
	this.arr=1;
		 }
}
	
	     else
	this.arr=0;
     if (keyboard.pressed("down")||keyboard.pressed("S")) {
		 if (this.aba==0) {
this.phantom.translateX(60);
this.phantom.translateZ(60);
	this.aba=1;
		 }
}

	     else
	this.aba=0;	
	}
	if((this.phantom.position.x != this.actuator.position.x) && this.banderaX===1){
		this.velocidadx=-(this.actuator.position.x-this.phantom.position.x)/Math.abs(this.actuator.position.x-this.phantom.position.x);
		this.actuator.translateX(this.velocidadx);
	}
	if((this.phantom.position.z != this.actuator.position.z)&&this.banderaZ===1){
		this.velocidadz=-(this.actuator.position.z-this.phantom.position.z)/Math.abs(this.actuator.position.z-this.phantom.position.z);
		this.actuator.translateZ(this.velocidadz);
	}
	if(keyboard.pressed("space")){
		this.banderaX=1;
		this.banderaZ=1;
		this.selec=0;
		enviroment.turno=enviroment.turno+1;
	}
	if((this.phantom.position.x === this.actuator.position.x))
		this.banderaX=0;
	if((this.phantom.position.z === this.actuator.position.z))
		this.banderaZ=0; 
  
 
  
}

function Peon(material1,material2,equipo, x, y){
  Pieza.call(this,equipo,x,y);
  this.der=0;
  this.izq=0;
  this.aba=0;
  this.arr=0;
  this.sensor= new Sensor();
  this.actuator = new Peonm(material1);
  this.phantom = new Peonm(material2);
  this.add(this.actuator);
  this.add(this.phantom);
 this.selec=0;
  this.banderaX=0;
  this.banderaZ=0;
  
}

Peon.prototype = new Pieza();

Peon.prototype.sense = function(enviroment){
   this.sensor.set( this.phantom.position, new THREE.Vector3(0,1,0));
	for(var i=0;i<enviroment.children.length;i++){
  var obstaculo = this.sensor.intersectObject(enviroment.children[i],true);
if((obstaculo.length>0 && (obstaculo[0].distance <=60))){
  this.sensor.colision=true;
this.oa=i;}
  else{
  this.sensor.colision = false;
	  this.oa=0;}
	}
 
}

Peon.prototype.plan = function(enviroment){
   if(this.team=0){
  if(this.actuator.position.x-this.phantom.position.x>60)
  this.phantom.position.x=this.actuator.position.x+60;
  else if (this.actuator.position.x-this.phantom.position.x<0)
  this.phantom.position.x=this.actuator.position.x;
  else if (Math.abs(this.actuator.position.z-this.phantom.position.z)>0&&this.sensor.colision==false)
  this.phantom.position.z=this.actuator.position.z;
  else if (Math.abs(this.actuator.position.z-this.phantom.position.z)>60)
  this.phantom.position.z=this.actuator.position.z;}
 if(this.team=1){
 if(this.actuator.position.x-this.phantom.position.x<-60)
  this.phantom.position.x=this.actuator.position.x+60;
  else if (this.actuator.position.x-this.phantom.position.x<0)
  this.phantom.position.x=this.actuator.position.x;
  else if (Math.abs(this.actuator.position.z-this.phantom.position.z)>0&&this.sensor.solision==false)
  this.phantom.position.z=this.actuator.position.z;
  else if (Math.abs(this.actuator.position.z-this.phantom.position.z)>60)
  this.phantom.position.z=this.actuator.position.z;}
   if(this.sensor.colision == true){
	  this.cont=1;
	  if(this.oa>0&&enviroment.children[oa].team!=this.team)
		  if(this.phantom.position.x===this.actuator.position.x&&this.phantom.position.z===this.actuator.position.z)
			  enviroment.children[this.oa].visible=false;
	  
  }
if(this.cont>=1&&this.sensor.colision==false){
	this.phantom.position.x=this.actuator.position.x;
	  this.phantom.position.z=this.actuator.position.z;
	  this.cont=0;
}
  if(this.cont>1){
	this.phantom.position.x=this.actuator.position.x;
	  this.phantom.position.z=this.actuator.position.z;
	  this.cont=0;
}
if(this.oa>0&&enviroment.children[oa].team==this.team){
	this.phantom.position.x=this.actuator.position.x;
	  this.phantom.position.z=this.actuator.position.z;
	  this.cont=0
	}	
}

Peon.prototype.act = function(enviroment){

 if(this.banderaZ==0&&this.banderaX==0&&this.selec==1){
	 if (keyboard.pressed("right")||keyboard.pressed("D")) {
		 if (this.der==0) {
this.phantom.translateX(60);
	this.der=1;
		 }
}
	else
	this.der=0;
     if (keyboard.pressed("left")||keyboard.pressed("A")) {
		 if (this.izq==0) {
this.phantom.translateX(-60);
	this.izq=1;
		 }
}
	 else
	this.izq=0;
     if (keyboard.pressed("up")||keyboard.pressed("W")) {
		 if (this.arr==0) {
this.phantom.translateZ(-60);
	this.arr=1;
		 }
}
	
	     else
	this.arr=0;
     if (keyboard.pressed("down")||keyboard.pressed("S")) {
		 if (this.aba==0) {
this.phantom.translateZ(60);
	this.aba=1;
		 }
}

	     else
	this.aba=0;	
	}
	if((this.phantom.position.x != this.actuator.position.x) && this.banderaX===1){
		this.velocidadx=-(this.actuator.position.x-this.phantom.position.x)/Math.abs(this.actuator.position.x-this.phantom.position.x);
		this.actuator.translateX(this.velocidadx);
	}
	if((this.phantom.position.z != this.actuator.position.z)&&this.banderaZ===1){
		this.velocidadz=-(this.actuator.position.z-this.phantom.position.z)/Math.abs(this.actuator.position.z-this.phantom.position.z);
		this.actuator.translateZ(this.velocidadz);
	}
	if(keyboard.pressed("space")){
		this.banderaX=1;
		this.banderaZ=1;
		this.selec=0;
		enviroment.turno=enviroment.turno+1;
	}
	if((this.phantom.position.x === this.actuator.position.x))
		this.banderaX=0;
	if((this.phantom.position.z === this.actuator.position.z))
		this.banderaZ=0; 
 
  
}

function Rey(material1,material2,equipo, x, y){
  Pieza.call(this,equipo,x,y);
  this.der=0;
  this.izq=0;
  this.aba=0;
  this.arr=0;
  this.sensor= new Sensor();
  this.actuator = new Reym(material1);
  this.phantom = new Reym(material2);
  this.add(this.actuator);
  this.add(this.phantom);
 this.selec=0;
  this.banderaX=0;
  this.banderaZ=0;
  
}

Rey.prototype = new Pieza();

Rey.prototype.sense = function(enviroment){
   this.sensor.set( this.phantom.position, new THREE.Vector3(0,1,0));
	for(var i=0;i<enviroment.children.length;i++){
  var obstaculo = this.sensor.intersectObject(enviroment.children[i],true);
if((obstaculo.length>0 && (obstaculo[0].distance <=60))){
  this.sensor.colision=true;
this.oa=i;}
  else{
  this.sensor.colision = false;
	  this.oa=0;}
	}
 
}

Rey.prototype.plan = function(enviroment){
  if(Math.abs(this.actuator.position.x-this.phantom.position.x)>60)
  this.phantom.position.x=this.actuator.position.x;
  else if (Math.abs(this.actuator.position.z-this.phantom.position.z)>60)
  this.phantom.position.z=this.actuator.position.z;
   if(this.sensor.colision == true){
	  this.cont=1;
	  if(this.oa>0&&enviroment.children[oa].team!=this.team)
		  if(this.phantom.position.x===this.actuator.position.x&&this.phantom.position.z===this.actuator.position.z)
			  enviroment.children[this.oa].visible=false;
	  
  }
if(this.cont>=1&&this.sensor.colision==false){
	this.phantom.position.x=this.actuator.position.x;
	  this.phantom.position.z=this.actuator.position.z;
	  this.cont=0;
}
  if(this.cont>1){
	this.phantom.position.x=this.actuator.position.x;
	  this.phantom.position.z=this.actuator.position.z;
	  this.cont=0;
}
if(this.oa>0&&enviroment.children[oa].team==this.team){
	this.phantom.position.x=this.actuator.position.x;
	  this.phantom.position.z=this.actuator.position.z;
	  this.cont=0
	}	
}

Rey.prototype.act = function(enviroment){

 if(this.banderaZ==0&&this.banderaX==0&&this.selec==1){
	 if (keyboard.pressed("right")||keyboard.pressed("D")) {
		 if (this.der==0) {
this.phantom.translateX(60);
	this.der=1;
		 }
}
	else
	this.der=0;
     if (keyboard.pressed("left")||keyboard.pressed("A")) {
		 if (this.izq==0) {
this.phantom.translateX(-60);
	this.izq=1;
		 }
}
	 else
	this.izq=0;
     if (keyboard.pressed("up")||keyboard.pressed("W")) {
		 if (this.arr==0) {
this.phantom.translateZ(-60);
	this.arr=1;
		 }
}
	
	     else
	this.arr=0;
     if (keyboard.pressed("down")||keyboard.pressed("S")) {
		 if (this.aba==0) {
this.phantom.translateZ(60);
	this.aba=1;
		 }
}

	     else
	this.aba=0;	
	}
	if((this.phantom.position.x != this.actuator.position.x) && this.banderaX===1){
		this.velocidadx=-(this.actuator.position.x-this.phantom.position.x)/Math.abs(this.actuator.position.x-this.phantom.position.x);
		this.actuator.translateX(this.velocidadx);
	}
	if((this.phantom.position.z != this.actuator.position.z)&&this.banderaZ===1){
		this.velocidadz=-(this.actuator.position.z-this.phantom.position.z)/Math.abs(this.actuator.position.z-this.phantom.position.z);
		this.actuator.translateZ(this.velocidadz);
	}
	if(keyboard.pressed("space")){
		this.banderaX=1;
		this.banderaZ=1;
		this.selec=0;
		enviroment.turno=enviroment.turno+1;
	}
	if((this.phantom.position.x === this.actuator.position.x))
		this.banderaX=0;
	if((this.phantom.position.z === this.actuator.position.z))
		this.banderaZ=0; 
 
  
}

function Reina(material1,material2,equipo, x, y){
  Pieza.call(this,equipo,x,y);
  this.der=0;
  this.izq=0;
  this.aba=0;
  this.arr=0;
  this.sensor= new Sensor();
  this.actuator = new Reinam(material1);
  this.phantom = new Reinam(material2);
  this.add(this.actuator);
  this.add(this.phantom);
 this.selec=0;
  this.banderaX=0;
  this.banderaZ=0;
  
}

Reina.prototype = new Pieza();

Reina.prototype.sense = function(enviroment){
   this.sensor.set( this.phantom.position, new THREE.Vector3(0,1,0));
	for(var i=0;i<enviroment.children.length;i++){
  var obstaculo = this.sensor.intersectObject(enviroment.children[i],true);
if((obstaculo.length>0 && (obstaculo[0].distance <=60))){
  this.sensor.colision=true;
this.oa=i;}
  else{
  this.sensor.colision = false;
	  this.oa=0;}
	}
 
}

Reina.prototype.plan = function(enviroment){
  if((Math.abs(this.phantom.position.x-this.actuator.position.x)==Math.abs(this.phantom.position.z-this.actuator.position.z))||(this.phantom.position.x==this.actuator.position.x)||(this.phantom.position.z!=this.actuator.position.z))
  this.correct=1;
else
	this.correct=0;
   if(this.sensor.colision == true){
	  this.cont=1;
	  if(this.oa>0&&enviroment.children[oa].team!=this.team)
		  if(this.phantom.position.x===this.actuator.position.x&&this.phantom.position.z===this.actuator.position.z)
			  enviroment.children[this.oa].visible=false;
	  
  }
if(this.cont>=1&&this.sensor.colision==false){
	this.phantom.position.x=this.actuator.position.x;
	  this.phantom.position.z=this.actuator.position.z;
	  this.cont=0;
}
  if(this.cont>1){
	this.phantom.position.x=this.actuator.position.x;
	  this.phantom.position.z=this.actuator.position.z;
	  this.cont=0;
}
if(this.oa>0&&enviroment.children[oa].team==this.team){
	this.phantom.position.x=this.actuator.position.x;
	  this.phantom.position.z=this.actuator.position.z;
	  this.cont=0
	}	
}

Reina.prototype.act = function(enviroment){

 if(this.banderaZ==0&&this.banderaX==0&&this.selec==1){
	 if (keyboard.pressed("right")||keyboard.pressed("D")) {
		 if (this.der==0) {
this.phantom.translateX(60);
	this.der=1;
		 }
}
	else
	this.der=0;
     if (keyboard.pressed("left")||keyboard.pressed("A")) {
		 if (this.izq==0) {
this.phantom.translateX(-60);
	this.izq=1;
		 }
}
	 else
	this.izq=0;
     if (keyboard.pressed("up")||keyboard.pressed("W")) {
		 if (this.arr==0) {
this.phantom.translateZ(-60);
	this.arr=1;
		 }
}
	
	     else
	this.arr=0;
     if (keyboard.pressed("down")||keyboard.pressed("S")) {
		 if (this.aba==0) {
this.phantom.translateZ(60);
	this.aba=1;
		 }
}

	     else
	this.aba=0;	
	}
	if((this.phantom.position.x != this.actuator.position.x) && this.banderaX===1){
		this.velocidadx=-(this.actuator.position.x-this.phantom.position.x)/Math.abs(this.actuator.position.x-this.phantom.position.x);
		this.actuator.translateX(this.velocidadx);
	}
	if((this.phantom.position.z != this.actuator.position.z)&&this.banderaZ===1){
		this.velocidadz=-(this.actuator.position.z-this.phantom.position.z)/Math.abs(this.actuator.position.z-this.phantom.position.z);
		this.actuator.translateZ(this.velocidadz);
	}
	if(keyboard.pressed("space")&&this.correct==1){
		this.banderaX=1;
		this.banderaZ=1;
		this.selec=0;
		this.correct=0;
		enviroment.turno=enviroment.turno+1;
	}
	if((this.phantom.position.x === this.actuator.position.x))
		this.banderaX=0;
	if((this.phantom.position.z === this.actuator.position.z))
		this.banderaZ=0; 
 
  
}

function Reina(material1,material2,equipo, x, y){
  Pieza.call(this,equipo,x,y);
  this.der=0;
  this.izq=0;
  this.aba=0;
  this.arr=0;
  this.sensor= new Sensor();
  this.actuator = new Reinam(material1);
  this.phantom = new Reinam(material2);
  this.add(this.actuator);
  this.add(this.phantom);
 this.selec=0;
  this.banderaX=0;
  this.banderaZ=0;
  
}

Reina.prototype = new Pieza();

Reina.prototype.sense = function(enviroment){
   this.sensor.set( this.phantom.position, new THREE.Vector3(0,1,0));
	for(var i=0;i<enviroment.children.length;i++){
  var obstaculo = this.sensor.intersectObject(enviroment.children[i],true);
if((obstaculo.length>0 && (obstaculo[0].distance <=60))){
  this.sensor.colision=true;
this.oa=i;}
  else{
  this.sensor.colision = false;
	  this.oa=0;}
	}
 
}

Reina.prototype.plan = function(enviroment){
  if((Math.abs(this.phantom.position.x-this.actuator.position.x)==Math.abs(this.phantom.position.z-this.actuator.position.z))||(this.phantom.position.x==this.actuator.position.x)||(this.phantom.position.z!=this.actuator.position.z))
  this.correct=1;
else
	this.correct=0;
   if(this.sensor.colision == true){
	  this.cont=1;
	  if(this.oa>0&&enviroment.children[oa].team!=this.team)
		  if(this.phantom.position.x===this.actuator.position.x&&this.phantom.position.z===this.actuator.position.z)
			  enviroment.children[this.oa].visible=false;
	  
  }
if(this.cont>=1&&this.sensor.colision==false){
	this.phantom.position.x=this.actuator.position.x;
	  this.phantom.position.z=this.actuator.position.z;
	  this.cont=0;
}
  if(this.cont>1){
	this.phantom.position.x=this.actuator.position.x;
	  this.phantom.position.z=this.actuator.position.z;
	  this.cont=0;
}
if(this.oa>0&&enviroment.children[oa].team==this.team){
	this.phantom.position.x=this.actuator.position.x;
	  this.phantom.position.z=this.actuator.position.z;
	  this.cont=0
	}	
}

Reina.prototype.act = function(enviroment){

 if(this.banderaZ==0&&this.banderaX==0&&this.selec==1){
	 if (keyboard.pressed("right")||keyboard.pressed("D")) {
		 if (this.der==0) {
this.phantom.translateX(60);
	this.der=1;
		 }
}
	else
	this.der=0;
     if (keyboard.pressed("left")||keyboard.pressed("A")) {
		 if (this.izq==0) {
this.phantom.translateX(-60);
	this.izq=1;
		 }
}
	 else
	this.izq=0;
     if (keyboard.pressed("up")||keyboard.pressed("W")) {
		 if (this.arr==0) {
this.phantom.translateZ(-60);
	this.arr=1;
		 }
}
	
	     else
	this.arr=0;
     if (keyboard.pressed("down")||keyboard.pressed("S")) {
		 if (this.aba==0) {
this.phantom.translateZ(60);
	this.aba=1;
		 }
}

	     else
	this.aba=0;	
	}
	if((this.phantom.position.x != this.actuator.position.x) && this.banderaX===1){
		this.velocidadx=-(this.actuator.position.x-this.phantom.position.x)/Math.abs(this.actuator.position.x-this.phantom.position.x);
		this.actuator.translateX(this.velocidadx);
	}
	if((this.phantom.position.z != this.actuator.position.z)&&this.banderaZ===1){
		this.velocidadz=-(this.actuator.position.z-this.phantom.position.z)/Math.abs(this.actuator.position.z-this.phantom.position.z);
		this.actuator.translateZ(this.velocidadz);
	}
	if(keyboard.pressed("space")&&this.correct==1){
		this.banderaX=1;
		this.banderaZ=1;
		this.selec=0;
		this.correct=0;
		enviroment.turno=enviroment.turno+1;
	}
	if((this.phantom.position.x === this.actuator.position.x))
		this.banderaX=0;
	if((this.phantom.position.z === this.actuator.position.z))
		this.banderaZ=0; 
 
  
}

function Caballo(material1,material2,equipo, x, y){
  Pieza.call(this,equipo,x,y);
  this.der=0;
  this.izq=0;
  this.aba=0;
  this.arr=0;
  this.sensor= new Sensor();
  this.actuator = new Caballom(material1);
  this.phantom = new Caballom(material2);
  this.add(this.actuator);
  this.add(this.phantom);
 this.selec=0;
  this.banderaX=0;
  this.banderaZ=0;
  
}

Caballo.prototype = new Pieza();

Caballo.prototype.sense = function(enviroment){
   this.sensor.set( this.phantom.position, new THREE.Vector3(0,1,0));
	for(var i=0;i<enviroment.children.length;i++){
  var obstaculo = this.sensor.intersectObject(enviroment.children[i],true);
if((obstaculo.length>0 && (obstaculo[0].distance <=60))){
  this.sensor.colision=true;
this.oa=i;}
  else{
  this.sensor.colision = false;
	  this.oa=0;}
	}
 
}

Caballo.prototype.plan = function(enviroment){
  if((Math.abs(this.phantom.position.x-this.actuator.position.x)==Math.abs(this.phantom.position.z-this.actuator.position.z))||(this.phantom.position.x==this.actuator.position.x)||(this.phantom.position.z!=this.actuator.position.z))
  this.correct=1;
else
	this.correct=0;
   if(this.sensor.colision == true){
	  this.cont=1;
	  if(this.oa>0&&enviroment.children[oa].team!=this.team)
		  if(this.phantom.position.x===this.actuator.position.x&&this.phantom.position.z===this.actuator.position.z)
			  enviroment.children[this.oa].visible=false;
	  
  }
if(this.cont>=1&&this.sensor.colision==false){
	this.phantom.position.x=this.actuator.position.x;
	  this.phantom.position.z=this.actuator.position.z;
	  this.cont=0;
}
  if(this.cont>1){
	this.phantom.position.x=this.actuator.position.x;
	  this.phantom.position.z=this.actuator.position.z;
	  this.cont=0;
}
if(this.oa>0&&enviroment.children[oa].team==this.team){
	this.phantom.position.x=this.actuator.position.x;
	  this.phantom.position.z=this.actuator.position.z;
	  this.cont=0
	}	
}

Caballo.prototype.act = function(enviroment){

 if(this.banderaZ==0&&this.banderaX==0&&this.selec==1){
	 if (keyboard.pressed("right")||keyboard.pressed("D")) {
		 if (this.der==0) {
this.phantom.translateX(60);
	this.der=1;
		 }
}
	else
	this.der=0;
     if (keyboard.pressed("left")||keyboard.pressed("A")) {
		 if (this.izq==0) {
this.phantom.translateX(-60);
	this.izq=1;
		 }
}
	 else
	this.izq=0;
     if (keyboard.pressed("up")||keyboard.pressed("W")) {
		 if (this.arr==0) {
this.phantom.translateZ(-60);
	this.arr=1;
		 }
}
	
	     else
	this.arr=0;
     if (keyboard.pressed("down")||keyboard.pressed("S")) {
		 if (this.aba==0) {
this.phantom.translateZ(60);
	this.aba=1;
		 }
}

	     else
	this.aba=0;	
	}
	if((this.phantom.position.x != this.actuator.position.x) && this.banderaX===1){
		this.velocidadx=-(this.actuator.position.x-this.phantom.position.x)/Math.abs(this.actuator.position.x-this.phantom.position.x);
		this.actuator.translateX(this.velocidadx);
	}
	if((this.phantom.position.z != this.actuator.position.z)&&this.banderaZ===1){
		this.velocidadz=-(this.actuator.position.z-this.phantom.position.z)/Math.abs(this.actuator.position.z-this.phantom.position.z);
		this.actuator.translateZ(this.velocidadz);
	}
	if(keyboard.pressed("space")&&this.correct==1){
		this.banderaX=1;
		this.banderaZ=1;
		this.selec=0;
		this.correct=0;
		enviroment.turno=enviroment.turno+1;
	}
	if((this.phantom.position.x === this.actuator.position.x))
		this.banderaX=0;
	if((this.phantom.position.z === this.actuator.position.z))
		this.banderaZ=0; 
 
  
}


TEXTURA.retrollamada = function( textura ){
  TEXTURA.material3 = new THREE.MeshBasicMaterial( {map: textura} );
TEXTURA.material7 = new THREE.MeshBasicMaterial( { map:textura, transparent: true, opacity: .5 } );

}

TEXTURA.retrollamada2 = function( textura ){
 TEXTURA.material4 = new THREE.MeshBasicMaterial( {map: textura} );
TEXTURA.material8 = new THREE.MeshBasicMaterial( { map:textura, transparent: true, opacity: .5 } );

}

TEXTURA.retrollamada3 = function( textura ){
 TEXTURA.material1 = new THREE.MeshBasicMaterial( {map: textura} );
TEXTURA.material5 = new THREE.MeshBasicMaterial( { map:textura, transparent: true, opacity: .5 } );
}

TEXTURA.retrollamada4 = function( textura ){
 TEXTURA.material2 = new THREE.MeshBasicMaterial( {map: textura} );
TEXTURA.material6 = new THREE.MeshBasicMaterial( { map:textura, transparent: true, opacity: .5 } );
}


TEXTURA.setup = function() {
  TEXTURA.entorno = new Enviroment();
  
  var cargador = new THREE.TextureLoader();
  cargador.load("marmolblanco.jpg",TEXTURA.retrollamada);
  var cargador2 = new THREE.TextureLoader();
  cargador2.load("marmolnegro.jpg",TEXTURA.retrollamada2);
  var cargador3 = new THREE.TextureLoader();
  cargador3.load("maderablanca.jpg",TEXTURA.retrollamada3);
  var cargador4 = new THREE.TextureLoader();
  cargador4.load("maderanegra.jpg",TEXTURA.retrollamada4);
}

TEXTURA.setup2 = function(){
	setupDone = true;
TEXTURA.torre1 = new Torre( TEXTURA.material3,TEXTURA.material7,0);
	TEXTURA.torre1.translateY(25);
TEXTURA.peon= new Peon( TEXTURA.material2,TEXTURA.material6,1);
	TEXTURA.peon.translateX(120);
	TEXTURA.peon.translateY(25);
  TEXTURA.tablero= new Tablero(TEXTURA.material1, TEXTURA.material2);
  TEXTURA.entorno.add(TEXTURA.tablero);
	TEXTURA.entorno.add(TEXTURA.torre1);
	TEXTURA.entorno.add(TEXTURA.peon);
  TEXTURA.camara = new THREE.PerspectiveCamera();
  TEXTURA.camara.position.z= 1500;
  TEXTURA.camara.position.x= 35*4;
  TEXTURA.entorno.rotateX(Math.PI/4);
  TEXTURA.renderizador = new THREE.WebGLRenderer();
 TEXTURA.renderizador.setSize(800, 800);
 document.body.appendChild(TEXTURA.renderizador.domElement);
	TEXTURA.torre1.selec=1;
}
var setupDone = false;
TEXTURA.loop = function(){
  requestAnimationFrame( TEXTURA.loop );
	if(TEXTURA.material1 !== undefined && TEXTURA.material2 !== undefined && !setupDone&& TEXTURA.material3 !== undefined&& TEXTURA.material4 !== undefined)
	{TEXTURA.setup2();
    
    TEXTURA.renderizador.render( TEXTURA.escena, TEXTURA.camara );}
	
	
	TEXTURA.entorno.sense();
	TEXTURA.entorno.plan();
	TEXTURA.entorno.act();
	TEXTURA.renderizador.render( TEXTURA.entorno, TEXTURA.camara );
    
   
 }

 TEXTURA.setup();
 TEXTURA.loop();
