import React from "react";
import table from "./table.css";

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contactlist: [],
		};
	}

	componentDidMount() {
		fetch("http://localhost:4040/contacts")
			.then((res) => res.json())
			.then((data) => {
				this.setState({ contactlist: data });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div className>
				<ul>
					{this.state.contactlist.map((contacts, index) => (
						<table>
							<tr>
								<td>
									<h3>NAME</h3>
								</td>
								<td>
									<h3>PHONE NO</h3>
								</td>
								<td>
									<h3>EMAIL</h3>
								</td>
							</tr>
							<tr key={index}>
								<td>
									<h4>
										{contacts.name.first}
										{contacts.name.last}
									</h4>
								</td>
								<td>
									<h4> {contacts.mobile}</h4>
								</td>
								<td>
									<h4>{contacts.email}</h4>
								</td>
							</tr>
						</table>
					))}
				</ul>
			</div>
		);
	}
}

export default Contact;
