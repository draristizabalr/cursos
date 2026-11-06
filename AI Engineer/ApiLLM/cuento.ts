import { client } from ".";

const response = await client.responses.create({
	model: "gpt-6-luna",
	input:
		"Escribe una pequeña oración, en español sobre un niño que encuentre un dragón en el bosque.",
});

console.log(response.output_text);
