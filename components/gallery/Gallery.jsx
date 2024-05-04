import Image from 'next/image'
import React from 'react'

const Gallery = () => {
	return (
		<div className="flex felx-col  mt-50 pt-5">
			<div className="mt-64 flex items-center justify-center ">
				<div className="flex gap-64 ml-[530px] ">
					<div className="w-[36rem]">
						<h1 className="text-2xl font-semibold">Create your online gallery</h1>
						<p>You can create your own gallery with your own images and share it with your friends.</p>
						<p>
							You can create your own gallery with your own images and share it with your friends. You can create your
							own gallery with your own images and share it with your friends.
						</p>
					</div>
					<div>
						<Image src="/gallery.svg" width={450} height={450} alt="gallery"></Image>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Gallery
