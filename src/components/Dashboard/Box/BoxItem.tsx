import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib";

interface IBoxItemProps {
  title: string;
  parsent: number;
  count: number;
  icon: IconType;
  iconColor: string;
  iconBG: string;
  text: string;
  link: string;
  indicate: IconType;
  indicateColor: boolean;
}

const BoxItem: React.FC<IBoxItemProps> = ({
  title,
  parsent,
  count,
  icon,
  iconColor,
  iconBG,
  text,
  link,
  indicate,
  indicateColor,
}) => {
  return (
    <Box
      as="div"
      w="280px"
      maxW="100%"
      p="0.5rem"
      borderRadius="lg"
      backdropFilter="blur(10px)"
      backdropBlur="2xl"
      bg="white"
      _dark={{ bg: "whiteAlpha.100" }}
    >
      <Flex align="center" justifyContent="space-between">
        <Flex flexDir="column" gap={2}>
          <Text
            textTransform="uppercase"
            color="blackAlpha.600"
            _dark={{ color: "whiteAlpha.600" }}
            fontSize="md"
          >
            {title}
          </Text>
          <Heading as="h2" fontSize="4xl" fontWeight="medium">
            {count}
          </Heading>
          <Link href={link}>
            <Text
              textDecoration={"underline"}
              color="blackAlpha.800"
              _dark={{ color: "whiteAlpha.800" }}
            >
              {text}
            </Text>
          </Link>
        </Flex>
        <Flex flexDir="column" gap={14} align="flex-end">
          <Text
            color={indicateColor ? "green" : "red"}
            display="flex"
            gap={1}
            justifyContent="center"
            alignItems="center"
          >
            <Icon as={indicate} />
            {parsent}%
          </Text>
          <Icon
            as={icon}
            bg={iconBG}
            fontSize="3xl"
            p="1"
            color={iconColor}
            rounded="sm"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default BoxItem;
