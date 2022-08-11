import Components from "../../../components";

type Props = {
    title: string
  }

export default function Tab({ children }:any) {
    return <div className="tabs-container__list-element__container">{children}</div>
}
