import Practice from './Practice';
import TabParent from './Projects/CustomTabs/tab-test';
import FeaturedFlagGlobalState from './Projects/FeaturedFlag/context';
import FeaturedFlag from './Projects/FeaturedFlag/FeaturedFlag';
import ProfileFinder from './Projects/GithubProfileFinder/ProfileFinder';
import LightDark from './Projects/LightAndDarkMode/LightDark';
import ModalTest from './Projects/ModalPopUp/ModalTest';
import QrCodeGenerator from './Projects/QrCode/QrCodeGenerator';
import CustomScroll from './Projects/Scroll_Indicator/CustomScroll';
import { ScrollToSection } from './Projects/ScrollToSection/Scroll-to-section';
import ScrollToTopAndBottom from './Projects/ScrollToTopAndBottom';
import AutoComplete from './Projects/SearchAutoComplete/AutoComplete';
import TicTacToe from './Projects/TicTacToe/TicTacToe';
import UseFetchHookTest from './Projects/UseFetchHook/text';
import UseOnClickOutsideTest from './Projects/useOutsideClick/test';
import UseWindowResize from './Projects/UseWindowResize';
import UseWindowResizeHook from './Projects/UseWindowResize/test';

function App() {
  return (
    <>
      {/* <QrCodeGenerator/> */}
      {/* <LightDark/> */}
      {/* <CustomScroll/> */}
      {/* <TabParent /> */}
      {/* <ModalTest /> */}
      {/* <ProfileFinder/> */}
      {/* <AutoComplete/> */}
      {/* <TicTacToe/> */}
      {/* <FeaturedFlagGlobalState>
        <FeaturedFlag />
      </FeaturedFlagGlobalState> */}
      {/* <UseFetchHookTest />  */}
      {/* <UseOnClickOutsideTest/> */}
      {/* <UseWindowResizeHook /> */}
      {/* <ScrollToTopAndBottom/> */}
      <ScrollToSection/>
    </>
  );
}

export default App;
