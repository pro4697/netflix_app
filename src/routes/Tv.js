import React from 'react';
import { motion } from 'framer-motion';
import NavBottom from '../components/NavBottom';
import Loader from '../components/Loader';
import { RenderList } from '../utils';
import './Tv.css';

import { getTvData } from '../_actions/action';
import { connect } from 'react-redux';

class Tv extends React.Component {
	state = {
		isLoading: true,
		today: [],
		thisWeek: [],
		topRated: [],
		popular: [],
	};

	async componentDidMount() {
		if (!this.props.isSaved) {
			this.props.dispatch(getTvData()).then((res) => {
				this.setState({
					isLoading: false,
					today: res.payload.today,
					thisWeek: res.payload.thisWeek,
					topRated: res.payload.topRated,
					popular: res.payload.popular,
				});
			});
		} else {
			this.setState({
				isLoading: false,
				today: this.props.isSaved.payload.today,
				thisWeek: this.props.isSaved.payload.thisWeek,
				topRated: this.props.isSaved.payload.topRated,
				popular: this.props.isSaved.payload.popular,
			});
		}
	}

	render() {
		const { isLoading, today, thisWeek, topRated, popular } = this.state;
		return (
			<>
				{isLoading ? (
					<Loader />
				) : (
					<motion.div className='tv__container' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
						{today?.length > 0 && RenderList('Today', today)}
						{thisWeek?.length > 0 && RenderList('ThisWeek', thisWeek)}
						{topRated?.length > 0 && RenderList('TopRated', topRated)}
						{popular?.length > 0 && RenderList('Popular', popular)}
					</motion.div>
				)}
				<NavBottom props={[null, 'white', null]} />
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	isSaved: state.store.tvData,
});

export default connect(mapStateToProps)(Tv);
