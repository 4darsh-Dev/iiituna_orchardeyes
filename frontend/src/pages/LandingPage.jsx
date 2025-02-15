import LandingPageVideo from '../assets/LandingPage.mp4'
import styled, { createGlobalStyle } from 'styled-components'
import PreferedOrchs from '../components/PreferredOrchs'
import FooterSection from '../components/FooterSection'
import Chatbot from '../components/chatbot/Chatbot'
import HomePage from './HomePage'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-tertiary);
  }
`

const MainContainer = styled.main``

const WelcomeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 500px;
  padding: 0 10vw;
`

const WelcomeVideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
    z-index: 1;
  }
`

const WelcomeVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const WelcomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55vw;
  z-index: 2;
`

const LandingPage = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer className='hidden sm:block relative'>
        <WelcomeContainer>
          <WelcomeVideoContainer>
            <WelcomeVideo src={LandingPageVideo} autoPlay loop muted />
          </WelcomeVideoContainer>
          <WelcomeText className='text-white flex items-start justify-center absolute top-1/2 max-w-[22rem] text-[5rem]'>
            <h1 className='text-3xl'>
              A <span className='text-highlight font-bold'>DRONE</span> POWERED
              SOLUTION FOR <span className='text-red-700'></span> ORCHARDS
            </h1>
          </WelcomeText>
        </WelcomeContainer>
        <Chatbot />
        <PreferedOrchs />
        <FooterSection />
        <div className='flex flex-col text-lg absolute right-5 top-[20vh] text-white'>
          <span> Test User details</span>
          <span>Email - test@gmail.com</span>
          <span>password - test@123</span>
        </div>
      </MainContainer>
      <HomePage />
    </>
  )
}

export default LandingPage
