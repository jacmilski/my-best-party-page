// @ts-nocheck
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  StyledContact,
  StyledContactForm,
  StyledGlobalError,
  StyledSuccessMessage,
} from "./Contact.styles";
import { StyledSecondTitle } from "../../../styles/sharedStyles";
import { useStaticQuery, graphql } from "gatsby";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import { formValidation, labels } from "./Contact.data";

function Contact({ isContactPage }) {
  const [isSend, setIsSend] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formValidation),
  });

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
      })
      .join("&");
  };

  const onSubmit = (data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "kontakt", ...data }),
    })
      .then(() => {
        setIsError(false);
        setIsSend(true);
      })
      .catch((err) => {
        setIsError(true);
        setIsSend(false);
        console.log(err.message);
      });
  };

  const { datoCmsContactSection } = useStaticQuery(graphql`
    query ContactQuery {
      datoCmsContactSection {
        title
        nameLabel
        emailLabel
        messageLabel
        buttonText
      }
    }
  `);

  const fields = [
    {
      type: "text",
      name: "name",
      label: datoCmsContactSection.nameLabel,
    },
    {
      type: "text",
      name: "email",
      label: datoCmsContactSection.emailLabel,
    },
    {
      type: "textarea",
      name: "message",
      label: datoCmsContactSection.messageLabel,
    },
  ];

  return (
    <StyledContact $isContactPage={isContactPage}>
      <StyledSecondTitle>{datoCmsContactSection.title}</StyledSecondTitle>
      <StyledContactForm
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        name="kontakt"
        data-netlify="true"
      >
        {fields.map(({ type, label, name }) => (
          <Input
            key={label}
            type={type}
            name={name}
            label={name}
            error={errors?.[name]?.message}
            register={register(name)}
          />
        ))}
        <Button type="submit" text={datoCmsContactSection.buttonText} />
        {isError ? (
          <StyledGlobalError>{labels.globalError}</StyledGlobalError>
        ) : null}
        {isSend ? (
          <StyledSuccessMessage>{labels.successMsg}</StyledSuccessMessage>
        ) : null}
      </StyledContactForm>
    </StyledContact>
  );
}

export default Contact;
