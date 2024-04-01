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
  for (let i of arr) {
    let url = await readImageFile(i);
    if (/обложка/gi.test(i.name)) {
      res.unshift(url);
    } else {
      res.push(url);
    }
  }
  return res;
};
