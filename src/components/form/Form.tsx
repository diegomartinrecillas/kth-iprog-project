import React, { useState } from 'react';
import InputField from '../input-field/InputField';
import Button from '../button/Button';
import styles from './Form.module.scss';
import InputSelect from '../input-select/InputSelect';
import { useProgrammes } from '../../hooks/useProgrammes';
import { Programme } from '../../models/Programme';
import { Course } from '../../models/Course';

interface Props {
	add?: boolean;
}

const Form = (props: Props) => {
	const { add } = props;
	const [programmes, programmesStatus] = useProgrammes();
	const [courses, setCourses] = useState([]);

	return (
		<form method="POST" action="some url" className={styles.form}>
			<div className="row">
				<div className="col">
					<div className={styles.cover} />
					<div className="spacing" />
					<InputField name="Cover picture" type="file" />
				</div>
				<div className="col-lg-9 col-sm-12">
					<div className="row">
						<div className="col-lg-8 col-sm-12">
							<div className="row medium-gutters">
								<div className="col-md-6">
									<InputSelect name="Programme">
										{programmes &&
											programmes.map((programme: Programme, index: number) => {
												return (
													<option
														key={index}
														onSelect={event => {
															setCourses(programme.courses);
														}}
													>
														{programme.name}
													</option>
												);
											})}
									</InputSelect>
								</div>

								<div className="col-md-6">
									<InputSelect name="Course">
										{courses &&
											courses.map((course: Course, index: number) => {
												return (
													<>
														<option key={index}>{course.name}</option>
													</>
												);
											})}
									</InputSelect>
								</div>
							</div>

							<div className="spacing" />

							<div className="row medium-gutters">
								<div className="col-md-6">
									<InputField name="Title" type="text" />
								</div>

								<div className="col-md-6">
									<InputField name="Author" type="text" />
								</div>
							</div>

							<div className="spacing" />

							<div className="row medium-gutters">
								<div className="col-md-6">
									<InputField name="Price" type="number" />
								</div>

								<div className="col-md-6">
									<InputField name="New Price" type="number" />
								</div>
							</div>

							<div className="spacing" />

							<div className="row medium-gutters">
								<div className="col-md-6">
									<InputField name="Release Year" type="number" />
								</div>

								<div className="col-md-6">
									<InputField name="Collect location" type="text" />
								</div>
							</div>

							<div className="spacing" />

							<InputField name="Book description" type="textarea" />
						</div>
						<div className="col-lg-4">
							<InputField name="Book condition" type="textarea" />

							<div className="spacing" />

							<Button
								text={add ? 'Add book' : 'Edit book'}
								icon={add ? 'plus' : 'edit'}
							/>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};

export default Form;
