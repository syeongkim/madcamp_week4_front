// FlagImage.tsx
import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";

const Flag = ({ texturePath }: { texturePath: string }) => {
  const flagRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(TextureLoader, texturePath);
  const [aspectRatio, setAspectRatio] = useState(1);

  useEffect(() => {
    const img = new Image();
    img.src = texturePath;
    img.onload = () => {
      setAspectRatio(img.width / img.height);
    };

    const segW = 60; // 세그먼트 수 증가
    const segH = 40; // 세그먼트 수 증가
    const geometry = new THREE.PlaneGeometry(30 * aspectRatio, 30, segW, segH);
    const material = new THREE.MeshLambertMaterial({
      map: texture,
      side: THREE.DoubleSide,
      alphaTest: 0.5, // 알파 값을 기준으로 픽셀 렌더링
      transparent: true, // 텍스처의 알파 채널 사용
    });
    if (flagRef.current) {
      flagRef.current.geometry = geometry;
      flagRef.current.material = material;
    }
  }, [texture, aspectRatio]);

  useFrame(() => {
    const time = Date.now() * 0.001;
    if (flagRef.current && flagRef.current.geometry) {
      const positionAttribute = flagRef.current.geometry.attributes.position;
      const vertices = positionAttribute.array;
      const segW = 60;
      const segH = 40;
      for (let i = 0; i <= segH; i++) {
        for (let j = 0; j <= segW; j++) {
          const index = 3 * (j + i * (segW + 1));
          vertices[index + 2] = Math.sin(j * 0.5 + time) * 0.5;
        }
      }
      positionAttribute.needsUpdate = true;
    }
  });

  return <mesh ref={flagRef} />;
};

export default function FlagImage({ texturePath }: { texturePath: string }) {
  return (
    <div className="items-center justify-center text-center relative h-[700px]">
      <Canvas
        style={{ width: "auto", height: "100%" }}
        camera={{ position: [0, 0, 30], fov: 60 }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Flag texturePath={texturePath} />
      </Canvas>
    </div>
  );
}
