import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const ContactUsBlock = styled.div`
  width: 100vw;
  height: calc(100vh - 85px);

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    height: 1200px;
  }
`

const ContactUsContentsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 440px) {
    width: 100%;
  }
`

const ContactUsGoogleMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 40px;
  }

  @media (max-width: 420px) {
    width: calc(100% - 40px);

    iframe {
      width: 100%;
    }
  }
`

const ContactUsGoogleMapAddressText = styled.span`
  margin-top: 8px;
  width: 380px;
  font-size: 13px;
  color: #7a7a7a;
  text-align: center;

  @media (max-width: 420px) {
    width: calc(100vw - 40px);
  }
`

const ContactUsFormContainer = styled.div`
  width: 380px;

  @media (max-width: 420px) {
    width: calc(100% - 40px);
  }
`

const ContactUsForm = styled.form``

const ContactUsFormInput = styled.input`
  width: 100%;
  height: 44px;
  border: 4px solid #e6e6e6;
  box-sizing: border-box;
  padding-left: 12px;
  margin-bottom: 13px;

  background-color: #181818;

  color: #e6e6e6;
  font-size: 1.1rem;
  font-family: MICEGothic;
`

const ContactUsFormSelect = styled.select`
  width: 100%;
  height: 44px;
  padding: 0 6px;
  border: 4px solid #e6e6e6;
  margin-bottom: 16px;

  box-sizing: border-box;

  background-color: #181818;
  color: #e6e6e6;
  font-size: 1.1rem;
  font-family: MICEGothic;
`

const ContactUsFormTextarea = styled.textarea`
  width: 100%;
  height: 189px;
  border: 4px solid #e6e6e6;
  box-sizing: border-box;
  padding-top: 10px;
  padding-left: 12px;
  margin-bottom: 6px;

  background-color: #181818;

  color: #e6e6e6;
  font-size: 1.1rem;
  font-family: MICEGothic;
`

const ContactUsFormButton = styled.button`
  width: 103px;
  height: 38px;
  /* UI Properties */
  background: #7a7a7a 0% 0% no-repeat padding-box;
  border-radius: 5px 7px 7px 7px;
  opacity: 1;
  border: none;

  font-size: 1.1rem;
  font-family: MICEGothic;
  color: #181818;
  cursor: pointer;
`

const ContactPage = () => {
  return (
    <ContactUsBlock id="contactUs">
      <ContactUsContentsContainer>
        <ContactUsGoogleMapContainer>
          <iframe
            title="googleMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.2602539864943!2d127.04041881580682!3d37.52536193424175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca47834912025%3A0xf10921527dbbe446!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrj4TsgrDrjIDroZw1Oeq4uCAyNg!5e0!3m2!1sko!2skr!4v1663156620856!5m2!1sko!2skr"
            width="380"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <ContactUsGoogleMapAddressText>
            26, Dosan-daero 59-gil, Gangnam-gu, Seoul, Republic of Korea
            <br />
            서울특별시 강남구 도산대로 59길 26 (청담동, 히든힐하우스)
          </ContactUsGoogleMapAddressText>
        </ContactUsGoogleMapContainer>
        <ContactUsFormContainer>
          <ContactUsForm>
            <ContactUsFormInput
              type="email"
              id="E-mail"
              name="E-mail"
              placeholder="E-mail."
            />
            <ContactUsFormInput
              type="text"
              id="Your name"
              name="Your name"
              placeholder="Your name."
            />
            <ContactUsFormSelect>
              <option value={'1'}>Business</option>
              <option value={'2'}>PR</option>
              <option value={'3'}>Common Inquiry</option>
            </ContactUsFormSelect>
            <ContactUsFormInput
              type="text"
              id="Subject"
              name="Subject"
              placeholder="Subject."
            />
            <ContactUsFormTextarea
              id="Contents"
              name="Contents"
              placeholder="Contents."
            />

            <ContactUsFormButton>SEND</ContactUsFormButton>
          </ContactUsForm>
        </ContactUsFormContainer>
      </ContactUsContentsContainer>
    </ContactUsBlock>
  )
}

export default ContactPage
