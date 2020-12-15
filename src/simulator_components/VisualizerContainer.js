import React from 'react';
import styles from './VisualizerContainer.css'

export function VisualizerContainer({ children, onClick, layoutClassName }) {
  return <section className={styles.component} {...{ onClick, children }} />
}