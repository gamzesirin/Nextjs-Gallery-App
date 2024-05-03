import Image from 'next/image'
import React from 'react'

const Gallery = () => {
	return (
		<div className="flex felx-col items-center justify-center mt-50">
			<div className="mt-64 flex items-center justify-center">
				<div className="flex gap-12 p-5">
					<div className="w-96">
						<h1 className="text-2xl font-semibold">Create your online gallery</h1>
						<p>You can create your own gallery with your own images and share it with your friends.</p>
						<p></p>
					</div>
					<div>
						<Image src="/gallery.svg" width={400} height={400} alt="gallery"></Image>
					</div>
				</div>
			</div>
			<div className="flex flex-row">
				<div className="basis-1/4">
					<Image src="/a1.svg" width={100} height={100} alt="card1"></Image>
				</div>
				<div className="basis-1/4">
					<Image src="/a2.svg" width={100} height={100} alt="card2"></Image>
				</div>
				<div className="basis-1/4">
					<Image src="/a3.svg" width={100} height={100} alt="card3"></Image>
				</div>
				<div className="basis-1/4">
					<Image src="/a4.svg" width={100} height={100} alt="card4"></Image>
				</div>
			</div>
		</div>
	)
}

export default Gallery
