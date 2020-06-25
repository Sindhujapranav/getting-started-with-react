import React from "react";
import table from "./table.css";

class Agent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			agentlist: [],
		};
	}

	componentDidMount() {
		fetch("http://localhost:4040/agents")
			.then((res) => res.json())
			.then((data) => {
				this.setState({ agentlist: data });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div className>
				<ul>
					{this.state.agentlist.map((agent, index) => (
						<table key={index}>
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
							<tr>
								<td>
									<h4>
										{agent.name.first}
										{agent.name.last}
									</h4>
								</td>
								<td>
									<h4> {agent.mobile}</h4>
								</td>
								<td>
									<h4>{agent.email}</h4>
								</td>
							</tr>
						</table>
					))}
				</ul>
			</div>
		);
	}
}

export default Agent;
