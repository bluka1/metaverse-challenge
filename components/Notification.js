import classes from './Notification.module.css';

const Notification = (props) => {
	return (
		<section className={classes.notification}>
			<h2>{props.title}</h2>
			<p>{props.message}</p>
		</section>
	);
};

export default Notification;
