import React from "react";
import RegisterHero from "../components/register/RegisterHeroSection";
import RegisterForms from "../components/register/RegisterFormSection";
import RegisterInfoCards from "../components/register/RegisterInfoCardsSection";
const Register = () => {
  return (
    <>
      <RegisterHero />
      <RegisterForms />
      <RegisterInfoCards />

    </>
  );
};

export default Register;