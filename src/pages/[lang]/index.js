import Head from 'next/head'
import Header from '../../components/Landing/Header'
import SectionHero from '../../components/Landing/SectionHero'
import SectionFeature from '../../components/Landing/SectionFeature'
import SectionWebCompatible from '../../components/Landing/SectionCompatible'
import SectionWallet from '../../components/Landing/SectionWallet'
import SectionFaq from '../../components/Landing/SectionFaq'
import SectionCommunity from '../../components/Landing/SectionCommunity'
import React from "react";
import Modal from "../../components/Landing/Modal";
import Search from "../../components/Landing/Search";
import useModal from "../../hooks/useModal";
import Pricing from "../../components/Landing/Pricing";
import Video from "../../components/Landing/Video";
import i18next from 'i18next';
import { getAllLanguageSlugs, getLanguage } from '../../lib/lang';
import Footer from "../../components/Landing/Footer";


export const LangHome = ({ language }) => {
	const { isShowing: isSearchShowing, toggle: toggleSearch } = useModal('search')
	const { isShowing: isBuyShowing, toggle: toggleBuy } = useModal('pricing')
	const { isShowing: isVideoShowing, toggle: toggleVideo } = useModal('video')

	return (
		<>
			<Head>
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name="title" content={ i18next.t('title') } />
				<meta name="description" content={ i18next.t('description') } />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://tangem.com" />
				<meta property="og:site_name" content={ i18next.t('title') } />
				<meta property="og:title" content={ i18next.t('title') } />
				<meta property="og:description" content={ i18next.t('description') } />
				<meta property="og:image" content="https://tangem-staging.netlify.app/img/hero/hero-phone-1x.png" />
				<meta property="og:video" content="https://www.youtube.com/watch?v=ST4jvcaE_UU" />
				<meta property="og:locale" content="en_US" />
				<title>Tangem Wallet — Hardware Wallet For Your Crypto</title>
				<link rel='shortcut icon' href='/img/favicon/favicon.png' />
				<link rel='apple-touch-icon' href='/img/favicon/favicon_180.png' />
			</Head>
			<Header/>
			<main>
				<SectionHero
					toggleBuy={toggleBuy}
					toggleVideo={toggleVideo}
				/>
				<SectionFeature
					toggleBuy={toggleBuy}
					toggleSearch={toggleSearch}
				/>
				<SectionWebCompatible />
				<SectionWallet />
				<SectionFaq />
				<SectionCommunity />
				<Modal
					isShowing={isSearchShowing}
					hide={toggleSearch}
				>
					<Search hide={toggleSearch} />
				</Modal>
				<Modal
					isShowing={isBuyShowing}
					hide={toggleBuy}
				>
					<Pricing hide={toggleBuy} />
				</Modal>
				<Modal isShowing={isVideoShowing}>
					<Video hide={toggleVideo} />
				</Modal>
			</main>
			<Footer />
		</>
	)
}

export async function getStaticPaths() {
	const paths = getAllLanguageSlugs();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const language = getLanguage(params.lang);
	return {
		props: {
			language,
		},
	};
}


export default LangHome
