import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ShaderMaterial, TextureLoader, Vector2, Raycaster } from 'three';
import image from '../../assets/Logos/IconWhite.svg'; // Path to your image

const DistortImage = ({ propImage }) => {
  const meshRef = useRef();
  const { gl, camera, size } = useThree(); // size gives you the current size of the canvas
  const [mouse, setMouse] = useState(new Vector2(0, 0));
  const [hover, setHover] = useState(0);

  const raycaster = new Raycaster();

  // Load texture once on component mount
  const textureRef = useRef(null);
  
  useEffect(() => {
    // Load texture only once on mount
    textureRef.current = new TextureLoader().load(propImage);
  }, [propImage]);

  // Update mouse position on mouse move
  const handleMouseMove = (e) => {
    const rect = gl.domElement.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // Normalized X [-1, 1]
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1; // Normalized Y [-1, 1]
    setMouse(new Vector2(x, y));
  };

  // Detect hover intensity based on mouse proximity
  const handleMouseEnter = () => setHover(2);
  const handleMouseLeave = () => setHover(0);

  // Attach mouse event listeners
  useEffect(() => {
    const onMouseMove = (e) => handleMouseMove(e);
    const canvasElement = gl.domElement;
    canvasElement.addEventListener('mousemove', onMouseMove);
    canvasElement.addEventListener('mouseenter', handleMouseEnter);
    canvasElement.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      canvasElement.removeEventListener('mousemove', onMouseMove);
      canvasElement.removeEventListener('mouseenter', handleMouseEnter);
      canvasElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [gl]);

  // Create the shader material
  const shaderMaterial = new ShaderMaterial({
    uniforms: {
      uTexture: { value: textureRef.current },
      uHover: { value: hover },
      uMouse: { value: mouse },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D uTexture;
      uniform float uHover;
      uniform vec2 uMouse;
      varying vec2 vUv;

      void main() {
        float blocks = 30.0; // Number of blocks
        vec2 blocksUv = floor(vUv * blocks) / blocks; // Divide the image into blocks
        float distance = length(blocksUv - uMouse); // Get distance from mouse
        float effect = smoothstep(0.3, 0.00, distance); // Apply smoothstep for distortion falloff

        // Declare the distortion variable outside the condition
        vec2 distortion = vec2(0.0); // Default value when hover is 0.0

        // Apply distortion based on hover state
        if (uHover > 0.0) {
          distortion = vec2(0.03) * effect * 2.0;  // Apply distortion when hovered
        }

        // Get the texture color
        vec4 textureColor = texture(uTexture, vUv); 
        
        // Apply distortion to the texture coordinates
        vec4 color = texture2D(uTexture, vUv + distortion * uHover); // Apply distortion based on hover intensity
  
        // Set the final color
        gl_FragColor = color; 
      }
    `,
  });

  // Use the Raycaster to detect mouse position over the image
  useFrame(() => {
    if (shaderMaterial && meshRef.current) {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(meshRef.current);
      if (intersects.length > 0) {
        // Get intersection UV coordinates
        const uv = intersects[0].uv;
        shaderMaterial.uniforms.uMouse.value = uv; // Update mouse UV coordinates
      }
    }
  });

  // Calculate the correct plane size in world space based on the camera's view and canvas size
  const calculatePlaneSize = () => {
    const aspect = size.width / size.height;
    const height = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
    const width = height * aspect;
    return { width, height };
  };

  const { width, height } = calculatePlaneSize();

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[width, height]} />
      <primitive object={shaderMaterial} />
    </mesh>
  );
};

const DistortImageCanvas = ({propImage}) => {
  return (
    <Canvas
      style={{
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <perspectiveCamera makeDefault position={[0, 0, 10]} />
      <DistortImage propImage={propImage} />
    </Canvas>
  );
};

export default DistortImageCanvas;
