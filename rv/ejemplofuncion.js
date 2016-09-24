function init(p){
  malla = new THREE.Mesh(new THREE.BoxGeometry(p,p,p), new THREE.MeshNormalMaterial());
  
  escena= new THREE.Scene();
  escena.add(malla);
  
  camara= new THREE.PerspectiveCamera();
  camara.position.z=10;
  camara.position.x=3.5;
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(700,700);
  document.body.appendChild(renderizador.domElement);
  }

  var loop = function(){
    requestAnimationFrame(loop);
    renderizador.render(escena,camara);
    malla.rotateX(0.1);
  if(sentido==0)
    malla.translateX(0.01);
  else
    malla.translateX(-0.01);
  if(Math.abs(malla.position.x)>=7)
  sentido=1;
  else if(Math.abs(malla.position.x<=0))
  sentido=0;
  }
  var escena, camara, renderizador, malla, sentido = 0;
  init(1);
  loop();
