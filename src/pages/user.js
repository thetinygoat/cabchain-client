import React, { Fragment, Component } from "react";
import axios from "../axios";
import { Link } from "react-router-dom";
import Card from "../components/card";
class User extends Component {
	state = {
		to: "",
		from: "",
		toPred: [],
		fromPred: [],
		fromCoord: [],
		toCoord: [],
		toOpen: false,
		fromOpen: false
	};
	handleToChange = e => {
		this.setState({ to: e.target.value }, this.handletoPred);
	};
	handleFromChange = e => {
		this.setState({ from: e.target.value }, this.handlefromPred);
	};
	handletoPred = async () => {
		const response = await axios.get(
			`/location?q=${encodeURIComponent(this.state.to.trim())}`
		);
		this.setState({ toPred: response.data });
	};
	handlefromPred = async () => {
		const response = await axios.get(
			`/location?q=${encodeURIComponent(this.state.from.trim())}`
		);
		this.setState({ fromPred: response.data });
	};
	render() {
		console.log(this.state.fromCoord);
		console.log(this.state.toCoord);
		return (
			<Fragment>
				<h1 className="text-center font-bold text-5xl text-gray-700 m-3">
					Looking for a Ride?
				</h1>
				<div className="w-full max-w-sm mx-auto">
					<div>
						<label className="block text-gray-700 font-bold mt-2 mb-2">
							From
						</label>
						<input
							className="border p-3 w-full"
							type="text"
							value={this.state.from}
							onChange={this.handleFromChange}
						/>
					</div>
					{this.state.from && !this.state.fromOpen && (
						<Card>
							{this.state.fromPred.map(pred => {
								console.log(pred);
								return (
									<p
										className="p-2 cursor-pointer w-full hover:bg-gray-200 rounded"
										onClick={() => {
											this.setState({ fromOpen: true });
											this.setState({
												fromCoord: pred.coordinates,
												from: `${pred.formattedAddress} ${pred.locality}`
											});
										}}
									>
										{pred.formattedAddress} {pred.locality}
									</p>
								);
							})}
						</Card>
					)}
					<div>
						<label className="block text-gray-700 font-bold mt-2 mb-2">
							To
						</label>
						<input
							className="border p-3 w-full"
							type="text"
							value={this.state.to}
							onChange={this.handleToChange}
						/>
					</div>
				</div>
				{this.state.to && !this.state.toOpen && (
					<Card>
						{this.state.toPred.map(pred => {
							console.log(pred);
							return (
								<p
									className="p-2 cursor-pointer w-full hover:bg-gray-200 rounded"
									onClick={() => {
										this.setState({ toOpen: true });
										this.setState({
											toCoord: pred.coordinates,
											to: `${pred.formattedAddress} ${pred.locality}`
										});
									}}
								>
									{pred.formattedAddress} {pred.locality}
								</p>
							);
						})}
					</Card>
				)}
				{this.state.fromCoord.length > 0 && this.state.toCoord.length > 0 && (
					<Fragment>
						<img
							src={`https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/Routes?wp.0=${
								this.state.fromCoord[0]
							},${this.state.fromCoord[1]};64;1&wp.1=${this.state.toCoord[0]},${
								this.state.toCoord[1]
							};66;2&key=AhISow8lG2QRH-7C6ba8HnxSUw6Y9paM2iJVU4Oiqx8NbUQ2v-Za0Jc5b2KNiP_g`}
							className="block mt-2 mx-auto border shadow"
						/>
					</Fragment>
				)}
				<Link to={`/order`}>
					<button className="w-full max-w-sm mx-auto block shadow bg-blue-500 rounded text-white font-bold p-2 mt-2 mb-4">
						Continue
					</button>
				</Link>
			</Fragment>
		);
	}
}

export default User;
