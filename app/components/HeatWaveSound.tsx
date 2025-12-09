/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HeatWaveSound.module.css";

export function HeatWaveSound() {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainRef = useRef<GainNode | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    return () => {
      stopSound();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startSound = async () => {
    if (playing) return;
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") {
      await ctx.resume();
    }

    const rootGain = ctx.createGain();
    rootGain.gain.value = 0.0;
    rootGain.connect(ctx.destination);
    gainRef.current = rootGain;

    const frequencies = [180, 220, 320];
    oscillatorsRef.current = frequencies.map((frequency, idx) => {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = frequency;

      const individualGain = ctx.createGain();
      individualGain.gain.value = 0.04 + idx * 0.02;

      const lfo = ctx.createOscillator();
      lfo.type = "sine";
      lfo.frequency.value = 0.08 + idx * 0.05;

      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 30 + idx * 20;
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start();

      osc.connect(individualGain);
      individualGain.connect(rootGain);
      osc.start();
      return osc;
    });

    const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    }
    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;
    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.05;
    noiseSource.connect(noiseGain);
    noiseGain.connect(rootGain);
    noiseSource.start();
    oscillatorsRef.current.push(noiseSource as unknown as OscillatorNode);

    rootGain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 1.2);
    setPlaying(true);
  };

  const stopSound = () => {
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    const gainNode = gainRef.current;
    if (gainNode) {
      gainNode.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
    }
    oscillatorsRef.current.forEach((osc) => {
      try {
        osc.stop(ctx.currentTime + 0.7);
      } catch (error) {
        // oscillator might already be stopped
      }
    });
    oscillatorsRef.current = [];
    setTimeout(() => {
      ctx.close();
      audioCtxRef.current = null;
      gainRef.current = null;
      setPlaying(false);
    }, 800);
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${playing ? styles.active : ""}`}
      onClick={playing ? stopSound : startSound}
    >
      <span>{playing ? "गर्मी की लहर थमाओ" : "गर्मी की हवा सुनो"}</span>
      <span className={styles.pulse} aria-hidden />
    </button>
  );
}
