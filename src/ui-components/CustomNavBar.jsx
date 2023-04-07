/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
} from "@aws-amplify/ui-react/internal";
import CustomButton from "./CustomButton";
import { Flex } from "@aws-amplify/ui-react";
export default function CustomNavBar(props) {
  const { overrides, ...rest } = props;
  const customNavBarOnClick = useAuthSignOutAction({ global: true });
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="flex-end"
      overflow="hidden"
      position="relative"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      onClick={() => {
        customNavBarOnClick();
      }}
      {...getOverrideProps(overrides, "CustomNavBar")}
      {...rest}
    >
      <CustomButton
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(191,64,64,1)"
        borderRadius="5px"
        padding="6px 12px 6px 12px"
        state="Default"
        {...getOverrideProps(overrides, "CustomButton")}
      ></CustomButton>
    </Flex>
  );
}
