'use client';

import { useEffect } from 'react';

export default function Axe() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      import('react-axe').then((axe) => {
        const React = require('react');
        const ReactDOM = require('react-dom');
        axe.default(React, ReactDOM, 1000);
      });
    }
  }, []);

  return null;
}