import React, { useContext } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

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
import { BookUpload } from '../../models/BookUpload';
import { SearchContext } from '../../contexts';
import Spinner from '../spinner/Spinner';

interface Props extends RouteComponentProps {
	add?: boolean;
	book?: BookUpload;
	setStatus?: (status: RequestStatus) => void;
}

const Form = (props: Props) => {
	const { add, book, history, setStatus } = props;
	const { user } = useContext(UserContext);
	const { search } = useContext(SearchContext);
	const [programmes, programmeStatus] = useProgrammes();
	const [courses, courseStatus, setCourseQuery] = useCourses();

	return (
		<Formik
			initialValues={book ? book : new BookUpload()}
			onSubmit={(values, { setSubmitting }) => {
				const data = new FormData();
				const {
					author,
					programme_code,
					course_code,
					price,
					new_price,
					personal_description,
					description,
					release_year,
					title,
					cover_photo,
				} = values;

				data.append('author', author);
				data.append('programme_code', programme_code);
				data.append('course_code', course_code);
				data.append('price', price.toString());
				data.append('new_price', new_price.toString());
				data.append('personal_description', personal_description);
				data.append('description', description);
				data.append('release_year', release_year.toString());
				data.append('title', title);
				data.append('cover_photo', cover_photo);

				setSubmitting(true);
				if (add) {
					NetworkService.addNewBook(user.rundbokToken, data)
						.finally(() => setSubmitting(false))
						.then(response => {
							search({});
							history.replace('/');
						})

						.catch();
				} else {
					setStatus(RequestStatus.LOADING);
					NetworkService.editBook(user.rundbokToken, data, book.id)
						.finally(() => setSubmitting(false))
						.then(response => {
							search({});
							history.replace('/my-books');
							setStatus(RequestStatus.SUCCESS);
						})
						.catch(() => setStatus(RequestStatus.ERROR));
				}
			}}
		>
			{({
				initialValues,
				values,
				handleChange,
				handleSubmit,
				isSubmitting,
				setFieldValue,
			}) => {
				const {
					author,
					programme_code,
					course_code,
					price,
					new_price,
					personal_description,
					description,
					release_year,
					title,
					__courseName,
					__programmeName,
				} = initialValues;

				return (
					<form className={styles.form} onSubmit={handleSubmit}>
						<div className="row special-gutters">
							<div className="col-xl-8">
								<div className="row medium-gutters">
									<div className="col-md-6">
										<div className="d-flex flex-column">
											<label htmlFor="programme" className="input-label">
												Programme
											</label>
											<Typeahead
												defaultSelected={
													programme_code && [
														{
															programmeCode: programme_code,
															title: __programmeName,
														},
													]
												}
												id="programme"
												isLoading={programmeStatus === RequestStatus.LOADING}
												inputProps={{ name: 'programme', required: true }}
												labelKey="title"
												options={programmes}
												onChange={selected =>
													setFieldValue(
														'programme_code',
														selected[0].programmeCode
													)
												}
												placeholder="Search programme..."
											/>
										</div>
									</div>

									<div className="col-md-6">
										<div className="spacing d-xl-none" />
										<div className="d-flex flex-column">
											<label htmlFor="course" className="input-label">
												Course
											</label>
											<AsyncTypeahead
												defaultSelected={
													course_code && [
														{
															courseCode: course_code,
															credits: null,
															educationalLevel: null,
															title: __courseName,
														},
													]
												}
												id="course"
												isLoading={courseStatus === RequestStatus.LOADING}
												inputProps={{ name: 'course', required: true }}
												options={courses}
												labelKey="title"
												minLength={3}
												onSearch={setCourseQuery}
												onChange={selected =>
													setFieldValue('course_code', selected[0].courseCode)
												}
												placeholder="Search course..."
												renderMenuItemChildren={(
													option: KthCourse,
													_,
													index
												) => <div key={index}>{option.title}</div>}
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
											defaultValue={title}
											onChange={handleChange}
										/>
									</div>

									<div className="col-md-6">
										<div className="spacing d-xl-none" />
										<InputField
											label="Author"
											name="author"
											type="text"
											defaultValue={author}
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
											defaultValue={price && price.toString()}
											onChange={handleChange}
										/>
									</div>

									<div className="col-md-6">
										<div className="spacing d-xl-none" />
										<InputField
											label="New price"
											name="new_price"
											type="number"
											defaultValue={new_price && new_price.toString()}
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
											defaultValue={release_year && release_year.toString()}
											onChange={handleChange}
										/>
									</div>
								</div>

								<div className="spacing" />

								<InputField
									label="Book description"
									name="description"
									type="textarea"
									defaultValue={description}
									onChange={handleChange}
								/>
							</div>
							<div className="col-xl-4">
								<div className="spacing d-xl-none" />

								<InputField
									label="Cover picture"
									name="cover_photo"
									type="file"
									text={values.cover_photo && (values.cover_photo as File).name}
									onChange={event =>
										setFieldValue('cover_photo', event.currentTarget.files[0])
									}
								/>

								<div className="spacing" />

								<InputField
									label="Book condition"
									name="personal_description"
									type="textarea"
									defaultValue={personal_description}
									onChange={handleChange}
								/>

								<input
									hidden
									name="authorization"
									type="text"
									defaultValue={user && user.rundbokToken}
								/>

								<div className="spacing" />

								{isSubmitting ? (
									<Spinner />
								) : (
									<Button
										text={add ? 'Add book' : 'Edit book'}
										icon={add ? 'plus' : 'edit'}
										type="submit"
										disabled={isSubmitting}
									/>
								)}

								<div className="spacing" />
							</div>
						</div>
					</form>
				);
			}}
		</Formik>
	);
};

export default withRouter(Form);
