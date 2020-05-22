import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Scanner = () => {
	const { store, actions } = useContext(Context);
	useEffect(
		() => {
			actions.getBuffersProtected();
		},
		[store.buffers]
	);
	return (
		<div className="container scanstation mt-2 ">
			<div className="row ">
				<div className="col-md-6 d-flex justify-content-center">
					<img className="imgscan mt-5" src={`data:image/png;base64,${store.buffers.img}`} />
				</div>
				<div className="col-md-6 inputfields">
					<h1 className="text-center mt-2">Add a new package</h1>
					<form>
						<div className="form-group form-inline">
							<label className="mr-2">Length</label>
							<input
								type="text"
								className="form-control"
								defaultValue={store.buffers.Length}
								// onChange={e => setName(e.target.value)}
							/>
						</div>
						<div className="form-group form-inline">
							<label className="mr-3">Width</label>
							<input
								type="text"
								className="form-control"
								defaultValue={store.buffers.Width}
								// onChange={e => setName(e.target.value)}
							/>
						</div>
						<div className="form-group form-inline">
							<label className="mr-2">Height</label>
							<input
								type="text"
								className="form-control"
								defaultValue={store.buffers.Height}
								// onChange={e => setName(e.target.value)}
							/>
						</div>
						<div className="form-group form-inline">
							<label className="mr-2">Weight</label>
							<input
								type="text"
								className="form-control "
								defaultValue={store.buffers.Weight}
								// onChange={e => setName(e.target.value)}
							/>
						</div>
						<button
							type="button"
							className="btn btn-primary form-control mb-5"
							onClick={() => actions.savePackage(store.buffers)}>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
