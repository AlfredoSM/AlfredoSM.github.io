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
    
function Torre(material){
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

function Alfil(material){
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

function Peon(material){
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

Tablero.prototype = new THREE.Object3D();
Casilla.prototype = new THREE.Mesh();
Torre.prototype = new THREE.Mesh();
Alfil.prototype = new THREE.Mesh();
Peon.prototype = new THREE.Mesh();

retrollamada = function( textura ){
  material3 = new THREE.MeshBasicMaterial( {map: textura} );

}

retrollamada2 = function( textura ){
 material4 = new THREE.MeshBasicMaterial( {map: textura} );

}

retrollamada3 = function( textura ){
 material1 = new THREE.MeshBasicMaterial( {map: textura} );
}

retrollamada4 = function( textura ){
 material2 = new THREE.MeshBasicMaterial( {map: textura} );
}


setup = function() {
  escena = new THREE.Scene();
  
  var cargador = new THREE.TextureLoader();
  cargador.load("marmolblanco.jpg",TEXTURA.retrollamada);
  var cargador2 = new THREE.TextureLoader();
  cargador2.load("marmolnegro.jpg",TEXTURA.retrollamada2);
  var cargador3 = new THREE.TextureLoader();
  cargador3.load("maderablanca.jpg",TEXTURA.retrollamada3);
  var cargador4 = new THREE.TextureLoader();
  cargador4.load("maderanegra.jpg",TEXTURA.retrollamada4);
}

