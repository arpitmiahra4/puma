import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Img,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";

import {Link as Link2} from "react-router-dom"

import UserMenu from "../Login/UserMenu";
import { BiCart, BiHeart } from "react-icons/bi";
import { useMedia } from "../../MediaQuery/UseMedia";


export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box w="100%" position={"sticky"} top={0} zIndex={5}>
      <Flex
        bg={"#181818"}
        color="white"
        minH={"70px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", lg: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link href="/">
            <Box>
              <Img
                w="50px"
                src="https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo-1970-1974.png"
              />
            </Box>
          </Link>
          <Flex display={{ base: "none", lg: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <HStack
          spacing={["1%","2%","3%",null,null]}
        >
          <InputGroup>
            <InputLeftElement children={<SearchIcon color="gray.300" />} />
            <Input focusBorderColor="#bdc1c5" borderColor="#999999" borderRadius={0} placeholder="SEARCH PUMA.COM" />
          </InputGroup>
          <Box cursor={"pointer"}><BiCart size="30px" /></Box>
          <Box cursor={"pointer"}><BiHeart size="26px" /></Box>
          <UserMenu />
        </HStack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                href={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={500}
                ml="15px"
                _hover={{
                  textDecoration: "none",
                  borderBottom: "2px solid #8a7350",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                p={4}
                rounded={"none"}
              // w="80vw"
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      _hover={{ color: "#8a7350" }}
    >
      <Stack direction={"row"} align={"start"}>
        <Box>
          <Text fontWeight={500} color="black">
            {label}
          </Text>
        </Box>
        <Flex
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  const {smallScreen} = useMedia()
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ lg: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      {!smallScreen && <> <Link2 to={"/"} ><Button colorScheme='purple'>Homepage </Button> </Link2> </>}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "New_Arrivals",
    href: "/new-arrivals",
    children: [
      {
        label: "Explore Design Work",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        href: "#",
      },
    ],
  },
  {
    label: "Women",
    href: "/women",
    children: [
      {
        label: "Job Board",
        href: "#",
      },
      {
        label: "Freelance Projects",
        href: "#",
      },
    ],
  },

  {
    label: "Men",
    href: "/men",
    children: [
      {
        label: "Job Board",
        href: "#",
      },
      {
        label: "Freelance Projects",
        href: "#",
      },
    ],
  },
  {
    label: "Kids",
    href: "/kids",
    children: [
      {
        label: "Job Board",
        href: "#",
      },
      {
        label: "Freelance Projects",
        href: "#",
      },
    ],
  },
  {
    label: "Collaborations",
    href: "/collaborations",
    children: [
      {
        label: "Job Board",
        href: "#",
      },
      {
        label: "Freelance Projects",
        href: "#",
      },
    ],
  },
  {
    label: "Sport",
    href: "/sport",
    children: [
      {
        label: "Job Board",
        href: "#",
      },
      {
        label: "Freelance Projects",
        href: "#",
      },
    ],
  },
  {
    label: "Motorsport",
    href: "motorsport",
    children: [
      {
        label: "Job Board",
        href: "#",
      },
      {
        label: "Freelance Projects",
        href: "#",
      },
    ],
  },
  {
    label: "Outlet",
    href: "/outlet",
    children: [
      {
        label: "Job Board",
        href: "#",
      },
      {
        label: "Freelance Projects",
        href: "#",
      },
    ],
  },
];
