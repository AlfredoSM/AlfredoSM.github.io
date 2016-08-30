var figura = new THREE.Shape();
var figura1 = new THREE.Shape();
var figura2 = new THREE.Shape();
var figura3 = new THREE.Shape();

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

var formaMalla = new THREE.Mesh(troncoForma);
var esferaMalla = new THREE.Mesh(esferaForma);

var arbolForma = new THREE.Geometry();

arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma1, material );
var malla1 = new THREE.Mesh( forma2, material );
var malla2 = new THREE.Mesh( forma3, material );
var malla3 = new THREE.Mesh( forma4, material );


var escena = new THREE.Scene();
escena.add(malla);
escena.add(malla1);
escena.add(malla2);
escena.add(malla3);

var camara = new THREE.PerspectiveCamera();
camara.position.z=500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
