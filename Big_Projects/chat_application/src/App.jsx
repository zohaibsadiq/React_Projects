import './App.css';
import { ChatEngine, } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
    <ChatEngine
      height='100vh'
      projectID='7f7a311f-97b0-4f84-b863-99019cb43f43'
      userName="jutt's ChatBoard"
      userSecret='123456'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
