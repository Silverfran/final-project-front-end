const url = process.env.APIHOST;

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			inventory: [],
			users: [],
			jwt: { lvl: "1" },
			buffers: {},
			rates: null,
			message: [
				{
					user: "James W.",
					subject: "wrong calculation",
					message: "the sensors are reporting wrong calculations"
				},
				{
					user: "Joao H. ",
					subject: "too expensive",
					message:
						"shipment cost are too expensive, can we see if we can find another company that has better prices? this is ridiculous!!!"
				},
				{
					user: "Bridget S.",
					subject: "Admin Request",
					message: "can you please make me an admin , its already approved by Alejandro."
				}
			]
		},
		actions: {
			signIn: (email, pass, history) => {
				fetch(url + "/login", {
					method: "POST",
					body: JSON.stringify({
						email: email,
						password: pass
					}),
					headers: {
						"Content-type": "application/json; charset=UTF-8"
					}
				})
					.then(response => response.json())
					.then(json => {
						if (json.msg != undefined) {
							alert(json.msg);
						}
						setStore({ jwt: json });
					})

					.then(() => {
						const store = getStore();
						if (store.jwt.jwt != undefined) {
							switch (store.jwt.lvl) {
								case 3:
									// getActions().getBuffersProtected();
									history.push("/scanStation");
									break;
								case 2:
									getActions().getProtected();
									history.push("/managerStation");
									break;
								case 1:
									getActions().getUsersProtected();
									getActions().getProtected();
									getActions().getRates({
										Weight: "5",
										Length: "2",
										Width: "3",
										Height: "4"
									});
									history.push("/admindashboard");
									break;
								default:
									history.push("/");
									break;
							}
						}
					});
			},
			signUp: (user, email, pass) => {
				fetch(url + "/signup", {
					method: "POST",
					body: JSON.stringify({
						username: user,
						email: email,
						password: pass
					}),
					headers: {
						"Content-type": "application/json; charset=UTF-8"
					}
				})
					.then(response => response.json())
					.then(json => {
						setStore({ jwt: json });
					});
			},
			getProtected: () => {
				const store = getStore();
				var myHeaders = new Headers();
				myHeaders.append("Authorization", `Bearer ${store.jwt.jwt}`);

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch(url + "/protected", requestOptions)
					.then(response => response.json())
					.then(result => {
						setStore({ inventory: result });
					})
					.catch(error => console.log("error", error));
			},
			getUsersProtected: () => {
				const store = getStore();
				var myHeaders = new Headers();
				myHeaders.append("Authorization", `Bearer ${store.jwt.jwt}`);

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch(url + "/userProtected", requestOptions)
					.then(response => response.json())
					.then(result => {
						setStore({ users: result });
					})
					.catch(error => console.log("error", error));
			},
			updateUser: (id, user, email, password, role_id) => {
				const store = getStore();
				fetch(url + "/updateUser", {
					method: "PUT",
					body: JSON.stringify({
						id: id,
						username: user,
						email: email,
						password: password,
						role_id: role_id
					}),
					headers: {
						"Content-type": "application/json; charset=UTF-8",
						Authorization: `Bearer ${store.jwt.jwt}`
					}
				})
					.then(response => response.json())
					.then(json => {
						console.log(json);
					});
			},
			deleteUser: id => {
				const store = getStore();
				fetch(url + "/deleteUser", {
					method: "DELETE",
					body: JSON.stringify({
						name: id
					}),
					headers: {
						"Content-type": "application/json; charset=UTF-8",
						Authorization: `Bearer ${store.jwt.jwt}`
					},
					redirect: "follow"
				})
					.then(response => response.json())
					.then(json => {
						console.log(json);
					});
			},
			getBuffersProtected: () => {
				const store = getStore();
				var myHeaders = new Headers();
				myHeaders.append("Authorization", `Bearer ${store.jwt.jwt}`);

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch(url + "/api/test/get", requestOptions)
					.then(response => response.json())
					.then(result => {
						setStore({ buffers: result });
					})
					.catch(error => console.log("error", error));
			},
			savePackage: buffer => {
				const store = getStore();
				var myHeaders = new Headers();
				myHeaders.append("Authorization", `Bearer ${store.jwt.jwt}`);
				myHeaders.append("Content-type", "application/json");

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					redirect: "follow",
					body: JSON.stringify(buffer)
				};
				fetch(url + "/savePackage", requestOptions)
					.then(response => response.json())
					.then(json => {
						console.log(json);
					});
			},
			getRates: buffer => {
				const store = getStore();
				var myHeaders = new Headers();
				myHeaders.append("Authorization", `Bearer ${store.jwt.jwt}`);
				myHeaders.append("Content-type", "application/json");

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					redirect: "follow",
					body: JSON.stringify(buffer)
				};
				fetch(url + "/getRates", requestOptions)
					.then(response => response.json())
					.then(json => {
						setStore({ rates: json });
						// console.log("the get rates", store.rates);
					});
			}
		}
	};
};

export default getState;
