import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue = "") {
	const [savedValue, setSavedValue] = useState(() => {
		const valueInLocalStorage = window.localStorage.getItem(key);
		if (valueInLocalStorage) {
			return JSON.parse(valueInLocalStorage);
		}

		return typeof (initialValue === "function") ? initialValue() : initialValue;
	});

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(savedValue));
	}, [key, savedValue]);

	return [savedValue, setSavedValue];
}

export default useLocalStorage;
