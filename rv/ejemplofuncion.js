function init(p){
  malla = new THREE.Mesh(new THREE.BoxGeometry(p,p,p), new THREE.MeshNormalMaterial());
  
  escena= new THREE.Scene();
  escena.add(malla);
  
  camara= new THREE.PerspectiveCamera();
  camara.position.z=5;
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(700,700);
  document.body.appendChild(renderizador.domElement);
  }

  var loop = function(){
    requestAnimationFrame(loop);
    renderizador.render(escena,camara);
  var sentido = 0;
  if(sentido==0)
    malla.traslate(0.01,0,0);
  else
    malla.traslateX(-0.01);
  if(malla.position.x==700)
  sentido=1;
  else if(malla.position.x==0)
  sentido=0;
  }
  var escena, camara, renderizador, malla;
  init(1);
  loop();
