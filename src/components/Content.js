import {
  Box,
  Stack,
  Image,
  Text,
  Button,
  HStack,
  VStack,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export const Content = () => {
  return (
    <Box w="full" h="full">
      {/* HOME */}
      <HStack w="full">
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
      {/* LIST BRANDS */}
      <HStack w="full" h="100%" spacing={20}>
        <Image opacity="0.2" src="./ProfitWel.svg" />
        <Image opacity="0.2" src="./Appcues.svg" />
        <Image opacity="0.2" src="./ShipBob.svg" />
        <Image opacity="0.2" src="./Bench.svg" />
        <Image opacity="0.2" src="./Subby.svg" />
        <Image opacity="0.2" src="./Demio.svg" />
      </HStack>

      {/* GRID YOUR CHOISE */}
      <Stack w="full" justifyContent="center" align="center" mt="100px">
        <Heading
          fontSize="42px"
          fontFamily="Inter"
          fontWeight="700"
          color="#99EFD0"
          line-height="50px"
          text-align="center"
        >
          Your Choice
        </Heading>
        <Text
          color="#8476AA"
          fontSize="18px"
          fontFamily="Inter"
          line-height="22px"
          py="20px"
        >
          There are many reasons to get down and start to get depressed about
          your situation.
        </Text>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={20}
          rowGap={8}
        >
          <GridItem>
            <Grid templateColumns="repeat(2, 24px 1fr)" gap={2}>
              <GridItem rowSpan={2}>
                <Image src="./Esctatic.svg" />
              </GridItem>
              <GridItem colSpan={3}>
                <Heading
                  fontSize="18px"
                  fontFamily="Inter"
                  fontWeight="semibold"
                  color="#99EFD0"
                  line-height="50px"
                  text-align="center"
                >
                  Ecstatic elegance
                </Heading>
              </GridItem>
              <GridItem colSpan={3} w="247px">
                <Text
                  color="#8476AA"
                  fontSize="14px"
                  fontFamily="Inter"
                  line-height="22px"
                >
                  Article nor prepare chicken you him now. Shy merits say advice
                  ten before lovers innate add.
                </Text>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem>
            <Grid templateColumns="repeat(2, 24px 1fr)" gap={2}>
              <GridItem rowSpan={2}>
                <Image src="./Earphones.svg" />
              </GridItem>
              <GridItem colSpan={3}>
                <Heading
                  fontSize="18px"
                  fontFamily="Inter"
                  fontWeight="semibold"
                  color="#99EFD0"
                  line-height="50px"
                  text-align="center"
                >
                  Folly words widow
                </Heading>
              </GridItem>
              <GridItem colSpan={3} w="247px">
                <Text
                  color="#8476AA"
                  fontSize="14px"
                  fontFamily="Inter"
                  line-height="22px"
                >
                  Effect if in up no depend seemed. Ecstatic elegance gay but
                  disposed. We me rent been part what.
                </Text>
              </GridItem>
            </Grid>
          </GridItem>{" "}
          <GridItem>
            <Grid templateColumns="repeat(2, 24px 1fr)" gap={2}>
              <GridItem rowSpan={2}>
                <Image src="./wifi.svg" />
              </GridItem>
              <GridItem colSpan={3}>
                <Heading
                  fontSize="18px"
                  fontFamily="Inter"
                  fontWeight="semibold"
                  color="#99EFD0"
                  line-height="50px"
                  text-align="center"
                >
                  Possible procured trifling
                </Heading>
              </GridItem>
              <GridItem colSpan={3} w="247px">
                <Text
                  color="#8476AA"
                  fontSize="14px"
                  fontFamily="Inter"
                  line-height="22px"
                >
                  We me rent been part what. An concluded sportsman offending so
                  provision mr education.
                </Text>
              </GridItem>
            </Grid>
          </GridItem>{" "}
          <GridItem>
            <Grid templateColumns="repeat(2, 24px 1fr)" gap={2}>
              <GridItem rowSpan={2}>
                <Image src="./OpenGame.svg" />
              </GridItem>
              <GridItem colSpan={3}>
                <Heading
                  fontSize="18px"
                  fontFamily="Inter"
                  fontWeight="semibold"
                  color="#99EFD0"
                  line-height="50px"
                  text-align="center"
                >
                  Open game
                </Heading>
              </GridItem>
              <GridItem colSpan={3} w="247px">
                <Text
                  color="#8476AA"
                  fontSize="14px"
                  fontFamily="Inter"
                  line-height="22px"
                >
                  Shy merits say advice ten before lovers innate add. She
                  cordially behaviour can attempted estimable.
                </Text>
              </GridItem>
            </Grid>
          </GridItem>{" "}
          <GridItem>
            <Grid templateColumns="repeat(2, 24px 1fr)" gap={2}>
              <GridItem rowSpan={2}>
                <Image src="./Endeavor.svg" />
              </GridItem>
              <GridItem colSpan={3}>
                <Heading
                  fontSize="18px"
                  fontFamily="Inter"
                  fontWeight="semibold"
                  color="#99EFD0"
                  line-height="50px"
                  text-align="center"
                >
                  Endeavor
                </Heading>
              </GridItem>
              <GridItem colSpan={3} w="247px">
                <Text
                  color="#8476AA"
                  fontSize="14px"
                  fontFamily="Inter"
                  line-height="22px"
                >
                  Improve ashamed married expense bed her comfort pursuit mrs.
                  Four time took ye your as fail lady.
                </Text>
              </GridItem>
            </Grid>
          </GridItem>{" "}
          <GridItem>
            <Grid templateColumns="repeat(2, 24px 1fr)" gap={2}>
              <GridItem rowSpan={2}>
                <Image src="./Lamp.svg" />
              </GridItem>
              <GridItem colSpan={3}>
                <Heading
                  fontSize="18px"
                  fontFamily="Inter"
                  fontWeight="semibold"
                  color="#99EFD0"
                  line-height="50px"
                  text-align="center"
                >
                  Comfort pursuit
                </Heading>
              </GridItem>
              <GridItem colSpan={3} w="247px">
                <Text
                  color="#8476AA"
                  fontSize="14px"
                  fontFamily="Inter"
                  line-height="22px"
                >
                  Had denoting properly jointure you occasion directly raillery.
                  In said to of poor full be post face snug.
                </Text>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Stack>

      {/* CARD */}
      <HStack w="full" mt="100px" justifyContent="space-between" align="center">
        <VStack w="470px" h="439px" mt="70px">
          <Heading
            fontSize="44px"
            fontFamily="Inter"
            fontWeight="700"
            color="#99EFD0"
            line-height="50px"
          >
            Increase your business{" "}
            <Text as="span" color="#F2994A">
              traffic{" "}
            </Text>
          </Heading>

          <Text
            color="#8476AA"
            fontSize="18px"
            fontFamily="Inter"
            line-height="22px"
            py="20px"
          >
            We are committed to processing the information in order to contact
            you and talk about your project.
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
          </HStack>
        </VStack>

        <VStack>
          <Image src="Graphics.svg" />
        </VStack>
      </HStack>

      {/* SAVE MONEY */}

      <Stack w="full" justify="center" align="center" mt="100px">
        <Heading
          w="827px"
          fontSize="42px"
          fontFamily="Inter"
          fontWeight="700"
          color="#99EFD0"
          line-height="42px"
          textAlign="center"
          letterSpacing="0.33px"
        >
          3 Simple Ways To
          <Text as="span" color="#F2994A">
            {" "}
            Save{" "}
          </Text>
          A Bunch Of{" "}
          <Text as="span" color="#F2994A">
            {" "}
            Money{" "}
          </Text>{" "}
          When Buying A New Computer
        </Heading>
        <Text
          w="452px"
          color="#8476AA"
          fontSize="15px"
          fontFamily="Inter"
          line-height="22px"
          py="20px"
          textAlign="center"
        >
          There are many reasons to get down and start to get depressed about
          your situation.
        </Text>

        <HStack spacing="100px">
          <VStack>
            <Heading
              fontSize="42px"
              fontFamily="Inter"
              fontWeight="700"
              color="#99EFD0"
              line-height="42px"
              textAlign="center"
              letterSpacing="0.33px"
            >
              100+
            </Heading>

            <Text
              w="291px"
              color="#8476AA"
              fontSize="15px"
              fontFamily="Inter"
              line-height="20px"
              py="20px"
              textAlign="center"
              letterSpacing="0.2px"
            >
              5 Reasons To Purchase Desktop Computers
            </Text>
          </VStack>

          <VStack>
            <Heading
              fontSize="42px"
              fontFamily="Inter"
              fontWeight="700"
              color="#99EFD0"
              line-height="42px"
              textAlign="center"
              letterSpacing="0.33px"
            >
              43,000+
            </Heading>

            <Text
              w="291px"
              color="#8476AA"
              fontSize="15px"
              fontFamily="Inter"
              line-height="20px"
              py="20px"
              textAlign="center"
              letterSpacing="0.2px"
            >
              3 Simple Ways To Save A Bunch Of Money When Buying A New Computer
            </Text>
          </VStack>

          <VStack>
            <Heading
              fontSize="42px"
              fontFamily="Inter"
              fontWeight="700"
              color="#99EFD0"
              line-height="42px"
              textAlign="center"
              letterSpacing="0.33px"
            >
              30+
            </Heading>

            <Text
              w="291px"
              color="#8476AA"
              fontSize="15px"
              fontFamily="Inter"
              line-height="20px"
              py="20px"
              textAlign="center"
              letterSpacing="0.2px"
            >
              A Discount Toner Cartridge Is Better Than Ever And You Will Save
              50 Or More
            </Text>
          </VStack>
        </HStack>
      </Stack>

      {/* NEXT PROJETCT */}

      <Stack w="full" justify="center" align="center" mt="100px">
        <Heading
          w="827px"
          fontSize="42px"
          fontFamily="Inter"
          fontWeight="700"
          color="#99EFD0"
          line-height="42px"
          textAlign="center"
          letterSpacing="0.33px"
        >
          Create your
          <Text as="span" color="#F2994A">
            {" "}
            next project{" "}
          </Text>
          with startup framework
        </Heading>

        <Button
          color="white"
          borderColor="orange.400"
          bg="orange.400"
          borderRadius="3px"
          variant="outline"
          fontSize="12px"
          w="164px"
          h="54px"
          boxShadow="-11.09px 18.13px 36.6483px rgba(242, 153, 74, 0.13)"
          _hover={{ color: "orange.500", backgroundColor: "orange.200" }}
        >
          GET STARTED
        </Button>
        <Stack bgImage="./Drop.svg">
          <Image src="./MeteorToUp.svg" />
        </Stack>
      </Stack>
    </Box>
  );
};
