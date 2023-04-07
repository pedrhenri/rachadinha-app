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
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function CustomButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Button Icon36732725": {},
        label: {},
        "Button Icon36732727": {},
        CustomButton: {},
      },
      variantValues: { state: "Default" },
    },
    {
      overrides: {
        "Button Icon36732725": {},
        label: {},
        "Button Icon36732727": {},
        CustomButton: { backgroundColor: "rgba(252,233,233,1)" },
      },
      variantValues: { state: "Hover" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(191,64,64,1)"
      borderRadius="5px"
      padding="6px 12px 6px 12px"
      display="flex"
      {...getOverrideProps(overrides, "CustomButton")}
      {...rest}
    >
      <Icon
        width="14px"
        height="14px"
        display="none"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        type="none"
        fontSize="14px"
        {...getOverrideProps(overrides, "Button Icon36732725")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="700"
        color="rgba(191,64,64,1)"
        lineHeight="21px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Sair"
        {...getOverrideProps(overrides, "label")}
      ></Text>
      <Icon
        width="14px"
        height="14px"
        display="none"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        type="none"
        fontSize="14px"
        {...getOverrideProps(overrides, "Button Icon36732727")}
      ></Icon>
    </Flex>
  );
}
