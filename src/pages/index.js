// @ts-nocheck
import * as React from "react"
import { Seo } from "../components/atoms/seo/seo";
import GlobalStyles from "../styles/GlobalStyles";
import Input from "../components/atoms/Input/Input";
import Button from "../components/atoms/Button/Button";


const IndexPage = () => {

      const [error, setError] = React.useState(false);

  return (
    <main>
      <GlobalStyles />
      <h1>Strona główna</h1>
      <Input name='name' type='text' error={error} label='Imię' />
      <Input name='name' type='text' error={error} label='Email' />
      <Input name='name' type='textarea' error={error} label='Wiadomość' />
      <Button text='Wyślij' type='button' />
    </main>
  )
}

export default IndexPage;

export const Head = () => {
  return (
    <Seo title="Strona główna" description="Strona główna" pathname="/" children={IndexPage} />
  )
}
