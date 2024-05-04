import React from 'react'
import styles from './bottombanner.module.css'

const Bottombanner = () => {
	return (
		<div className="flex items-center justify-center">
			<div className={styles.bg}>
				<div className="flex flex-col gap-5 items-center justify-center my-20">
					<h1 className="text-3xl font-semibold">Walk through the world with us</h1>
					<p className="w-96 text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam
						sit vulputate. Faucibus nec gravida ipsum pulvinar vel.
					</p>
					<button className="text-white bg-black rounded-xl px-5 py-1">Join us</button>
				</div>
			</div>
		</div>
	)
}

export default Bottombanner
