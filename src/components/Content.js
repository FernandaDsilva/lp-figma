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
  Divider,
  Input,
} from "@chakra-ui/react";

import { AiOutlineGoogle, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

export const Content = () => {
  return (
    <Box w="full" h="full">
      {/* HOME */}
      <HStack w="full" flexDirection={["column", "row"]}>
        <VStack w={["300px", "540px"]} h="439px" mt="70px">
          <Heading
            fontSize={["32px", "44px"]}
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

        <VStack w={["300px", "600px"]}>
          <Image src="MenRun.svg" w="600px" />
        </VStack>
      </HStack>
      {/* LIST BRANDS */}
      <HStack
        w="full"
        h="100%"
        flexDirection={["column", "row"]}
        justify="center"
        align="center"
        spacing={["0", "20"]}
      >
        <Image opacity="0.2" py="5px" src="./ProfitWel.svg" />
        <Image opacity="0.2" py="5px" src="./Appcues.svg" />
        <Image opacity="0.2" py="5px" src="./ShipBob.svg" />
        <Image opacity="0.2" py="5px" src="./Bench.svg" />
        <Image opacity="0.2" py="5px" src="./Subby.svg" />
        <Image opacity="0.2" py="5px" src="./Demio.svg" />
      </HStack>

      {/* GRID YOUR CHOISE */}
      <Stack
        w="full"
        justifyContent="center"
        align="center"
        mt={["20px", "100px"]}
        border="1"
      >
        <Heading
          fontSize={["32px", "42px"]}
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
          fontSize={["sm", "md"]}
          fontFamily="Inter"
          line-height="22px"
          py="20px"
          textAlign="center"
        >
          There are many reasons to get down and start to get depressed about
          your situation.
        </Text>
      </Stack>
      {/* GRID SERVICES */}
      <Stack>
        <Grid
          w={["350px", "full"]}
          px={["100px", "0"]}
          columns={[1, null, 3]}
          templateRows="repeat(2, 1fr)"
          templateColumns={["repeat(1, 1fr)", null, "repeat(3, 1fr)"]}
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
      <HStack
        w="full"
        mt={["20px", "100px"]}
        justifyContent={["initial", "space-between"]}
        align="center"
        flexDirection={["column", "row"]}
      >
        <VStack w={["full", "470px"]} h="439px" justify={["center", "initial"]}>
          <Heading
            fontSize={["32px", "44px"]}
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

      <Stack w="full" justify="center" align="center" mt={["20px", "100px"]}>
        <Heading
          w={["full", "827px"]}
          fontSize={["32px", "42px"]}
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

        <HStack spacing={["0", "100px"]} flexDirection={["column", "row"]}>
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

      <Stack w="full" justify="center" align="center" mt={["20px", "100px"]}>
        <Heading
          w={["full", "827px"]}
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
      </Stack>

      {/* MAPAMUNDI */}
      <HStack
        w="full"
        mt={["20px", "100px"]}
        justifyContent="space-between"
        align="center"
        position="relative"
        flexDirection={["column", "row"]}
      >
        <VStack w={["full", "470px"]} h="439px" mt="70px">
          <Heading
            fontSize="44px"
            fontFamily="Inter"
            fontWeight="700"
            color="#99EFD0"
            line-height="50px"
          >
            Invest property for better{" "}
            <Text as="span" color="#F2994A">
              business{" "}
            </Text>
          </Heading>

          <Text
            w={["full", "470px"]}
            color="#8476AA"
            fontSize="15px"
            fontFamily="Inter"
            line-height="28px"
            py="20px"
          >
            We are committed to processing the information in order to contact
            you and talk about your project. We are committed to processing the
            information.
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
          <Image
            src="Map.svg"
            objectFit="cover"
            w="600px"
            position="absolute"
            bottom={["70px", "95px"]}
            right={["0", "-139px"]}
            zIndex="1"
            overflow="hidden"
          />
          {/* CARD MAP */}
          <VStack
            w="260px"
            h="414px"
            bg="white "
            borderRadius="10px"
            m="0"
            p="0"
            zIndex="2"
          >
            <Image
              src="BlueNeural.svg"
              w="full"
              borderTopLeftRadius="10px"
              borderTopEndRadius="10px"
            />
            <VStack justify="left" align="left">
              <Heading fontSize="18px" fontFamily="Inter" fontWeight="semibold">
                Omah mukti residence
              </Heading>
              <Text
                fontSize="10px"
                fontFamily="Inter"
                fontWeight="400"
                letterSpacing="0.5px"
                line-height="13px"
                color="#637381"
                text-align="left"
              >
                Merpati sidomuncul 26 street, UK
              </Text>

              <Heading
                fontSize="24px"
                fontFamily="Inter"
                fontWeight="400"
                line-height="29px"
                color="#13c296"
                pt="15px"
              >
                $176,000
              </Heading>
              <Text
                fontSize="10px"
                fontFamily="Inter"
                fontWeight="600"
                line-height="13px"
                color="#98a4af"
                textTransform="uppercase"
              >
                Funding Request
              </Text>

              <Divider color="#D6DBDF" pt="15px" />

              <HStack pt="10x" justify="space-between">
                <VStack>
                  <Heading
                    fontSize="14px"
                    fontFamily="Inter"
                    fontWeight="500"
                    line-height="17px"
                  >
                    13%
                  </Heading>
                  <Text
                    fontSize="10px"
                    fontFamily="Inter"
                    fontWeight="400"
                    letterSpacing="0.5px"
                    line-height="13px"
                    color="#637381"
                    text-align="left"
                  >
                    Apr
                  </Text>
                </VStack>
                <VStack>
                  <Heading
                    fontSize="14px"
                    fontFamily="Inter"
                    fontWeight="500"
                    line-height="17px"
                  >
                    68%
                  </Heading>
                  <Text
                    fontSize="10px"
                    fontFamily="Inter"
                    fontWeight="400"
                    letterSpacing="0.5px"
                    line-height="13px"
                    color="#637381"
                    text-align="left"
                  >
                    Ltv
                  </Text>
                </VStack>

                <VStack>
                  <Heading
                    fontSize="14px"
                    fontFamily="Inter"
                    fontWeight="500"
                    line-height="17px"
                  >
                    12 mth
                  </Heading>
                  <Text
                    fontSize="10px"
                    fontFamily="Inter"
                    fontWeight="400"
                    letterSpacing="0.5px"
                    line-height="13px"
                    color="#637381"
                    text-align="left"
                  >
                    Loan
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </VStack>

          <Image
            src="./Arrow.svg"
            position="absolute"
            bottom="250px"
            right={["302px", "216px"]}
            zIndex="3"
          />
        </VStack>
      </HStack>

      {/* MEETING */}

      <HStack
        spacing={["0", "84px"]}
        mt="50px"
        flexDirection={["column", "row"]}
      >
        <Image w="494px" h="448px" src="./Metting.svg" />
        <VStack w={["full", "512px"]} h="290px" justify="left" align="left">
          <Heading
            fontSize="26px"
            fontFamily="Inter"
            fontWeight="semibold"
            color="#99EFD0"
            line-height="50px"
            text-align="center"
          >
            Help Finding Information Online
          </Heading>
          <Text
            w={["full", "414px"]}
            fontSize="15px"
            fontFamily="Inter"
            fontWeight="900"
            lineHeight="20px"
            color="#8476AA
            "
          >
            Fully customizable and neatly organized components will help you
            work faster without limiting creative freedom.
          </Text>

          <HStack spacing={["0", "64px"]} flexDirection={["column", "row"]}>
            <VStack w="224px" justify="left" align="left">
              <Image w="24px" h="24px" src="./Rabbit.svg" />
              <Heading
                fontSize="18px"
                fontFamily="Inter"
                fontWeight="semibold"
                color="#99EFD0"
                line-height="50px"
                text-align="center"
              >
                Feature One
              </Heading>
              <Text
                color="#8476AA"
                fontSize="14px"
                fontFamily="Inter"
                line-height="20px"
              >
                Fully customizable and neatly organized components will help you
                work faster
              </Text>
            </VStack>

            <VStack w="224px" justify="left" align="left">
              <Image w="24px" h="24px" src="./wifi.svg" />
              <Heading
                fontSize="18px"
                fontFamily="Inter"
                fontWeight="semibold"
                color="#99EFD0"
                line-height="50px"
                text-align="center"
              >
                Feature Two
              </Heading>
              <Text
                color="#8476AA"
                fontSize="14px"
                fontFamily="Inter"
                line-height="20px"
              >
                Fully customizable and neatly organized components will help you
                work faster
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </HStack>

      {/* EMAIL CARD  */}

      <Stack
        bg="rgba(60, 62, 125, 45%)"
        w="full"
        h="324px"
        borderRadius="5px"
        justify="center"
        align="center"
        mt="150px"
      >
        <Heading
          fontSize="44px"
          fontFamily="Inter"
          fontWeight="700"
          color="#F2994A"
          line-height="50px"
          textAlign="center"
        >
          There are many reasons to get down
        </Heading>

        <Text
          w="396px"
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

        <Input
          w="288px"
          placeholder="Your Email"
          bg="#979797"
          fontSize="12px"
          color="#FFFFFF"
          opacity="0.3"
          borderEndRadius="0"
          position="absolute"
          bottom={["120px", "262px"]}
          right={["160px", "594px"]}
        />
        <Button
          w="128px"
          bg="#F2994A"
          fontSize="12px"
          fontWeight="normal"
          color="white"
          textTransform="uppercase"
          borderStartRadius="0"
          position="absolute"
          bottom={["120px", "262px"]}
          right={["32px", "466px"]}
        >
          send
        </Button>

        <Text
          w="396px"
          color="#8476AA"
          fontSize="15px"
          fontFamily="Inter"
          line-height="22px"
          py="20px"
          textAlign="center"
        >
          No spam. Only releases, updates and discounts
        </Text>
      </Stack>

      {/* FOOTER */}

      <Stack w="full" mt={["20px", "100px"]}>
        <HStack justify="space-between">
          <Text fontSize="26px" fontWeight="bold" color="#F2994a">
            ARShakir
          </Text>

          <HStack h="full">
            <Stack
              bg="rgba(60, 62, 125, 45%)"
              w="40px"
              h="40px"
              borderRadius="50%"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
            >
              <AiOutlineGoogle color="white" />
            </Stack>
            <Stack
              bg="rgba(60, 62, 125, 45%)"
              w="40px"
              h="40px"
              borderRadius="50%"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
            >
              <AiOutlineTwitter color="white" />
            </Stack>
            <Stack
              bg="rgba(60, 62, 125, 45%)"
              w="40px"
              h="40px"
              borderRadius="50%"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
            >
              <FaFacebookF color="white" />
            </Stack>
          </HStack>
        </HStack>
      </Stack>
      <Stack w="full" justify="center" align="center">
        <HStack justify="space-between" align="center">
          <Text color="#8D8D8D" fontFamily="Inter" fontSize="sm">
            © Copyrights 2021
          </Text>
          <Text color="#8D8D8D" fontFamily="Inter" fontSize="sm">
            Privacy policy
          </Text>
          <Text color="#8D8D8D" fontFamily="Inter" fontSize="sm">
            Terms of service
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
};
