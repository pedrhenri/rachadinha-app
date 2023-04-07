/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function Tela(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="160px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="110px 252px 110px 252px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Tela")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="40px"
        fontWeight="400"
        color="rgba(54,94,61,1)"
        lineHeight="50px"
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
        children="Nova Rachadinha"
        {...getOverrideProps(overrides, "Nova Rachadinha")}
      ></Text>
      <Flex
        gap="12px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <TextField
          width="300px"
          height="unset"
          shrink="0"
          label="Label"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField36883923")}
        ></TextField>
        <TextField
          width="300px"
          height="unset"
          shrink="0"
          label="Label"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField36874043")}
        ></TextField>
      </Flex>
    </Flex>
  );
}
