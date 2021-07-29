import styled from "styled-components";
import Dropdown from "./components/dropdown";

const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 100vh;
`;

export default function App() {
  return (
    <Main>
      <h1>Custom Select / Dropdown</h1>
      <Dropdown />
    </Main>
  );
}
