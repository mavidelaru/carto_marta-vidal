type Props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
};

export default function TabTitle({ title, setSelectedTab, index }: Props) {
  return (
    <li className="tabs-container__list-element__button-wrapper">
      <button className = {`
            tab 
            tabs-container__list-element__button`} 
            onClick={() => setSelectedTab(index)}>{title}</button>
    </li>
  );
}
