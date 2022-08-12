import React from "react";

type Props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
};

export default function TabTitle({ title, setSelectedTab, index }: Props) {
  document.addEventListener("DOMContentLoaded", function() { 
    console.log('event listener');
    const button = ((document.getElementById("tabs-container__button-1") as HTMLCanvasElement)||null)
    if(button){
      console.log('tabs-container__button-1');
      button.focus();
    };
 });
 
  return (
    <li className="tabs-container__list-element__button-wrapper" >
      <button 
        id={`tabs-container__button-${index}`} 
        className = {`
            tab 
            tabs-container__list-element__button
            ${index}`} 
            onClick={() => setSelectedTab(index)}>{title}</button>
    </li>
  );
}
