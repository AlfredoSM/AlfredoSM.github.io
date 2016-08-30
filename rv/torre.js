var figura = new THREE.Shape();

figura.moveTo(0, 0);
figura.lineTo(5, 0);
figura.lineTo(5, 5);
figura.lineTo(0, 5);
figura.lineTo(0, 0);

figura.moveTo(0, 10);
figura.lineTo(0, 15);
figura.lineTo(5, 15);
figura.lineTo(5, 10);
figura.lineTo(0, 10);

figura.moveTo(10, 10);
figura.lineTo(10, 15);
figura.lineTo(15, 15);
figura.lineTo(15, 10);
figura.lineTo(10, 10);

figura.moveTo(10, 0);
figura.lineTo(10, 5);
figura.lineTo(15, 5);
figura.lineTo(15, 0);
figura.lineTo(10, 0);

var forma = new THREE.ExtrudeGeometry(figura, {amount: 1} );
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/4 );

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z=500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
