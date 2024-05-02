import Image from 'next/image'
import React from 'react'

const Gallery = () => {
	return (
		<div className="mt-64 flex items-center justify-center">
			<div className="flex gap-12 p-5">
				<div className="w-96">
					<h1 className="text-2xl font-semibold">Create your online gallery</h1>
					<p>You can create your own gallery with your own images and share it with your friends.</p>
				</div>
				<div>
					<Image src="/gallery.svg" width={400} height={400} alt="gallery"></Image>
				</div>
			</div>
			<div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export default Gallery
