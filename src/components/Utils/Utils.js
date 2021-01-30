import React from 'react';
import { format as formatDate } from 'date-fns';
import './Utils.css';

export function Section({ className, list, ...props }) {
  const classes = ['Section', list && 'Section--list', className]
    .filter(Boolean)
    .join(' ');
  return <section className={classes} {...props} />;
}
