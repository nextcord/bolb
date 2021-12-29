export async function handleRequest(request: Request): Promise<Response> {
  const ua = request.headers.get("user-agent") as string;

  if (ua.toLocaleLowerCase().includes("discord")) {
    return new Response(
      `
        <head>
          <meta property="og:title" content="bolb">
        </head>
      `,
      {
        headers: {
          "Content-Type": "text/html",
        },
      },
    );
  }

  return new Response("bolb");
}
