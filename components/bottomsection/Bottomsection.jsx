import Image from 'next/image'
import React from 'react'

const Bottomsection = () => {
	return (
		<div className="flex items-center justify-center ">
			<div className="flex flex-col gap-4 w-[400px] ps-5">
				<div>
					<h2 className="text-4xl font-semibold">Design products</h2>
					<h2 className="text-4xl font-semibold">Deliver experience</h2>
				</div>
				<div className="flex flex-col gap-3 items-start text-justify">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam
						sit vulputate. Faucibus nec gravida ipsum pulvinar vel. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Cursus imperdiet sed id elementum.
					</p>
					<button className="bg-black text-white rounded-2xl p-2">Learn more</button>
				</div>
			</div>
			<div>
				<Image src="/bottomsection.svg" alt="bottom" width={500} height={500}></Image>
			</div>
		</div>
	)
}

export default Bottomsection
