import { Client, Wallet, convertStringToHex, SubmittableTransaction } from "xrpl";

async function mintNFT() {
  const xrplClient = new Client("wss://s.altnet.rippletest.net:51233");
  await xrplClient.connect();
  try {
    const issuerWallet = Wallet.fromSeed("sEdVfo37Ttej2jnCyET1xAR2tEn7Kni");
    const issuerAddress = issuerWallet.address;
    const metadataURI = "ipfs://bafkreiephocicf5v2mrry5itmikk6ig3qeluwydwleobunvqrhars6qnda";
    const transactionBlob: SubmittableTransaction = {
      TransactionType: "NFTokenMint",
      Account: issuerAddress,
      NFTokenTaxon: 0,
      Flags: 9,
      URI: convertStringToHex(metadataURI),
    };
    const prepared = await xrplClient.autofill(transactionBlob);
    const signed = issuerWallet.sign(prepared);
    console.log(signed);
    const signedTx = await xrplClient.submitAndWait(signed.tx_blob);
    console.log("NFT minted successfully!");
    console.log("Transaction hash : " + signedTx.result.hash);
  } catch (error) {
    console.error("Error minting NFT:", error);
  } finally {
    xrplClient.disconnect();
  }
}
export default mintNFT;