import styled from "@emotion/styled";
import tw from "@tailwindcssinjs/macro";

const HeaderStyled = styled.button(tw`
  relative
  w-64 min-w-full
  flex justify-center
  py-2 px-4
  border border-transparent
  text-sm leading-5 font-medium
  rounded-md
  text-white
  bg-indigo-600
  hover:bg-indigo-500
  focus[outline-none border-indigo-700 shadow-outline-indigo]
  active:bg-indigo-700
  transition duration-150 ease-in-out
`);

export default HeaderStyled;
