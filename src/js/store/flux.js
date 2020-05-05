const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			jwt: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			signIn: (email, pass) => {
				fetch("https://3000-e03b4dff-593f-47c2-b41e-ee75ae70ca8b.ws-us02.gitpod.io/login", {
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
						setStore({ jwt: json });
						const store = getStore();
						console.log(store.jwt.jwt);
					});
			},
			signUp: (user, email, pass) => {
				fetch("https://3000-e03b4dff-593f-47c2-b41e-ee75ae70ca8b.ws-us02.gitpod.io/signup", {
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
						setStore({ jwt: json });
						const store = getStore();
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

				fetch("https://3000-afe7cdaa-0392-42f9-b74d-bf47fdc54199.ws-us02.gitpod.io/protected", requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
