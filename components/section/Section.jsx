import Image from 'next/image'
import React from 'react'

const Section = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="flex gap-10  justify-center items-center p-5">
				<div className="flex flex-col gap-5">
					<h1 className="text-4xl font-semibold">
						New Design <br />
						New Inspiration
					</h1>
					<p className="text-md">
						We design and develop modern websites and mobile apps. <br />
						We create premium designs and technology
					</p>
					<button className="bg-slate-950 text-white p-2 rounded-xl">Get Started</button>
				</div>
				<div>
					<Image src="/section.svg" width={350} height={350} alt="section"></Image>
				</div>
			</div>
			<div>
				<div className="flex flex-row justify-center items-center gap-44 ">
					<div className="basis-1/6">
						<h2 className="font-semibold text-lg">Discover</h2>
						<p className="text-sm">
							We are a community of artists and art enthusiasts who share a common interest in the arts. We are
							dedicated to promoting the arts and providing a platform for artists to showcase their work.
						</p>
					</div>
					<div className="basis-1/6">
						<h2 className="font-semibold text-lg">Explore</h2>
						<p className="text-sm">
							We are a community of artists and art enthusiasts who share a common interest in the arts. We are
							dedicated to promoting the arts and providing a platform for artists to showcase their work.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Section
