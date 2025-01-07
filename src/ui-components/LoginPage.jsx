/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function LoginPage(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="1440px"
      height="1024px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "LoginPage")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="column"
        width="600px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 60px 16px 60px"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="48px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="¡Bienvenido/a de vuelta!"
          {...getOverrideProps(overrides, "\u00A1Bienvenido/a de vuelta!")}
        ></Text>
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "TextField")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Correo Electrónico"
            {...getOverrideProps(overrides, "label38701974")}
          ></Text>
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "InputGroup38701976")}
          >
            <Flex
              gap="10px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              border="1px SOLID rgba(137,148,159,1)"
              borderRadius="5px"
              padding="8px 16px 8px 16px"
              {...getOverrideProps(overrides, "Input38701977")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(128,128,128,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children=""
                {...getOverrideProps(overrides, "placeholder38701978")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "PasswordField")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Contraseña"
            {...getOverrideProps(overrides, "label38701981")}
          ></Text>
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "InputGroup38701983")}
          >
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              border="1px SOLID rgba(137,148,159,1)"
              borderRadius="5px"
              padding="0px 0px 0px 16px"
              {...getOverrideProps(overrides, "Input38701984")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(128,128,128,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="40px"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children=""
                {...getOverrideProps(overrides, "placeholder38701985")}
              ></Text>
              <Flex
                gap="0"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                position="relative"
                border="1px SOLID rgba(137,148,159,1)"
                borderRadius="1px 5px 5px 1px"
                padding="8px 16px 8px 16px"
                {...getOverrideProps(overrides, "Button38702006")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="700"
                  color="rgba(13,26,38,1)"
                  lineHeight="24px"
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
                  children=""
                  {...getOverrideProps(overrides, "label38702008")}
                ></Text>
                <View
                  width="16px"
                  height="16px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Button Icon")}
                >
                  <Icon
                    width="14.67px"
                    height="10px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 14.666666030883789,
                      height: 10,
                    }}
                    paths={[
                      {
                        d: "M7.33333 1.33333C9.86 1.33333 12.1133 2.75333 13.2133 5C12.1133 7.24667 9.86 8.66667 7.33333 8.66667C4.80667 8.66667 2.55333 7.24667 1.45333 5C2.55333 2.75333 4.80667 1.33333 7.33333 1.33333ZM7.33333 0C4 0 1.15333 2.07333 0 5C1.15333 7.92667 4 10 7.33333 10C10.6667 10 13.5133 7.92667 14.6667 5C13.5133 2.07333 10.6667 0 7.33333 0ZM7.33333 3.33333C8.25333 3.33333 9 4.08 9 5C9 5.92 8.25333 6.66667 7.33333 6.66667C6.41333 6.66667 5.66667 5.92 5.66667 5C5.66667 4.08 6.41333 3.33333 7.33333 3.33333ZM7.33333 2C5.68 2 4.33333 3.34667 4.33333 5C4.33333 6.65333 5.68 8 7.33333 8C8.98667 8 10.3333 6.65333 10.3333 5C10.3333 3.34667 8.98667 2 7.33333 2Z",
                        fill: "rgba(13,26,38,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="16.67%"
                    bottom="20.83%"
                    left="4.17%"
                    right="4.17%"
                    {...getOverrideProps(overrides, "Vector38702022")}
                  ></Icon>
                </View>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 4372")}
        >
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "CheckboxField")}
          >
            <Flex
              padding="0px 0px 0px 0px"
              width="16px"
              height="16px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "CheckBox")}
            >
              <View
                width="16px"
                height="16px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0px"
                left="0px"
                borderRadius="4px"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(4,125,149,1)"
                {...getOverrideProps(overrides, "Fill")}
              ></View>
              <View
                width="13px"
                height="13px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="1.33px"
                left="1.33px"
                borderRadius="4px"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(4,125,149,1)"
                {...getOverrideProps(overrides, "\uD83D\uDD12Icon")}
              >
                <Icon
                  width="9.26px"
                  height="7.06px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 9.263251304626465,
                    height: 7.061980247497559,
                  }}
                  paths={[
                    {
                      d: "M2.94381 5.57164L0.747801 3.37564L0 4.11817L2.94381 7.06198L9.26325 0.742535L8.52072 0L2.94381 5.57164Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="22.22%"
                  bottom="23.45%"
                  left="16.67%"
                  right="12.08%"
                  {...getOverrideProps(overrides, "Vector38702016")}
                ></Icon>
              </View>
            </Flex>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
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
              children="Recuérdame"
              {...getOverrideProps(overrides, "label38702004")}
            ></Text>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="4px"
            padding="8px 16px 8px 16px"
            {...getOverrideProps(overrides, "Button38702011")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(4,125,149,1)"
              lineHeight="24px"
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
              children="¿Olvidaste tu contraseña?"
              {...getOverrideProps(overrides, "label38702013")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(0,0,0,0)"
          borderRadius="4px"
          padding="7px 15px 7px 15px"
          backgroundColor="rgba(4,125,149,1)"
          {...getOverrideProps(overrides, "Button38701992")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
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
            children="Iniciar Sesión"
            {...getOverrideProps(overrides, "label38701994")}
          ></Text>
        </Flex>
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "sign up")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
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
            children="¿No tienes una cuenta?"
            {...getOverrideProps(overrides, "\u00BFNo tienes una cuenta?")}
          ></Text>
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="4px"
            padding="6px 12px 6px 12px"
            {...getOverrideProps(overrides, "Button38702017")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="700"
              color="rgba(4,125,149,1)"
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
              children="Contáctanos"
              {...getOverrideProps(overrides, "label38702019")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="48px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="60px 60px 60px 60px"
        backgroundColor="rgba(255,252,246,1)"
        {...getOverrideProps(overrides, "Frame 3")}
      >
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 4378")}
        >
          <Image
            width="512px"
            height="512px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "Everything 1")}
          ></Image>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          fontStyle="italic"
          lineHeight="30px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="¡Bienvenido a Kairos!&#xA;&#xA;Una plataforma de aprendizaje integrada hecha para estudiantes"
          {...getOverrideProps(
            overrides,
            "\u00A1Bienvenido a Kairos! Una plataforma de aprendizaje integrada hecha para estudiantes"
          )}
        ></Text>
      </Flex>
    </Flex>
  );
}
