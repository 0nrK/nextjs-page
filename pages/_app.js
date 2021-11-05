import 'tailwindcss/tailwind.css';
import "./styles/global.css"
export const ThemeContext = React.createContext();




export default function App({ Component, pageProps }) {
    return 
    <Component {...pageProps} />
  }