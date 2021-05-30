import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { Header } from "../components/Header";

import { Container } from "../components/Container";
import { CTA } from "../components/CTA";
import { Content } from "../components/Content";
import MailCard from "../components/MailCard";

const Index = () => (
  <Container
    w="full"
    h="full"
    pt="40px"
    px={["20px", "170px"]}
    bgGradient="linear-gradient(222.26deg, #3B1D60 1.22%, #040D3E 106.28%);"
  >
    <Header />
    <Content />
  </Container>
);

export default Index;
