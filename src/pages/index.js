// @ts-nocheck
import * as React from "react"
import { Seo } from "../components/atoms/seo/seo";
import Input from "../components/atoms/Input/Input";
import Button from "../components/atoms/Button/Button";
import Link from "../components/atoms/Link/Link";
import HamburgerButton from "../components/atoms/HamburgerButton/HamburgerButton";
import FAQElement from "../components/atoms/FAQElement/FAQElement";

const IndexPage = () => {

  const [error, setError] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <main>
      <h1>Strona główna</h1>
      <HamburgerButton openMenu={() => setIsOpen(!isOpen)}  isOpen={isOpen} isBlack></HamburgerButton>
      <Input name='name' type='text' error={error} label='Imię' />
      <Input name='name' type='text' error={error} label='Email' />
      <Input name='name' type='textarea' error={error} label='Wiadomość' />
      <Button text='Wyślij' type='button' />
      <FAQElement question='Pytanie' answer='odpowiedź' />
      <Link>Przenieś</Link>
    </main>
  )
}

export default IndexPage;

export const Head = () => {
  return (
    <Seo title="Strona główna" description="Strona główna" pathname="/" children={IndexPage} />
  )
}
