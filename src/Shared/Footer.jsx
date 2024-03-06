import { Link } from "react-router-dom";

 
const Footer = () => {
    return (
        <div className="mt-6">
            <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    
    <p className="text-3xl">Cox's Bazar Polytechnic<br/>Institute</p>
  </aside> 
  
  
  <nav>
    <h6 className="footer-title">Copyright ©  2020-2021 CBPI, All Rights Reserved </h6> 
    <p>Lead Developer <Link to="https://www.facebook.com/istaik.toaha" >Mohammad Toaha Alfeth</Link></p>
    
  </nav>
</footer>
        </div>
    );
};

export default Footer;