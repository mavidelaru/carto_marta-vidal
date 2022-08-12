import React from "react";
import { ReactElement, useState } from "react";
import Components from "../../../components";
import "./tabs.css";

type Props = {
  title?: string;
  children: ReactElement[];
  index?: number;
};

export default function Tabs({ children }: Props) {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div className="tabs-container">
      <ul className="tabs-container__list">
        {children.map((item: any, index: number) => (
          <Components.TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
            />
        ))}
      </ul>
      {children[selectedTab]}
    </div>
  );
}
