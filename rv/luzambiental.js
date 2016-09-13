var iluminacion = new THREE.AmbientLight(0xFFFFFF);
iluminacion.position.x = 10;
iluminacion.position.y =10;
iluminacion.position.z =10;
var forma = new THREE.SphereGeometry(1);
var material = new THREE.MeshLambertMaterial({color: '#00cc00'});
var malla = new THREE.Mesh( forma, material);
var escena = new THREE.Scene();
escena.add(malla);
escena.add(iluminacion);

var camara = new THREE.PerspectiveCamera();
camara.position.z=5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( 600, 600 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
