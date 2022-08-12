import React from "react";
import "./button.css";

export type ButtonType = "contained" | "outlined" | "text";
export type ButtonSize = "normal" | "large" | "small";
export type ButtonStyle = "primary" | "secondary" | "tertiary";
export type ButtonRightIcon = "map" | "table" | "tileset" | "none";
export type ButtonLeftIcon = "addMap" | "table" | "tileset" | "products" | "map" | "none";

export interface ButtonParams {
  text: string;
  type?: ButtonType;
  size?: ButtonSize;
  style?: ButtonStyle;
  leftIcon?: ButtonLeftIcon;
  rightIcon?: ButtonRightIcon;
  onClick: () => void;
}

export default function Button(props: ButtonParams) {
  // We use this to create an individual id just in case we want to edit a specific button
  const buttonId: string = "button--id-" + Math.random().toString(36).slice(2);

  const checkButtonType = props.type
    ? "button--type-" + props.type
    : "button--type-contained";

  const checkButtonStyle = props.style
    ? "button--style-" + props.style
    : "button--style-primary";

  const checkButtonSize = props.size
    ? "button--size-" + props.size
    : "button--size-normal";

  const checkButtonRightIcon = props.rightIcon
    ? "button--right-icon-" + props.rightIcon
    : "button--right-icon-none";

  const checkButtonLeftIcon = props.leftIcon
    ? "button--left-icon-" + props.leftIcon
    : "button--left-icon-none";

  return (
    <button
      className={`
        button 
        ${checkButtonType} 
        ${checkButtonStyle} 
        ${checkButtonSize} 
        ${checkButtonRightIcon} 
        ${checkButtonLeftIcon}`}
      itemID={buttonId}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
