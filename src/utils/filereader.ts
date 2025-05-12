export async function readImageFile(file: File): Promise<string> {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = (event) => {
      resolve(event.target.result as string);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export const readFiles = async (arr: FileList): Promise<string[]> => {
  const res = [];
  for (let file of arr) {
    try {
      const url = await readImageFile(file);
      if (/^обложка|обложка[._-]/gi.test(file.name)) {
        res.unshift(url); // Обложки — в начало
      } else {
        res.push(url); // Остальные — в конец
      }
    } catch (err) {
      console.error(`Не удалось обработать ${file.name}:`, err);
    }
  }
  return res;
};
