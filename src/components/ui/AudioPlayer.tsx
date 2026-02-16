import { useState, useRef } from 'react';
import './AudioPlayer.scss';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodesRef = useRef<GainNode[]>([]);

  // Initialize Audio Context (must be triggered by user initially if strict, 
  // but we can try to init on mount and see if browser allows, usually requires interaction)
  const initAudio = () => {
    if (audioContextRef.current) return;

    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    const ctx = new AudioContext();
    audioContextRef.current = ctx;

    // Create Master Limit/Gain
    const masterGain = ctx.createGain();
    masterGain.gain.value = 0.3; // Soft volume
    masterGain.connect(ctx.destination);

    // --- DRONE LAYER 1: Deep Bass ---
    const osc1 = ctx.createOscillator();
    osc1.type = 'sawtooth';
    osc1.frequency.value = 55; // A1

    const filter1 = ctx.createBiquadFilter();
    filter1.type = 'lowpass';
    filter1.frequency.value = 200; // Very muffled

    const gain1 = ctx.createGain();
    gain1.gain.value = 0.5;

    osc1.connect(filter1).connect(gain1).connect(masterGain);

    // --- DRONE LAYER 2: Detuned Harmony ---
    const osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.value = 110.5; // A2 slight sharp

    const gain2 = ctx.createGain();
    gain2.gain.value = 0.3;

    osc2.connect(gain2).connect(masterGain);

    // --- DRONE LAYER 3: Ethereal High ---
    const osc3 = ctx.createOscillator();
    osc3.type = 'triangle';
    osc3.frequency.value = 164.81; // E3

    const filter3 = ctx.createBiquadFilter();
    filter3.type = 'lowpass';
    filter3.frequency.value = 400;

    const gain3 = ctx.createGain();
    gain3.gain.value = 0.1;

    // LFO for breathing effect on Layer 3
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.1; // Slow breath
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 100; // Filter modulation depth
    lfo.connect(lfoGain).connect(filter3.frequency);
    lfo.start();

    osc3.connect(filter3).connect(gain3).connect(masterGain);

    // Start all
    osc1.start();
    osc2.start();
    osc3.start();

    oscillatorsRef.current = [osc1, osc2, osc3, lfo];
    gainNodesRef.current = [masterGain];
  };

  const togglePlay = async () => {
    if (!audioContextRef.current) {
      initAudio();
    }

    if (audioContextRef.current?.state === 'suspended') {
      await audioContextRef.current.resume();
    }

    if (isPlaying) {
      audioContextRef.current?.suspend();
    }

    setIsPlaying(!isPlaying);
  };

  // Auto-attempt play on mount (rarely works without interaction, but worth a shot for "Reloads")
  // For a better UX, we'll wait for user interaction, OR we show the button in "OFF" state initially.

  return (
    <div className="audio-player">
      <button onClick={togglePlay} className={`audio-btn ${isPlaying ? 'playing' : ''}`}>
        {isPlaying ? (
          <div className="equalizer">
            <span></span><span></span><span></span>
          </div>
        ) : (
          <span className="play-text">PLAY SOUNDSCAPE</span>
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
