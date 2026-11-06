import type { ChatCompletionMessageParam, ChatModel } from "openai/resources";
import { client } from ".";

const model: ChatModel = "gpt-6-luna";

let messages: ChatCompletionMessageParam[] = [
	{ role: "system", content: "Eres un asistente muy útil y amable" },
	{ role: "user", content: "¿Cuál es la capital de Colombia?" },
];

try {
	const res1 = await client.chat.completions.create({
		model,
		messages,
	});

	if (!res1.choices[0]) {
		throw "No se tiene respuesta";
	}

	console.log(res1.choices[0].message.content);
	messages = messages.concat([res1.choices[0].message]);
	messages.push({ role: "user", content: "¿Y su población?" });
} catch {
	throw "Ha ocurrido un error en la consulta con el modelo";
}

const res2 = await client.chat.completions.create({
	model,
	messages,
});

if (!res2.choices[0]) {
	throw "No se tiene respuesta";
}

console.log(res2.choices[0].message.content);
