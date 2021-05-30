import { Box, Link, Stack, Image, Button, HStack } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box w="full">
      <Stack
        w="full"
        flexDirection={["column", "row"]}
        justifyContent="space-between"
        align="center"
        color="white"
      >
        <HStack
          flexDirection={["column", "row", "row", "row"]}
          align="center"
          py={["5px", "0"]}
          fontSize="12px"
          spacing={8}
        >
          <Image
            src="./Logo.svg"
            alt="Logo"
            w="36px"
            h="36px"
            position={["absolute", "initial"]}
            top={["10px", "0"]}
            left={["10px", "0"]}
          />
          <Link py={["5px", "0"]}>ABOUT</Link>
          <Link py={["5px", "0"]}>GALLRY</Link>
          <Link py={["5px", "0"]}>PRICING</Link>
          <Link py={["5px", "0"]}>FAQ</Link>
          <Link py={["5px", "0"]}>BENEFITS</Link>
        </HStack>

        <HStack flexDirection="row" align="center">
          <Button
            color="orange.400"
            borderColor="orange.400"
            borderRadius="3px"
            variant="outline"
            fontSize="12px"
            w="112px"
            h="36px"
            _hover={{ color: "orange.500", backgroundColor: "orange.200" }}
          >
            SING IN
          </Button>
          <Button
            color="white"
            borderColor="orange.400"
            bg="orange.400"
            borderRadius="3px"
            variant="outline"
            fontSize="12px"
            w="112px"
            h="36px"
            boxShadow="-11.09px 18.13px 36.6483px rgba(242, 153, 74, 0.13)"
            _hover={{ color: "orange.500", backgroundColor: "orange.200" }}
          >
            SING UP
          </Button>
        </HStack>
      </Stack>
    </Box>
  );
};
