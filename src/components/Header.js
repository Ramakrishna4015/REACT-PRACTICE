import Heading from "./Heading"
   export default function Header(){
        return(
            <header>
                <Heading/>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <input type="text"></input>
                    <button>Search</button>
                </nav>
            </header>
        )
    }
