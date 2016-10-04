var PROTOTIPO = new Object();

PROTOTIPO.ArbolGeometry = function(){
  THREE.Geometry.call(this);
  
  var troncoForma = THREE.CylinderGeometry(.25, .5, 1);
  var esferaForma = THREE.SphereGeometry(.65);
  esferForma.translate(0, 1, 0);
  
  var troncoMalla = new THREE.Mesh(troncoForma);
  var esferaMalla = new THREE.Mesh(esferaForma);
  
  this.merge(troncoMalla.geometry, troncoMalla.matrix);
  this.merge(esferaMalla.geometry, esferaMalla.matrix);
 }
 
 PROTOTIPO.ArbolGeometry.prototype = new THREE.Geometry();
 
 PROTOTIPO.setup = function(){
  var arbol1 = new THREE.Mesh(new PROTOTIPO.ArbolGeometry(), new THREE.MeshNormalMaterial();
  var arbol2 = new THREE.Mesh(new PROTOTIPO.ArbolGeometry(), new THREE.MeshNormalMaterial();
   arbol1.malla.position.x=-5;
  arbol2.malla.position.x=5;
  
  PROTOTIPO.camara = new THREE.PerspectiveCamera();
  PROTOTIPO.camara.position.z= 20;
  
  PROTOTIPO.renderizador = new THREE.WebGLRenderer();
  PROTOTIPO.renderizador.setSize(600, 600);
  document.body.appendChild(PROTOTIPO.renderizador.domElement);
  
  PROTOTIPO.escena = new THREE.Scene();
  PROTOTIPO.escena.add(arbol1.malla, arbol2.malla);
  }
  PROTOTIPO.loop = function(){
  requestAnimationFrame( PROTOTIPO.loop );

    PROTTIPO.renderizador.render( PROTOTIPO.escena, PROTOTIPO.camara );
 }
 
 PROTOTIPO.setup();
 PROTOTIPO.loop();
