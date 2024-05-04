import Banner from '@/components/banner/Banner'
import Bottombanner from '@/components/bottombanner/Bottombanner'
import Gallery from '@/components/gallery/Gallery'
import Header from '@/components/header/Header'
import Main from '@/components/main/Main'
import React from 'react'
import Section from '@/components/section/Section'

export default function Home() {
	return (
		<React.Fragment>
			<Header />
			<Banner />
			<Section />
			<Main />
			<Gallery />
			<Bottombanner />
		</React.Fragment>
	)
}
