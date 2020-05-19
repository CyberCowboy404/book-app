import { FaShoppingBasket } from 'react-icons/fa';

export default function Header() {
    let count = 0;
    
    return (
        <header>
            <img width='95px' src="logo.png" alt=""/>
            <div>
                <a href="#">Login</a>
                <a href="#">Register</a>
            </div>
            <div>
                <FaShoppingBasket></FaShoppingBasket>
                <span>{count}</span>
            </div>
        </header>
    );    
}