const server = Bun.serve({
  port: process.env.PORT || 3000,
  fetch(req) {
    console.log(req.url);
    return new Response("<h1>Welcome Bunjs without frameworks</h1>", {
      headers: { "Content-Type": "text/html" },
    });
  },
});

console.log(`Server running to ${server.url}`);
