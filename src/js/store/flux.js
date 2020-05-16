const url = "https://3000-bb002910-98b9-4fc4-85e8-2bfdf8159ffe.ws-us02.gitpod.io";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			inventory: [],
			users: [
				{ name: "mark", username: "markawesome", password: "mark123" },
				{ name: "mark", username: "markawesome", password: "mark123" },
				{ name: "mark", username: "markawesome", password: "mark123" },
				{ name: "mark", username: "markawesome", password: "mark123" },
				{ name: "mark", username: "markawesome", password: "mark123" }
			],
			jwt: {}
		},
		actions: {
			// Use getActions to call a function within a fuction getActions().changeColor(0, "green");
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
						console.log(json);
						const store = getStore();
						setStore({ jwt: json });
						console.log(store.jwt.jwt);
					})
					.then(() => {
						const store = getStore();
						if (store.jwt.jwt != undefined) {
							switch (store.jwt.lvl) {
								case 3:
									history.push("/scanStation");
									break;
								case 2:
									getActions().getProtected();
									history.push("/managerStation");
									break;
								case 1:
									getActions().getUsersProtected();
									history.push("/dashboard");
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
						console.log(json);
						const store = getStore();
						setStore({ jwt: json });
						console.log(store.jwt.jwt);
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
						console.log(result);
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
						console.log(result);
						setStore({ users: result });
					})
					.catch(error => console.log("error", error));
			},
			updateUserName: (olduser, newuser) => {
				const store = getStore();
				fetch(url + "/updateUserName", {
					method: "PUT",
					body: JSON.stringify({
						olduser: olduser,
						newuser: newuser
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
			}
		}
	};
};

export default getState;
