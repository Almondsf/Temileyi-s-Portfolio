import React from 'react';

export const FloralDecoration = () => (
  <div className="absolute -z-10 opacity-20">
    <div className="w-64 h-64 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 blur-3xl" />
  </div>
);

export const CurveDecoration = () => (
  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white/50 backdrop-blur-sm" />
);