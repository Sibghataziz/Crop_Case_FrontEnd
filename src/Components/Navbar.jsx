import { Box, Image, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import logo from "../SVG/logo.svg";
import analytics from "../SVG/analytics.svg";
import community from "../SVG/community.svg";
import help from "../SVG/help.svg";
import logout from "../SVG/logout.svg";
import overview from "../SVG/overview.svg";
import payout from "../SVG/payout.svg";
import products from "../SVG/products.svg";
import schedule from "../SVG/schedule.svg";
import settings from "../SVG/settings.svg";
import statements from "../SVG/statements.svg";
import NavItem from "./NavItem";

const upperNavbar = [
  {
    icon: overview,
    name: "Overview",
    active: true,
  },
  {
    icon: products,
    name: "Products",
  },
  {
    icon: analytics,
    name: "Analytics",
  },
  {
    icon: schedule,
    name: "Schedule",
  },
  {
    icon: payout,
    name: "Payout",
  },
  {
    icon: statements,
    name: "Statements",
  },
];

const lowerNavbar = [
  {
    icon: help,
    name: "Help",
  },
  {
    icon: community,
    name: "Community",
  },
  {
    icon: settings,
    name: "Settings",
  },
  {
    icon: logout,
    name: "Logout",
  },
];

export default function Navbar() {
  return (
    <>
      <VStack width="247px" borderRight='1px solid #B7B7B7' height='1024px'>
        <VStack position="relative" width="149px" top="84px" height='799px'>
          <Box width="125px">
            <Image src={logo}></Image>
          </Box>

          <VStack
            position="relative"
            // width="149px"
            top="58.5px"
            height='686.5px'
          >
            <VStack position='relative' spacing="25px" >
              {upperNavbar.map((order, index) => (
                <NavItem {...order} key={index} />
              ))}
            </VStack>
                <Box position='relative' top='60px' borderTop='0.5px solid #B7B7B7' width='149px' ></Box>
            <VStack position='relative' spacing="25px" top='120px'>
              {lowerNavbar.map((order, index) => (
                <NavItem {...order} key={index} />
              ))}
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </>
  );
}
