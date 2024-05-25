import { computed, effect, signal } from "@preact/signals";

export const data = signal(null);
//useEffect on signal when value is changed
//effect(() => console.log(data.value));
//default value after initialization
data.value = "John";

const delta = signal(0);
export const count = signal(0);
export const counter = signal(0);
//when count changed it automatically anyway count changed data
export const double = computed(() => count.value * 2);

// function callback when count data is changed, it execute also a first time
const callback = (newValue) => {
	//console.log("Il valore di count è cambiato:", newValue);
};

// subscribe execute callback when count data is changed
count.subscribe(callback);

const counterCallback = (newValue) => {
	console.log("Il valore di counter è cambiato:", newValue);
};

counter.subscribe(counterCallback);

// change value of count
count.value = 10; //
