import Image from 'next/image'
import React from 'react'

const Banner = () => {
	return (
		<div className="flex flex-col  justify-between items-center">
			<div className="flex  items-center gap-16">
				<h1 className="text-4xl font-bold">Welcome BG Art Gallery</h1>
				<div className="p-3 flex flex-col gap-2">
					<p className="text-md w-80 text-justify">
						We are a community of artists and art enthusiasts who share a common interest in the arts. We are dedicated
						to promoting the arts and providing a platform for artists to showcase their work.
					</p>
					<button className="bg-slate-950 text-white p-2 rounded-lg">Go Gallery</button>
				</div>
			</div>
			<div>
				<Image src="/hero.svg" width={800} height={400} alt="hero"></Image>
			</div>
		</div>
	)
}

export default Banner
