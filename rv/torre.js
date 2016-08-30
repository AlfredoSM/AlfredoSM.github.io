var figura = new THREE.Shape();
var figura1 = new THREE.Shape();
var figura2 = new THREE.Shape();
var figura3 = new THREE.Shape();

figura.moveTo(0, 0);
figura.lineTo(2, 0);
figura.lineTo(2, 2);
figura.lineTo(0, 2);
figura.lineTo(0, 0);

figura1.moveTo(10, 10);
figura1.lineTo(10, 12);
figura1.lineTo(12, 12);
figura1.lineTo(12, 10);
figura1.lineTo(10, 10);

figura2.moveTo(0, 10);
figura2.lineTo(0, 12);
figura2.lineTo(2, 12);
figura2.lineTo(2, 10);
figura2.lineTo(0, 10);

figura3.moveTo(10, 0);
figura3.lineTo(10, 2);
figura3.lineTo(12, 2);
figura3.lineTo(12, 0);
figura3.lineTo(10, 0);



var forma1 = new THREE.ExtrudeGeometry(figura, {amount: 1} );
var forma2 = new THREE.ExtrudeGeometry(figura1, {amount: 1} );
var forma3 = new THREE.ExtrudeGeometry(figura2, {amount: 1} );
var forma4 = new THREE.ExtrudeGeometry(figura3, {amount: 1} );
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
