
function ContactMe() {
    return(
        <section className="contact--section" id="Contact">
            <div>
                <p className="sub--title">Get in touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">Lorem ipsum dolor sit amet ducimus nulla eveniet, dolorum, odit inventore est excepturi harum.</p>
            </div>
            <form className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="first-name"
                            id="first-name"
                            required
                        />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="last-name"
                            id="last-name"
                            required
                        />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input
                            type="email"
                            className="contact--input text-md"
                            name="email"
                            id="email"
                            required
                        />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone number</span>
                        <input
                            type="number"
                            className="contact--input text-md"
                            name="phone-number"
                            id="phone-number"
                            required
                        />
                    </label>
                </div>
                <label htmlFor="choose-topic" className="contact--label">
                        <span className="text-md">Choose a topic</span>
                        <select id="choose-topic" className="contact--input text-md" >
                            <option> Select One...</option>
                            <option>Item 1</option>
                            <option>Item 2</option>
                            <option>Item 3</option>
                        </select>
                    </label>
                    <label htmlFor="message" className="contact--label">
                        <span className="text-md">Message</span>
                        <textarea
                            className="contact--input text-md"
                            rows={8}
                            id="message"
                            placeholder="Type your message..."
                        />
                    </label>
                    <label htmlFor="checkbox" className="contact--label">
                        <span className="text-md">Phone number</span>
                        <input
                            type="checkbox"
                            required name="checkbox"
                            id="checkbox"
                        />
                        <span  className="text-sm">I accept the terms</span>
                    </label>
                    <div>
                        <button className="btn btn-primary">Submit</button>
                    </div>
            </form>
        </section>
    )
}

export default ContactMe
