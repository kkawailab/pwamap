import React from "react";
import Map from "./Map"

type ShopData = {
  [key: string]: string;
}

type ShopList = {
  [key: string]: ShopData
}

type Props = {
  data: ShopList;
}

const Content = (props: Props) => {
  const [ orientation, setOrientation] = React.useState<any>(window.orientation)

  return (
    <><Map data={props.data} /></>
  );
};

export default Content;
