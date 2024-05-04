import '@fortawesome/fontawesome-svg-core/styles.css'

import Banner from '@/components/banner/Banner'
import Bottombanner from '@/components/bottombanner/Bottombanner'
import Bottomsection from '@/components/bottomsection/Bottomsection'
import Footer from '@/components/footer/Footer'
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
			<Bottomsection />
			<Footer />
		</React.Fragment>
	)
}
