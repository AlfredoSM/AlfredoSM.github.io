var TEXTURA = new Object();
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
////////////////////////////////////////////////////////////////////////////////////////
function Flecham(material){
var basee = new THREE.CylinderGeometry(2,2,12);
basee.translate(0,-10,0);
var baseeMalla = new THREE.Mesh(basee);
var forma = new THREE.ConeGeometry( 5, 10, 16 );
forma.merge(baseeMalla.geometry, baseeMalla.matrix);
forma.translate(-3,-5,-5);
forma.scale(4,4,4);
forma.rotateZ( (Math.PI) );
THREE.Mesh.call(this, forma, material);
}

////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////
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
forma.scale(.8,2,.8);
forma.translate(0,30,0);
THREE.Mesh.call(this, forma, material);
}
////////////////////////////////////////////////////////////////////////////////////////
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
forma.scale(.8,2,.8);
	forma.translate(0,30,0);
THREE.Mesh.call(this, forma, material);
}
////////////////////////////////////////////////////////////////////////////////////////
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
forma.scale(.8,2,.8);
forma.translate(0,30,0);
THREE.Mesh.call(this, forma, material);
}
////////////////////////////////////////////////////////////////////////////////////////
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
Reinam.prototype = new THREE.Mesh();
Reym.prototype = new THREE.Mesh();
Caballom.prototype = new THREE.Mesh();
Flecham.prototype = new THREE.Mesh();

TEXTURA.retrollamada = function( textura ){
  TEXTURA.material3 = new THREE.MeshBasicMaterial( {map: textura} );

}

TEXTURA.retrollamada2 = function( textura ){
 TEXTURA.material4 = new THREE.MeshBasicMaterial( {map: textura} );

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
	////////////////////////
	TEXTURA.flecha = new Flecham( TEXTURA.material3);
	TEXTURA.flecha.translateY(25);
	TEXTURA.flecha.translateZ(60*2);
	TEXTURA.flecha.translateX(60*7);
	Flecham
	TEXTURA.Reina1 = new Reinam( TEXTURA.material3);
	TEXTURA.Reina1.translateY(25);
	TEXTURA.Reina1.translateZ(60*5);
	TEXTURA.Rey1 = new Reym( TEXTURA.material3);
	TEXTURA.Rey1.translateY(25);
	TEXTURA.Rey1.translateZ(60*2);
	TEXTURA.Caballo1 = new Caballom( TEXTURA.material3);
	TEXTURA.Caballo1.translateY(25);
	TEXTURA.Caballo1.translateZ(60*7);
	///////////////////////
TEXTURA.Torre1 = new Torre( TEXTURA.material3);
  TEXTURA.Torre3 = new Torre( TEXTURA.material3);
TEXTURA.Alfil1 = new Alfil(TEXTURA.material3);
TEXTURA.Alfil3 = new Alfil(TEXTURA.material3);
	TEXTURA.Peon = new Array();
	for( var PB=0; PB < 8; PB++)
	{
TEXTURA.Peon[PB] = new Peon(TEXTURA.material3);
	TEXTURA.Peon[PB].translateX(1*60);
	TEXTURA.Peon[PB].translateZ(PB*60);
	TEXTURA.Peon[PB].translateY(25*.7);
		TEXTURA.escena.add(TEXTURA.Peon[PB]);
	}
TEXTURA.Alfil1.translateZ(60*5);
TEXTURA.Alfil3.translateZ(60*2);
TEXTURA.Alfil1.translateY(25);
TEXTURA.Alfil3.translateY(25);
  TEXTURA.Torre3.translateZ(60*7);
	TEXTURA.Torre1.translateY(25);
	TEXTURA.Torre3.translateY(25);
  TEXTURA.escena.add( TEXTURA.Rey1,TEXTURA.Caballo1,TEXTURA.Reina1);////////////////TEXTURA.Torre1,TEXTURA.Torre3, TEXTURA.Alfil1, TEXTURA.Alfil3,
TEXTURA.Torre2 = new Torre( TEXTURA.material4);
  TEXTURA.Torre4 = new Torre(TEXTURA.material4);
TEXTURA.Alfil2 = new Alfil(TEXTURA.material4);
TEXTURA.Alfil4 = new Alfil(TEXTURA.material4);
	TEXTURA.Peon1 = new Array();
	for( var PN=0; PN < 8; PN++)
	{
TEXTURA.Peon1[PN] = new Peon(TEXTURA.material4);
	TEXTURA.Peon1[PN].translateX(6*60);
	TEXTURA.Peon1[PN].translateZ(PN*60);
	TEXTURA.Peon1[PN].translateY(25*.7);
		TEXTURA.escena.add(TEXTURA.Peon1[PN]);
	}
  TEXTURA.Torre2.translateX(60*7);
  TEXTURA.Torre4.translateX(60*7);
  TEXTURA.Torre4.translateZ(60*7);
TEXTURA.Alfil2.translateX(60*7);
TEXTURA.Alfil4.translateX(60*7);
TEXTURA.Alfil2.translateZ(60*5);
TEXTURA.Alfil4.translateZ(60*2);
TEXTURA.Alfil2.translateY(25);
TEXTURA.Alfil4.translateY(25);
	TEXTURA.Torre2.translateY(25);
	TEXTURA.Torre4.translateY(25);
  TEXTURA.escena.add(TEXTURA.Torre2,TEXTURA.Torre4, TEXTURA.Alfil2, TEXTURA.flecha);
  TEXTURA.tablero= new Tablero(TEXTURA.material1, TEXTURA.material2);
  TEXTURA.escena.add(TEXTURA.tablero);	 
  TEXTURA.camara = new THREE.PerspectiveCamera();
  TEXTURA.camara.position.z= 1500;
  TEXTURA.camara.position.x= 35*4;
  TEXTURA.escena.rotateX(Math.PI/4);
  TEXTURA.renderizador = new THREE.WebGLRenderer();
 TEXTURA.renderizador.setSize(600, 600);
 document.body.appendChild(TEXTURA.renderizador.domElement);
}
var setupDone = false;
TEXTURA.loop = function(){
  requestAnimationFrame( TEXTURA.loop );
	if(TEXTURA.material1 !== undefined && TEXTURA.material2 !== undefined && !setupDone&& TEXTURA.material3 !== undefined&& TEXTURA.material4 !== undefined)
	{TEXTURA.setup2();
    
    
    TEXTURA.renderizador.render( TEXTURA.escena, TEXTURA.camara );}
 }
 TEXTURA.setup();
 TEXTURA.loop();
 
