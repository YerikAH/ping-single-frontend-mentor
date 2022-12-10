import React, { useEffect, useState } from "react";
import {
  SectionOneComponent,
  SoForm,
  SoFormInputBox,
  SoFormInputError,
  SoFormInputSubmit,
  SoFormInputTex,
} from "../styles/section_one";
import { messageEmpty, notIsEmail } from "../interfaces/messages";
import { BorderStyle } from "../interfaces/interface";

export default function SectionOne() {
  const [borderError, setBorderError] = useState<BorderStyle>();
  const [thereError, setThereError] = useState(true);
  const [messageError, setMessageError] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [typeButton, setTypeButton] = useState("button")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const textInputEmail = e.currentTarget.value;
    setEmailInput(textInputEmail);
    validateInputEmail(textInputEmail);
  };

  function validateInputEmail(emailText: string) {
    const regexEmail: RegExp = /^(\w+[/./-]?){1,}@[a-z]+[.]\w{2,}$/;
    if (emailText == "") {
      activateError(messageEmpty);
    } else if (!regexEmail.test(emailText.trim())) {
      activateError(notIsEmail);
    } else {
      setThereError(false);
      changeColorBorder("1px solid var(--pale-blue)");
    }
  }

  function activateError(messageErrArg: string) {
    setMessageError(messageErrArg);
    setThereError(true);
    changeColorBorder();
  }

  function changeColorBorder(valueColor?: string) {
    let borderThereError: BorderStyle = {
      border: "",
    };
    if (valueColor !== undefined) {
      borderThereError.border = valueColor;
    } else {
      borderThereError.border = "1px solid var(--light-red)";
    }
    setBorderError(borderThereError);
  }

  function handleBlur(){
    if(!thereError){
      setThereError(false);
    }

    if(emailInput==""){
      setMessageError("")
      changeColorBorder("1px solid var(--pale-blue)");
    }
  } 

  useEffect(() => {
    if(thereError){
      setTypeButton("button")
    }else{
      setTypeButton("submit")
    }
  }, [thereError])
  
  
  return (
    <SectionOneComponent role="section">
      <SoForm>
        <SoFormInputBox>
          <SoFormInputTex
            placeholder="Your email address..."
            value={emailInput}
            style={borderError}
            onChange={(e) => handleChange(e)}
            onBlur={handleBlur}
          />
          {thereError && <SoFormInputError>{messageError}</SoFormInputError>}
        </SoFormInputBox>
        <SoFormInputSubmit type={typeButton} value="Notify Me" />
      </SoForm>
    </SectionOneComponent>
  );
}
