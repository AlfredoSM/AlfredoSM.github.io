var TEXTURA = new Object();
function Torre(){
	THREE.Geometry.call(this);
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
this.merge(malla.geometry, malla.matrix);
this.merge(malla1.geometry, malla1.matrix);
this.merge(malla2.geometry, malla2.matrix);
this.merge(malla3.geometry, malla3.matrix);
this.merge(baseAbajomalla.geometry, baseAbajomalla.matrix);
this.merge(baseeMalla.geometry, baseeMalla.matrix);
this.merge(troncoMalla.geometry, troncoMalla.matrix);
this.merge(esferaMalla.geometry, esferaMalla.matrix);


}

Torre.prototype = new THREE.Geometry();

TEXTURA.retrollamada = function( textura ){
  var material = new THREE.MeshBasicMaterial( {map: textura} );
  Torre.prototype= new THREE.Geometry();
TEXTURA.Torre1 = new THREE.Mesh(new Torre(), material);
  TEXTURA.Torre3 = new THREE.Mesh(new Torre(), material);
  TEXTURA.Torre3.translateZ(60*7);
	TEXTURA.Torre1.translateY(25);
	TEXTURA.Torre3.translateY(25);
  TEXTURA.escena.add(TEXTURA.Torre1,TEXTURA.Torre3);
}

TEXTURA.retrollamada2 = function( textura ){
  var material = new THREE.MeshBasicMaterial( {map: textura} );
  Torre.prototype= new THREE.Geometry();
TEXTURA.Torre2 = new THREE.Mesh(new Torre(), material);
  TEXTURA.Torre4 = new THREE.Mesh(new Torre(), material);
  TEXTURA.Torre2.translateX(60*7);
  TEXTURA.Torre4.translateX(60*7);
  TEXTURA.Torre4.translateZ(60*7);
	TEXTURA.Torre2.translateY(25);
	TEXTURA.Torre4.translateY(25);
  TEXTURA.escena.add(TEXTURA.Torre2,TEXTURA.Torre4);
}

TEXTURA.retrollamada3 = function( textura ){
 TEXTURA.material1 = new THREE.MeshBasicMaterial( {map: textura} );
}

TEXTURA.retrollamada4 = function( textura ){
 TEXTURA.material2 = new THREE.MeshBasicMaterial( {map: textura} );
}


TEXTURA.setup = function() {
  TEXTURA.escena = new THREE.Scene();
  
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
var tablero = new Array(); 
for ( var XX = 0; XX < 8; XX ++ ){
for ( var ZZ = 0; ZZ < 8; ZZ ++ ){
	if(((XX%2)&&(!(ZZ%2)))||((!(XX%2))&&(ZZ%2))){
	tablero[(XX*8)+ZZ]= new THREE.Mesh( new THREE.BoxGeometry( 60, 1, 60), TEXTURA.material1 );
	tablero[(XX*8)+ZZ].translateX(XX*60);
	tablero[(XX*8)+ZZ].translateZ(ZZ * 60);
	}
	else{
		tablero[(XX*8)+ZZ]= new THREE.Mesh( new THREE.BoxGeometry( 60, 1, 60), TEXTURA.material2 );
		tablero[(XX*8)+ZZ].translateX(XX*60);
		tablero[(XX*8)+ZZ].translateZ(ZZ * 60);
	}
	TEXTURA.escena.add(  tablero [(XX*8)+ZZ] );
}}
	 
  TEXTURA.camara = new THREE.PerspectiveCamera();
  TEXTURA.camara.position.z= 2000;
  TEXTURA.camara.position.x= 35*4;
  TEXTURA.escena.rotateX(Math.PI/4);
  TEXTURA.renderizador = new THREE.WebGLRenderer();
 TEXTURA.renderizador.setSize(600, 600);
 document.body.appendChild(TEXTURA.renderizador.domElement);
}
var setupDone = false;
TEXTURA.loop = function(){
  requestAnimationFrame( TEXTURA.loop );
	if(TEXTURA.material1 !== undefined && TEXTURA.material2 !== undefined && !setupDone)
	{TEXTURA.setup2();
  if( TEXTURA.torre1 !== undefined && TEXTURA.torre2 !== undefined ) {
    TEXTURA.malla.rotateY( 0.01 );
    }
    TEXTURA.renderizador.render( TEXTURA.escena, TEXTURA.camara );}
 }
 TEXTURA.setup();
 TEXTURA.loop();
 
