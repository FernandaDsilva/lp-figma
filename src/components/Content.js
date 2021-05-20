import {
  Box,
  Link,
  Image,
  Text,
  Button,
  HStack,
  VStack,
  Heading,
} from "@chakra-ui/react";

export const Content = () => {
  return (
    <Box w="full">
      <HStack>
        <VStack w="540px" h="439px" mt="70px">
          <Heading
            fontSize="44px"
            fontFamily="Inter"
            fontWeight="700"
            color="#99EFD0"
            line-height="50px"
          >
            Many reasons to get up and start to get back in the business
          </Heading>

          <Text
            color="#8476AA"
            fontSize="18px"
            fontFamily="Inter"
            line-height="22px"
            py="20px"
          >
            {" "}
            The harder you work for something, the greater you’ll feel when you
            achieve it.
          </Text>

          <HStack w="full" py="20px" justifyContent="left" align="center">
            <Button
              color="white"
              borderColor="orange.400"
              bg="orange.400"
              borderRadius="3px"
              variant="outline"
              fontSize="12px"
              w="157px"
              h="46px"
              boxShadow="-11.09px 18.13px 36.6483px rgba(242, 153, 74, 0.13)"
              _hover={{ color: "orange.500", backgroundColor: "orange.200" }}
            >
              LEARN MORE
            </Button>
            <Button
              color="orange.400"
              borderColor="orange.400"
              borderRadius="3px"
              variant="outline"
              fontSize="12px"
              w="157px"
              h="46px"
              _hover={{ color: "orange.500", backgroundColor: "orange.200" }}
            >
              DEMO
            </Button>
          </HStack>
        </VStack>

        <VStack>
          <Image src="MenRun.svg" w="600px" h="420px" />
        </VStack>
      </HStack>

      <HStack w="full" spacing={20} op>
        <Image opacity="0.2" src="./ProfitWel.svg" />
        <Image opacity="0.2" src="./Appcues.svg" />
        <Image opacity="0.2" src="./ShipBob.svg" />
        <Image opacity="0.2" src="./Bench.svg" />
        <Image opacity="0.2" src="./Subby.svg" />
        <Image opacity="0.2" src="./Demio.svg" />
      </HStack>
    </Box>
  );
};
