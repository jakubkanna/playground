import { useState } from "react";
/**
 * This Clock component receives two props: color and time.
 * When you select a different color in the select box,
 * the Clock component receives a different color prop from its parent component.
 * However, for some reason, the displayed color doesn’t update. Why? Fix the problem.
 */
export default function Clock(props) {
  return <h1 style={{ color: props.color }}>{props.time}</h1>;
}
