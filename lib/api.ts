const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL || "https://enseigne-mjpub-api.vercel.app"
).replace(/\/$/, "");
export async function requestAPI(path: string, body: object | FormData) {
  const multipart = body instanceof FormData;
  const response = await fetch(API_BASE_URL + path, {
    method: "POST",
    headers: multipart ? undefined : { "Content-Type": "application/json" },
    body: multipart ? body : JSON.stringify(body),
    signal: AbortSignal.timeout(20000),
  });
  if (!response.ok)
    throw new Error(
      "L’envoi n’a pas abouti. Réessayez ou contactez-nous par téléphone.",
    );
  const contentType = response.headers.get("content-type") || "";
  const data = contentType.includes("application/json")
    ? await response.json()
    : null;
  if (data?.success === false)
    throw new Error(
      "Votre demande n’a pas été enregistrée. Veuillez réessayer.",
    );
  return data;
}
