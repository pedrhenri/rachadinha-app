/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import Icons from "./Icons";
import { Flex } from "@aws-amplify/ui-react";
export default function BottomButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Icons: {}, H5: {}, "Frame 11": {}, BottomButton: {} },
      variantValues: { variant: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="column"
      width="196px"
      height="144px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      display="flex"
      {...getOverrideProps(overrides, "BottomButton")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 11")}
      >
        <Icons
          width="52px"
          height="52px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          tipo="Grupo"
          {...getOverrideProps(overrides, "Icons")}
        ></Icons>
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "H5")}
        ></Flex>
      </Flex>
    </Flex>
  );
}
