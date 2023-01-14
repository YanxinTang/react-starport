import type { StarportOptions } from './options';
import React from 'react';
import { defaultOptions } from './options';
import { root } from './utils';

/**
 * StarportInstanceRect describes the position relative to the top left of document
 */
export interface StarportInstanceRect {
  width: number;
  height: number;
  left: number;
  top: number;
  margin?: string;
  padding?: string;
}

function getRectOfElement(el: HTMLElement): StarportInstanceRect {
  const { width, height, left, top } = el.getBoundingClientRect();
  const domStyle = window.getComputedStyle(el);
  const padding = domStyle.padding;

  /**
   * Calculate transition end style
   */
  const rect = {
    width,
    height,
    left,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    top: root!.scrollTop + top,
    padding,
  };
  return rect;
}

export interface StarportInstance {
  prevEl: HTMLElement | null;
  el: HTMLElement | null;
  port: string;
  element: React.ReactNode;
  options: StarportOptions;
  rect: StarportInstanceRect;
  isLanded: boolean;
  needRenderNext: boolean;
  nextRect: StarportInstanceRect | null;
  transitionStartProps?: Record<string, unknown> | null;
  liftOffTime: number;
}

function createStarportInstance(
  port: string,
  options: StarportOptions
): StarportInstance {
  const el = null;
  const prevEl = null;

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };

  return {
    prevEl,
    el,
    port,
    element: null,
    options: mergedOptions,
    rect: {
      width: 0,
      height: 0,
      left: 0,
      top: 0,
    },
    nextRect: null,
    transitionStartProps: null,
    isLanded: true,
    needRenderNext: false,
    liftOffTime: 0,
  };
}

export { createStarportInstance, getRectOfElement };
