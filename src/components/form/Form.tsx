import React, { useContext } from 'react';
import { AsyncTypeahead, Typeahead } from 'react-bootstrap-typeahead';
import { Formik } from 'formik';

import { UserContext } from '../../contexts/User.context';

import InputField from '../input-field/InputField';
import Button from '../button/Button';
import styles from './Form.module.scss';

import { useProgrammes } from '../../hooks/useKthProgrammes';
import { useCourses } from '../../hooks/useKthCourses';
import { NetworkService, RequestStatus } from '../../api';
import { KthCourse } from '../../models/KthCourse';

interface Props {
	add?: boolean;
}

const Form = (props: Props) => {
	const { add } = props;
	const { user } = useContext(UserContext);
	const [programmes, programmeStatus] = useProgrammes();
	const [courses, courseStatus, setCourseQuery] = useCourses();

	return (
		<Formik
			initialValues={{
				cover_photo: null,
				programme: '',
				course: '',
				title: '',
				author: '',
				price: null,
				new_price: null,
				release_year: null,
				pickup_location: '',
				description: '',
				personal_description: '',
			}}
			onSubmit={values => {
				NetworkService.addNewBook(values, user.rundbokToken)
					.then(response => console.log(response))
					.catch(error => console.log(error));
			}}
		>
			{({ handleChange, handleSubmit, isSubmitting, setFieldValue }) => (
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className="row special-gutters">
						<div className="col-lg-8 col-sm-12">
							<div className="row medium-gutters">
								<div className="col-md-6">
									<div className="d-flex flex-column">
										<label htmlFor="programme" className="input-label">
											Programme
										</label>
										<Typeahead
											id="programme"
											isLoading={programmeStatus === RequestStatus.LOADING}
											inputProps={{ name: 'programme', required: true }}
											labelKey="title"
											options={programmes}
											onChange={selected =>
												setFieldValue('programme', selected[0])
											}
											placeholder="Search programme..."
										/>
									</div>
								</div>

								<div className="col-md-6">
									<div className="d-flex flex-column">
										<label htmlFor="course" className="input-label">
											Course
										</label>
										<AsyncTypeahead
											id="course"
											isLoading={courseStatus === RequestStatus.LOADING}
											inputProps={{ name: 'course', required: true }}
											options={courses}
											labelKey="title"
											minLength={3}
											onSearch={setCourseQuery}
											onChange={selected =>
												setFieldValue('course', selected[0])
											}
											placeholder="Search course..."
											renderMenuItemChildren={(option: KthCourse, _, index) => (
												<div key={index}>{option.title}</div>
											)}
										/>
									</div>
								</div>
							</div>

							<div className="spacing" />

							<div className="row medium-gutters">
								<div className="col-md-6">
									<InputField
										label="Title"
										name="title"
										type="text"
										onChange={handleChange}
									/>
								</div>

								<div className="col-md-6">
									<InputField
										label="Author"
										name="author"
										type="text"
										onChange={handleChange}
									/>
								</div>
							</div>

							<div className="spacing" />

							<div className="row medium-gutters">
								<div className="col-md-6">
									<InputField
										label="Price"
										name="price"
										type="number"
										onChange={handleChange}
									/>
								</div>

								<div className="col-md-6">
									<InputField
										label="New price"
										name="new_price"
										type="number"
										onChange={handleChange}
									/>
								</div>
							</div>

							<div className="spacing" />

							<div className="row medium-gutters">
								<div className="col-md-6">
									<InputField
										label="Release Year"
										name="release_year"
										type="number"
										onChange={handleChange}
									/>
								</div>

								<div className="col-md-6">
									<InputField
										label="Pickup location"
										name="pickup_location"
										type="text"
										onChange={handleChange}
									/>
								</div>
							</div>

							<div className="spacing" />

							<InputField
								label="Book description"
								name="description"
								type="textarea"
								onChange={handleChange}
							/>
						</div>
						<div className="col-lg-4">
							<InputField
								label="Cover picture"
								name="cover_photo"
								type="file"
								onChange={handleChange}
							/>

							<div className="spacing" />

							<InputField
								label="Book condition"
								name="personal_description"
								type="textarea"
								onChange={handleChange}
							/>

							<div className="spacing" />

							<Button
								text={add ? 'Add book' : 'Edit book'}
								icon={add ? 'plus' : 'edit'}
								type="submit"
								disabled={isSubmitting}
							/>
						</div>
					</div>
				</form>
			)}
		</Formik>
	);
};

export default Form;
