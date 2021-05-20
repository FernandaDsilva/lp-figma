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
          flexDirection={["column", "row"]}
          align="center"
          fontSize="12px"
          spacing={8}
        >
          <Image src="./Logo.svg" alt="Logo" w="36px" h="36px" />
          <Link>ABOUT</Link>
          <Link>GALLRY</Link>
          <Link>PRICING</Link>
          <Link>FAQ</Link>
          <Link>BENEFITS</Link>
        </HStack>

        <HStack flexDirection={["column", "row"]} align="center">
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
