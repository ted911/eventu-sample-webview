import styled from "styled-components";
import RootHeader from "./_components/RootHeader";
import RootFooter from "./_components/RootFooter";

const RootLayoutContainer = styled.div``;
const RootLayout = () => {
  return (
    <RootLayoutContainer>
      <RootHeader />
      <RootFooter />
    </RootLayoutContainer>
  );
};
export default RootLayout;
