export async function query(inputData: String) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/Norod78/yet-another-sdxl-tattoo-lora",
    {
      headers: {
        Authorization: "Bearer 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",
      },
      method: "POST",
      body: JSON.stringify(inputData),
    }
  );
  const result = await response.blob();
  return result;
}
