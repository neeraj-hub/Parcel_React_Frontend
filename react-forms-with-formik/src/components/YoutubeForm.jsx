import { useFormik } from 'formik';

function YoutubeForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            channel: ''
        },
        onSubmit: values => {
            console.log('Form values:', values);
        },
        validate: values => {
            const logErrors = {};
            if (!values.name) {
                logErrors.name = 'Required';
            } else if (values.name.length < 3) {
                logErrors.name = 'Must be at least 3 characters long';
            }
            if (!values.email) {
                logErrors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                logErrors.email = 'Invalid email address';
            }
            if (!values.channel) {
                logErrors.channel = 'Required';
            }
            return logErrors;
        }
    });
    console.log(formik.errors)
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <div className='form-control'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" onChange={formik.handleChange} value={formik.values.name}/>
            {formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
            </div>

            <div className='form-control'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" onChange={formik.handleChange} value={formik.values.email}/>
            {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
            </div>

            <div className='form-control'>
            <label htmlFor="channel">Channel</label>
            <input type="text" id="channel" name="channel" placeholder="Enter your channel name" onChange={formik.handleChange} value={formik.values.channel}/>
            {formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
            </div>

            <button type='submit'>Submit</button>   
        </form>
    </div>
  )
}

export default YoutubeForm;