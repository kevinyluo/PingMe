import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="0793f727-d469-4f21-811e-0dbccce0ee9f"
      userName="kevinyluo"
      userSecret="joonie707"
      renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps}/>}
    />
  )
}

export default App;