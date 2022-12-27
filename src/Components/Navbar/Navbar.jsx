import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
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
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  MenuItem,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { FaRegUser } from "react-icons/fa";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
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
          display={{ base: "flex", md: "none" }}
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
          <Link href="/"><Box>
            <Img
              w="50px"
              src="https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo-1970-1974.png"
            />
          </Box></Link>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
              color="white"
            >
              <FaRegUser />
            </MenuButton>
            <MenuList alignItems={"center"} color="black" p={5}>
              <MenuItem>My Account</MenuItem>
              <MenuDivider />
              <MenuItem>Wishlist</MenuItem>
              <MenuDivider />
              <MenuItem>Check Order/Initiate Return</MenuItem>
              <MenuDivider />
              <MenuItem>Store Finder</MenuItem>
              <MenuDivider />
              <MenuItem>Language</MenuItem>
              <Button
                textTransform={"uppercase"}
                w="100%"
                rounded="none"
                mb={2}
                color="white"
                bgColor="#8a7350"
                _hover={{ bgColor: "#8a7350" }}
              >
                Login
              </Button>
              <Button
                textTransform={"uppercase"}
                _hover={{ bgColor: "#999999" }}
                color="white"
                w="100%"
                rounded="none"
                bgColor={"#999999"}
              >
                Register Here
              </Button>
            </MenuList>
          </Menu>
        </Stack>
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
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
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
    label: "New Arrivals",
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
