const crypto = require("crypto");
const fs = require("fs");

function encryptFile(inputFile, outputFile, password) {
  const key = crypto.createHash("sha256").update(password).digest();
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  const input = fs.createReadStream(inputFile);
  const output = fs.createWriteStream(outputFile);

  output.write(iv);
  input.pipe(cipher).pipe(output);

  output.on("finish", () => {
    console.log(`Encrypted to ${outputFile}`);
  });
}

encryptFile("./public/models/character.glb", "./public/models/character.enc", "MyCharacter12");