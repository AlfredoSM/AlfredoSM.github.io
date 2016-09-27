var TEXTURA = new Object();
TEXTURA.retrollamada = function( textura ){
  var material = new THREE.MeshBasicMaterial( {map: textura} );
  TEXTURA.malla = new THREE.Mesh( new THREE.SphereGeometry( 10 ), material );
  TEXTURA.escena.add(TEXTURA.malla);
}

TEXTURA.setup = function() {
  TEXTURA.escena = new THREE.Scene();
  
  var cargador = new THREE.TextureLoader();
  cargador.load("tierra.jpg",TEXTURA.retrollamada);
  TEXTURA.camara = new THREE.PerspectiveCamera();
  TEXTURA.camara.position.z= 50;
  
  TEXTURA.renderizador = new THREE.WebGLRenderer();
 TEXTURA.renderizador.setSize(600, 600);
 document.body.appendChild(TEXTURA.renderizador.domElement);
}

TEXTURA.loop = function(){
  requestAnimationFrame( TEXTURA.loop );
  if( TEXTURA.malla !== undefined ) {
    TEXTURA.malla.rotateY( 0.01 );
    }
    TEXTURA.renderizador.render( TEXTURA.escena, TEXTURA.camara );
 }
 
 TEXTURA.setup();
 TEXTURA.loop();
