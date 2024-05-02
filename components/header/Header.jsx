import React from 'react'

const Header = () => {
	return (
		<div className="p-3">
			<ul className="flex justify-center gap-20">
				<li>
					<a href="/">BG ART GALLERY</a>
				</li>
				<li>
					<a href="/gallery">Gallery</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="/contact">Contact</a>
				</li>
				<li>
					<a href="/login">Login</a>
				</li>
				<li>
					<a href="/register">Register</a>
				</li>
			</ul>
		</div>
	)
}

export default Header
