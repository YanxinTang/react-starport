interface StarportOptions {
  /**
   * The duration of the animation in milliseconds.
   * @default 700
   */
  duration: number;
  /**
   * Easing function to use.
   * @see https://easings.net/
   * @default 'cubic-bezier(0.45, 0, 0.55, 1)'
   */
  easing: string;
}

const defaultOptions: StarportOptions = {
  duration: 700,
  easing: 'cubic-bezier(0.45, 0, 0.55, 1)',
};

export { defaultOptions };
export type { StarportOptions };
