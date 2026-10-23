"use client";

import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface KeyConfig {
  letter: string | null;
  textColor: string;
  keycapColor: string;
}

// Map of key node names in key_board.glb to replacement letters and explicit high-contrast colors
// Row 1 (top): B I R R U - Solarized light cream keycaps with deep dark teal text
// Row 2 (bottom): V A M S H I - Solarized dark teal keycaps with bright golden amber text
const KEY_CONFIG: Record<string, KeyConfig> = {
  // Row 1: BIRRU
  K: { letter: "B", textColor: "#002b36", keycapColor: "#fdf6e3" },
  U: { letter: "I", textColor: "#002b36", keycapColor: "#fdf6e3" },
  M: { letter: "R", textColor: "#002b36", keycapColor: "#fdf6e3" },
  A: { letter: "R", textColor: "#002b36", keycapColor: "#fdf6e3" },
  R: { letter: "U", textColor: "#002b36", keycapColor: "#fdf6e3" },
  A2: { letter: null, textColor: "#002b36", keycapColor: "#eee8d5" },
  P: { letter: null, textColor: "#002b36", keycapColor: "#eee8d5" },
  U2: { letter: null, textColor: "#002b36", keycapColor: "#eee8d5" },

  // Row 2: VAMSHI
  H: { letter: "V", textColor: "#ffb703", keycapColor: "#002b36" },
  E: { letter: "A", textColor: "#ffb703", keycapColor: "#002b36" },
  M2: { letter: "M", textColor: "#ffb703", keycapColor: "#002b36" },
  R2: { letter: "S", textColor: "#ffb703", keycapColor: "#002b36" },
  A3: { letter: "H", textColor: "#ffb703", keycapColor: "#002b36" },
  M3: { letter: "I", textColor: "#ffb703", keycapColor: "#002b36" },

  // Enter key: warm terracotta orange keycap with deep dark teal text
  Enter: { letter: null, textColor: "#002b36", keycapColor: "#cb4b16" },
};

function createLetterTexture(letter: string, textColor: string): THREE.CanvasTexture {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  ctx.clearRect(0, 0, size, size);

  // High-contrast, large, ultra-bold typography
  ctx.fillStyle = textColor;
  ctx.font = "900 420px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hack', monospace, sans-serif";
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
    if (!scene || scene.userData.customizedColors) return;
    scene.userData.customizedColors = true;

    // Plane geometry matching the original Blender letter bounds and elevation
    const basePlane = new THREE.PlaneGeometry(36, 36);
    basePlane.translate(-34.7, 24.8, 0.5);

    Object.entries(KEY_CONFIG).forEach(([keyName, config]) => {
      const keyNode = scene.getObjectByName(keyName);
      if (!keyNode) return;

      // 1. Explicitly style the keycap background mesh
      const keycapChild = keyNode.children.find((c) =>
        c.name.startsWith("Cube")
      ) as THREE.Mesh | undefined;
      if (keycapChild) {
        keycapChild.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(config.keycapColor),
          roughness: 0.35,
          metalness: 0.05,
        });
      }

      // 2. Explicitly style the letter mesh
      const textChild = keyNode.children.find((c) =>
        c.name.startsWith("Text")
      ) as THREE.Mesh | undefined;

      if (!textChild) return;

      if (keyName === "Enter") {
        // Keep original Enter geometry and give it sharp dark teal color
        textChild.material = new THREE.MeshBasicMaterial({
          color: new THREE.Color(config.textColor),
          side: THREE.DoubleSide,
        });
        textChild.visible = true;
        return;
      }

      if (!config.letter) {
        textChild.visible = false;
        return;
      }

      // High-contrast self-illuminated material for permanent legibility
      const texture = createLetterTexture(config.letter, config.textColor);
      const letterMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        alphaTest: 0.1,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -3,
        polygonOffsetUnits: -3,
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
