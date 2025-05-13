import './App.css'
import '../../packages/wisipoo/src/wisipoo.css';
import { Thing } from 'wisipoo';

function App() {
  return (
    <>
    <p>hi</p>
    <Thing content="hi wow" />
    <Thing content="fancy hi" fancy />
    </>
  )
}

export default App
