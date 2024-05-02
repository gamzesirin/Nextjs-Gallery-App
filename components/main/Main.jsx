import React from 'react'
import styles from './main.module.css'

const Main = () => {
	return (
		<div className="p-5">
			<div className=" flex justify-center items-center ">
				<div className={styles.bgImage}>
					<div className={styles.topImage}></div>
				</div>
			</div>
			<div className="w-[48rem] float-right me-96 pe-36 p-5">
				<h1 className="text-2xl font-semibold">Our Story</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris nunc, ultricies et libero nec,
					tincidunt vehicula purus. Nulla quis semper orci. Nullam nec nunc nec nunc ultricies ultricies. Donec quis
					velit nec libero pulvinar vehicula. In hac habitasse platea dictumst.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris nunc, ultricies et libero nec,
					tincidunt vehicula purus. Nulla quis semper orci. Nullam nec nunc nec nunc ultricies ultricies. Donec quis
					velit nec libero pulvinar vehicula. In hac habitasse platea dictumst.
				</p>
			</div>
		</div>
	)
}

export default Main
