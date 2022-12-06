import cn from 'classnames'
import { useRouter } from 'next/router'

import LINKSHead from '@Heads/links'
import SEOHead from '@Heads/sso/seo'
import SMOHead from '@Heads/sso/smo'

import { SOCIAL_MEDIA_FB_USERNAME } from '@Constants/social-media'
import Layout from '@Layout'
import Main from '@Layout/02_main'

export default function Landing() {
  const router = useRouter()
  return (
    <>
      <SEOHead isHome={true} />
      <SMOHead isHome={true} path={router.pathname} />
      <LINKSHead />

      <Layout>
        <Main className="landing">
          <section className="w-screen h-screen flex flex-col items-center justify-center font-light text-white text-center text-42">
            <p>Welcome, to the Future Home of</p>
            <h1 className="mt-100 mb-80 flex flex-col items-center justify-center uppercase leading-[0.82]">
              <span className="self-start ml-9 mb-5 text-[4.21rem]">The</span>
              <span className="font-bold text-[7.98rem]">Fraternal</span>
              <span className="font-bold ml-4 text-[15.4rem]">Order</span>
              <span className="w-full flex items-start justify-between">
                <span className="ml-9 text-[4.21rem]">Of</span>
                <span className="font-bold text-[11.1779rem]">Eagles</span>
              </span>
              <span className="self-end mr-5 text-[9.535rem]">#3849</span>
            </h1>
            <p>
              Until we have a website, follow us on
              <br className="x:hidden" />{' '}<a className="underline" href={`https://www.facebook.com/${SOCIAL_MEDIA_FB_USERNAME}`} target="_blank">Facebook</a> to keep up to date
              <br className="y:hidden" />{' '}on various
              <br className="x:hidden" />{' '}events, menus, and announcements!
            </p>
          </section>
        </Main>
      </Layout>
    </>
  )
}
