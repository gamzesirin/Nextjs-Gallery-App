import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
	return (
		<div>
			<footer className={' bg-gray-900 text-white text-center py-6'}>
				<h3 className={'text-2xl font-bold'}>BG Art Gallery</h3>
				<div className="flex gap-10 items-center justify-center ">
					<ul className="text-start">
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/about">About</a>
						</li>
						<li>
							<a href="/contact">Contact</a>
						</li>
						<li>
							<a href="/gallery">Gallery</a>
						</li>
						<li>
							<a href="/services">Services</a>
						</li>
					</ul>
					<ul className="text-center">
						<li>
							<a href="/privacy">Privacy Policy</a>
						</li>
						<li>
							<a href="/terms">Terms of Service</a>
						</li>
						<li>
							<a href="/cookies">Cookies Policy</a>
						</li>
						<li>
							<a href="/sitemap">Sitemap</a>
						</li>
						<li>
							<a href="/faq">FAQ</a>
						</li>
					</ul>
					<ul>
						<li>
							<a href="/">
								<FontAwesomeIcon icon={faFacebook} size="x" />
							</a>
						</li>
						<li>
							<a href="/">
								<FontAwesomeIcon icon={faInstagram} size="x" />
							</a>
						</li>
						<li>
							<a href="/">
								<FontAwesomeIcon icon={faTwitter} size="x" />
							</a>
						</li>
						<li>
							<a href="/">
								<FontAwesomeIcon icon={faYoutube} size="x" />
							</a>
						</li>
					</ul>
				</div>
				<p className={'mt-4'}>&copy; {new Date().getFullYear()} BG Art Gallery. All rights reserved.</p>
			</footer>
		</div>
	)
}

export default Footer
