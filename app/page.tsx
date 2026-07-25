import Script from 'next/script'
import { HOME_CSS, HOME_HTML, HOME_JS } from './home-content'

export default function HomePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: HOME_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: HOME_HTML }} />
      <Script id="scr-home" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: HOME_JS }} />
    </>
  )
}
