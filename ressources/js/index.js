const waveConfigs = [
  { id: '#wave1', ampX: 60, ampY: 12, rot: 0.4, duration: 18000, delay: 0, phase: 1 },
  { id: '#wave2', ampX: 90, ampY: 16, rot: 0.5, duration: 22000, delay: 800, phase: 1 },
  { id: '#wave3', ampX: 120, ampY: 20, rot: 0.6, duration: 26000, delay: 1600, phase: 1 },
  { id: '#wave4', ampX: 150, ampY: 24, rot: 0.7, duration: 30000, delay: 2400, phase: 1 },

  { id: '#wave1_reverse', ampX: 60, ampY: 12, rot: 0.4, duration: 18000, delay: 0, phase: -1 },
  { id: '#wave2_reverse', ampX: 90, ampY: 16, rot: 0.5, duration: 22000, delay: 800, phase: -1 },
  { id: '#wave3_reverse', ampX: 120, ampY: 20, rot: 0.6, duration: 26000, delay: 1600, phase: -1 },
  { id: '#wave4_reverse', ampX: 150, ampY: 24, rot: 0.7, duration: 30000, delay: 2400, phase: -1 }
];

waveConfigs.forEach((wave) => {
  anime({
    targets: wave.id,

    // On compense le scaleX(-1) CSS :
    translateX: [
      { value: wave.ampX * wave.phase * -1 }, // mirror compensation
      { value: -wave.ampX * wave.phase * -1 }
    ],

    translateY: [
      { value: wave.ampY * wave.phase },
      { value: -wave.ampY * wave.phase }
    ],

    rotate: [
      { value: wave.rot * wave.phase },
      { value: -wave.rot * wave.phase }
    ],

    easing: 'easeInOutSine',
    duration: wave.duration,
    delay: wave.delay,
    direction: 'alternate',
    loop: true
  });
});
