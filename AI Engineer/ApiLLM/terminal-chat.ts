import type { ChatCompletionMessageParam, ChatModel } from "openai/resources";
import { client } from ".";

const model: ChatModel = "gpt-6-luna";

const messages: ChatCompletionMessageParam[] = [
	{
		role: "system",
		content: "Eres un asistente inteligente y muy consiso en sus respuestas.",
	},
];
while (true) {
	const content = prompt("Usurio: ");

	if (!content) {
		console.error("ERROR: Debes agregar un mensaje");
		continue;
	}

	const chatCompletionMessageParam: ChatCompletionMessageParam = {
		role: "user",
		content,
	};

	messages.push(chatCompletionMessageParam);

	const respuesta = await client.chat.completions.create({
		model,
		messages,
	});

	if (!respuesta.choices[0]) {
		console.error("ERROR: Hubo un error en la comunicación con el modelo");
		continue;
	}

	const aiResponse = respuesta.choices[0].message.content;

	console.log(`AI: ${aiResponse}`);
}
