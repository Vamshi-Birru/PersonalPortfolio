"use client";

import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

// Map of key node names in key_board.glb to new replacement letters
// Row 1 (top): K U M A R A P U -> B I R R U [blank] [blank] [blank]
// Row 2 (bottom): H E M R A M -> V A M S H I
const KEY_LETTER_MAP: Record<string, string | null> = {
  // Row 1: BIRRU
  K: "B",
  U: "I",
  M: "R",
  A: "R",
  R: "U",
  A2: null,
  P: null,
  U2: null,

  // Row 2: VAMSHI
  H: "V",
  E: "A",
  M2: "M",
  R2: "S",
  A3: "H",
  M3: "I",
  // Enter key keeps its original "Enter" text
};

function createLetterTexture(letter: string): THREE.CanvasTexture {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  ctx.clearRect(0, 0, size, size);
  // Match the deep navy color of the original key legends
  ctx.fillStyle = "#001825";
  ctx.font = "900 360px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hack', monospace, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(letter, size / 2, size / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  texture.anisotropy = 16;
  return texture;
}

export default function KeyBoardHR() {
  const { scene } = useGLTF("/key_board.glb");

  useEffect(() => {
    if (!scene || scene.userData.customized) return;
    scene.userData.customized = true;

    // Standard letter plane geometry matching original Blender mesh bounds
    const basePlane = new THREE.PlaneGeometry(32, 32);
    basePlane.translate(-31.24, 24.78, 0.25);

    Object.entries(KEY_LETTER_MAP).forEach(([keyName, letter]) => {
      const keyNode = scene.getObjectByName(keyName);
      if (!keyNode) return;

      // Find the text child inside this key
      const textChild = keyNode.children.find(
        (c) => c.name.startsWith("Text") && c.name !== "Text 2"
      ) as THREE.Mesh | undefined;

      if (!textChild) return;

      if (!letter) {
        textChild.visible = false;
        return;
      }

      // Create standard material with crisp canvas texture
      const texture = createLetterTexture(letter);
      const letterMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        roughness: 0.5,
        metalness: 0,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -1,
        polygonOffsetUnits: -1,
        side: THREE.DoubleSide,
      });

      textChild.geometry = basePlane.clone();
      textChild.material = letterMaterial;
      textChild.visible = true;
    });
  }, [scene]);

  return (
    <mesh scale={[0.29, 0.29, 0.29]}>
      <primitive object={scene} rotation={[0, -Math.PI / 2, -Math.PI / 2]} />
    </mesh>
  );
}

useGLTF.preload("/key_board.glb");
