const crypto = require("crypto");
const fs = require("fs");

function decryptFile(inputFile, outputFile, password) {
  const encrypted = fs.readFileSync(inputFile);
  const iv = encrypted.subarray(0, 16);
  const data = encrypted.subarray(16);

  const key = crypto.createHash("sha256").update(password).digest();
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);

  const decrypted = Buffer.concat([
    decipher.update(data),
    decipher.final(),
  ]);

  fs.writeFileSync(outputFile, decrypted);
  console.log(`Decrypted to ${outputFile}`);
}

decryptFile("./public/models/character.enc", "./public/models/character.glb", "MyCharacter12");