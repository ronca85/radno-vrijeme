const initState = {
	ducanStuff: [
		{ id: "1", imeDucana: "Deak-Tehna", sadrzajDucana: "bijela tehnika" },
		{ id: "2", imeDucana: "Bic", sadrzajDucana: "bicikl servis" },
		{ id: "3", imeDucana: "Scout", sadrzajDucana: "pijača" }
	]
};

const ducanReducer = (state = initState, action) => {
	switch (action.type) {
		case "UNESI_DUCAN":
			console.log("dućan unesen", action.ducan);
			return state;
		case "UNESI_DUCAN_GRESKA":
			console.log("greška kod unosa dućana", action.err);
			return state;
		default:
			return state;
	}
}

export default ducanReducer;

