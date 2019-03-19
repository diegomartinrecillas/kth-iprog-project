import React from 'react';
import NetworkService from '../api/NetworkService';

interface OwnProps {
	programmes?: any;
	courses?: any;
}

class SidebarSelects extends React.Component<{}, OwnProps> {
	constructor(props: any) {
		super(props);
		this.state = {
			programmes: null,
			courses: [],
		};
	}

	public componentDidMount() {
		NetworkService.getProgrammes().then(data => {
			this.setState({ programmes: data });
		});
		/*NetworkService.getCourses().then(data => {
			this.setState({ courses: data });
			console.log(this.state.courses);
		});*/
	}

	public render() {
		const { programmes, courses } = this.state;

		if (!programmes || !courses) {
			return <div>Loading...</div>;
		}

		return (
			<div className="sidebar-selects">
				<a href="">Handpicked</a>
				<div className="spacing spacing_sm" />
				<a className="active" href="">
					Latest Listings
				</a>
				<div className="spacing spacing_lg" />
				<div className="text-label">PROGRAMMES</div>
				<div className="spacing spacing_xs" />
				<select
					className="sidebar-selects__custom-select custom-select"
					id="programme-select"
				>
					{programmes.programmes.map((programme: any, index: number) => {
						return (
							<option key={index} value="">
								{programme.title.en}
							</option>
						);
					})}
				</select>
				<div className="spacing spacing--medium" />
				<div className="text-label">COURSES</div>
				<div className="spacing spacing_xs" />
				<select
					className="sidebar-selects__custom-select custom-select"
					id="programme-select"
				>
					{courses.map((course: any, index: number) => {
						return (
							<option key={index} value="">
								{course.name}
							</option>
						);
					})}
				</select>
			</div>
		);
	}
}

export default SidebarSelects;
