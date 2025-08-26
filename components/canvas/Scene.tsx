// FIX: Add a triple-slash directive to help TypeScript recognize @react-three/fiber's custom JSX elements.
/// <reference types="@react-three/fiber" />
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import * as random from 'maath/random';

const Scene = (): JSX.Element => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <RotatingShape />
      <Stars />
    </>
  );
};

// FIX: Changed component definition and improved type safety of useRef.
const RotatingShape = (): JSX.Element => {
  const meshRef = useRef<THREE.Mesh | null>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, 0]} scale={1.5}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#8b5cf6" wireframe={true} />
    </mesh>
  );
};


// FIX: Changed component definition and improved type safety of useRef.
const Stars = (props: any): JSX.Element => {
  const ref = useRef<THREE.Points | null>(null);
  // FIX: The Float32Array needs to be 3 times the number of points (x, y, z for each).
  const sphere = useMemo(() => random.inSphere(new Float32Array(2500 * 3), { radius: 1.5 }), []);

  useFrame((state, delta) => {
    if(ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#6366f1"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};


export default Scene;