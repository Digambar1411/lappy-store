import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


export function Footer() {
    return (
        <footer className="ecom-footer flex">
			<div className="footer-section flex-col gap-1rem">
				<Link to="/" className="brandName">
					Lappy Store
				</Link>
				<div className="footer-heading">
					Made with ❤️ by Digambar
				</div>
				<div className="flex gap-1rem">
					<a href="https://www.linkedin.com/in/digambar-deshawal-9b279b147/">
						<img src="https://img.icons8.com/color/48/000000/linkedin.png"alt="linkedin" />
					</a>

					<a href="https://twitter.com/deshawald14">
						<img src="https://img.icons8.com/color/48/000000/twitter-squared.png" alt="twitter"/>
					</a>

					<a href="https://github.com/Digambar1411">
						<img src="https://img.icons8.com/color-glass/48/000000/github.png" alt="github"/>
					</a>	
				</div>
			</div>

			<div className="footer-section flex-col gap-1rem">
				<p className="footer-heading">Quick Links</p>
				<ul className="footer-links flex-col gap-1rem">
					<li>
						<Link className="social-icon" to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className="social-icon" to="/wishlist">
							Wishlist
						</Link>
					</li>
					<li>
						<Link className="social-icon" to="/cart">
							Cart
						</Link>
					</li>
				</ul>
			</div>

			<div className="footer-section flex-col gap-1rem">
				<p className="footer-heading">Informative</p>
				<ul className="footer-links flex-col gap-1rem">
					<li>
						<Link className="footer-link" to="/">
							About
						</Link>
					</li>
					<li>
						<Link className="footer-link" to="/">
							FAQ
						</Link>
					</li>
					<li>
						<Link className="footer-link" to="/">
							Privacy Policy
						</Link>
					</li>
				</ul>
			</div>
		</footer>

    );
}