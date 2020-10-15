import { css } from "@emotion/css";
import tw from "@tailwindcssinjs/macro";
import HeaderStyled from "../components/HeaderStyled";

const Test = () => (
  <div className={css(tw`grid justify-center items-center h-screen`)}>
    <HeaderStyled>@emotion/css</HeaderStyled>
  </div>
);

export default Test;
